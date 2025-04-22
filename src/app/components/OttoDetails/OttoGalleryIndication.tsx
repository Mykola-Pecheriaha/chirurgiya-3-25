'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './OttoGalleryIndication.module.css';

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  title?: string;
}

interface OttoGalleryIndicationProps {
  images: GalleryImage[];
}

const OttoGalleryIndication: React.FC<OttoGalleryIndicationProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(75); // Початковий масштаб 75%
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Перевірка доступності зображень
    const checkImages = async () => {
      const loadStatuses = await Promise.all(
        images.map(async (image) => {
          if (typeof window === 'undefined') return true;

          return new Promise<boolean>((resolve) => {
            const img = new window.Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = image.src;
          });
        })
      );

      setImagesLoaded(loadStatuses);
      setAllImagesLoaded(loadStatuses.every((status) => status));
    };

    checkImages();
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

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 25, 150));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 25, 50));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className={styles.noImages}>Немає доступних зображень</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className={styles.galleryContainer} ref={containerRef}>
      <div className={styles.mainImageContainer}>
        {!allImagesLoaded && (
          <div className={styles.loading}>Завантаження зображень...</div>
        )}

        <div
          className={styles.imageWrapper}
          style={{
            transform: `scale(${zoom / 100})`,
            opacity: imagesLoaded[currentIndex] ? 1 : 0.3,
          }}
        >
          <Image
            src={currentImage.src || '/placeholder.svg'}
            alt={currentImage.title || `Зображення ${currentIndex + 1}`}
            width={currentImage.width}
            height={currentImage.height}
            className={styles.mainImage}
            priority
          />
        </div>
      </div>

      {currentImage.title && (
        <div className={styles.imageTitle}>{currentImage.title}</div>
      )}

      <div className={styles.controlsContainer}>
        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Попереднє зображення"
          >
            &lt;
          </button>

          <div className={styles.zoomControls}>
            <button
              className={styles.zoomButton}
              onClick={handleZoomOut}
              disabled={zoom <= 50}
              aria-label="Зменшити"
            >
              -
            </button>
            <span className={styles.zoomLevel}>{zoom}%</span>
            <button
              className={styles.zoomButton}
              onClick={handleZoomIn}
              disabled={zoom >= 150}
              aria-label="Збільшити"
            >
              +
            </button>
          </div>

          <button
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Наступне зображення"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className={styles.thumbnailsContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={`Мініатюра ${index + 1}`}
              width={100}
              height={75}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OttoGalleryIndication;
