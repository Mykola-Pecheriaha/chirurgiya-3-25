'use client';

import type React from 'react';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './GalleryFaceliftDetails.module.css';

interface ImageItem {
  src: string;
  width?: number;
  height?: number;
}

interface GalleryFaceliftDetailsProps {
  images: (string | ImageItem)[];
  galleryId: string;
}

const GalleryFaceliftDetails: React.FC<GalleryFaceliftDetailsProps> = ({
  images,
  galleryId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gallerySize, setGallerySize] = useState(100);
  const [processedImages, setProcessedImages] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const imagesCheckedRef = useRef(false);

  // Нормалізуємо масив зображень до єдиного формату при першому рендері
  useEffect(() => {
    if (imagesCheckedRef.current) return;

    const normalizedImages: ImageItem[] = images.map((img) => {
      if (typeof img === 'string') {
        return { src: img, width: 800, height: 600 };
      }
      return img;
    });

    setProcessedImages(normalizedImages);
    setIsLoading(false);
    imagesCheckedRef.current = true;
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? processedImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === processedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const zoomIn = () => {
    setGallerySize((prevSize) => Math.min(prevSize + 10, 150));
  };

  const zoomOut = () => {
    setGallerySize((prevSize) => Math.max(prevSize - 10, 50));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading || processedImages.length === 0) {
    return <div className={styles.loading}>Завантаження галереї...</div>;
  }

  const currentImage = processedImages[currentIndex];
  const imageWidth = currentImage.width || 800;
  const imageHeight = currentImage.height || 600;

  return (
    <div
      className={styles.gallery}
      style={{
        width: `${gallerySize}%`,
        margin: '0 auto',
      }}
    >
      <div
        className={styles.mainImageContainer}
        style={{
          height: `${imageHeight * (gallerySize / 100)}px`,
        }}
      >
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
          aria-label="Попереднє зображення"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.imageWrapper}>
          <Image
            src={currentImage.src || '/placeholder.svg'}
            alt={`Зображення ${currentIndex + 1}`}
            width={imageWidth}
            height={imageHeight}
            className={styles.mainImage}
            priority={currentIndex === 0}
            onError={(e) => {
              // Якщо зображення не завантажилося, замінюємо його на плейсхолдер
              const target = e.target as HTMLImageElement;
              target.src = `/placeholder.svg?height=${imageHeight}&width=${imageWidth}&query=facelift image ${currentIndex + 1}`;
            }}
          />
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="Наступне зображення"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.zoomControls}>
          <button
            onClick={zoomOut}
            className={styles.zoomButton}
            aria-label="Зменшити"
            disabled={gallerySize <= 50}
          >
            <ZoomOut size={20} />
          </button>
          <span className={styles.zoomLevel}>{gallerySize}%</span>
          <button
            onClick={zoomIn}
            className={styles.zoomButton}
            aria-label="Збільшити"
            disabled={gallerySize >= 150}
          >
            <ZoomIn size={20} />
          </button>
        </div>

        <div className={styles.indicators}>
          {processedImages.map((_, index) => (
            <button
              key={`${galleryId}-indicator-${index}`}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Перейти до зображення ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>

      <div className={styles.thumbnails}>
        {processedImages.map((image, index) => {
          const thumbWidth = image.width ? image.width / 8 : 100;
          const thumbHeight = image.height ? image.height / 8 : 75;

          return (
            <div
              key={`${galleryId}-thumb-${index}`}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={`Мініатюра ${index + 1}`}
                width={thumbWidth}
                height={thumbHeight}
                className={styles.thumbnailImage}
                onError={(e) => {
                  // Якщо мініатюра не завантажилася, замінюємо її на плейсхолдер
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=${thumbHeight}&width=${thumbWidth}&query=thumbnail ${index + 1}`;
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryFaceliftDetails;
