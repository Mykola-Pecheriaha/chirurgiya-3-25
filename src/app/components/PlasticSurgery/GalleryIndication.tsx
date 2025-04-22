'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './GalleryIndication.module.css';

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  title?: string;
}

interface GalleryIndicationProps {
  images: GalleryImage[];
  initialZoom?: number;
}

export const GalleryIndication: React.FC<GalleryIndicationProps> = ({
  images,
  initialZoom = 75,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(initialZoom);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImagesExist = async () => {
      setIsLoading(true);
      const loadedStates = await Promise.all(
        images.map(async (image) => {
          if (typeof window === 'undefined') return false;

          return new Promise<boolean>((resolve) => {
            const img = new window.Image();
            img.src = image.src;
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
          });
        })
      );
      setImagesLoaded(loadedStates);
      setIsLoading(false);
    };

    checkImagesExist();
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 10, 150));
  };

  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 10, 50));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getSafeImageSrc = (index: number) => {
    if (!imagesLoaded[index]) {
      return `/placeholder.svg?height=${images[index].height}&width=${images[index].width}&query=ottoplastic image ${index + 1}`;
    }
    return images[index].src;
  };

  return (
    <div className={styles.gallery}>
      {isLoading ? (
        <div className={styles.loading}>Завантаження...</div>
      ) : (
        <>
          <div className={styles.mainImageContainer}>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrev}
              aria-label="Попереднє зображення"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.imageWrapper}>
              <div
                className={styles.imageScaler}
                style={{ transform: `scale(${zoom / 100})` }}
              >
                <Image
                  src={getSafeImageSrc(currentIndex) || '/placeholder.svg'}
                  alt={
                    images[currentIndex].title ||
                    `Зображення ${currentIndex + 1}`
                  }
                  width={images[currentIndex].width}
                  height={images[currentIndex].height}
                  className={styles.mainImage}
                  priority={currentIndex === 0}
                />
              </div>
            </div>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="Наступне зображення"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {images[currentIndex].title && (
            <div className={styles.imageTitle}>
              {images[currentIndex].title}
            </div>
          )}

          <div className={styles.controls}>
            <div className={styles.zoomControls}>
              <button
                onClick={zoomOut}
                className={styles.zoomButton}
                aria-label="Зменшити"
                disabled={zoom <= 50}
              >
                <ZoomOut size={20} />
              </button>
              <span className={styles.zoomLevel}>{zoom}%</span>
              <button
                onClick={zoomIn}
                className={styles.zoomButton}
                aria-label="Збільшити"
                disabled={zoom >= 150}
              >
                <ZoomIn size={20} />
              </button>
            </div>

            <div className={styles.indicators}>
              {images.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`Перейти до зображення ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>
          </div>

          <div className={styles.thumbnails}>
            {images.map((image, index) => (
              <div
                key={`thumb-${index}`}
                className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={getSafeImageSrc(index) || '/placeholder.svg'}
                  alt={image.title || `Мініатюра ${index + 1}`}
                  width={100}
                  height={75}
                  className={styles.thumbnailImage}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryIndication;
