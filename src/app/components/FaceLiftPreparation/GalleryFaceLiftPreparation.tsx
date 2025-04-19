'use client';

import type React from 'react';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './GalleryFaceLiftPreparation.module.css';

interface ImageItem {
  src: string;
  width: number;
  height: number;
}

interface GalleryFaceLiftPreparationProps {
  images: (string | ImageItem)[];
  galleryId: string;
}

const GalleryFaceLiftPreparation: React.FC<GalleryFaceLiftPreparationProps> = ({
  images,
  galleryId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gallerySize, setGallerySize] = useState(100); // Початковий розмір галереї 100%
  const [isLoading, setIsLoading] = useState(true);
  const [processedImages, setProcessedImages] = useState<ImageItem[]>([]);
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

  const handleZoomIn = () => {
    setGallerySize((prevSize) => Math.min(prevSize + 10, 150));
  };

  const handleZoomOut = () => {
    setGallerySize((prevSize) => Math.max(prevSize - 10, 50));
  };

  // Якщо зображення ще не оброблені, показуємо заглушку
  if (isLoading || processedImages.length === 0) {
    return <div className={styles.loading}>Завантаження галереї...</div>;
  }

  const currentImage = processedImages[currentIndex];
  const aspectRatio = currentImage.width / currentImage.height;

  return (
    <div
      className={styles.galleryContainer}
      style={{ width: `${gallerySize}%` }}
    >
      <div className={styles.mainImageContainer}>
        <button className={styles.navButton} onClick={handlePrev}>
          <ChevronLeft size={24} />
        </button>

        <div
          className={styles.imageWrapper}
          style={{
            paddingBottom: `${(1 / aspectRatio) * 100}%`,
          }}
        >
          <Image
            src={currentImage.src || '/placeholder.svg'}
            alt={`Зображення ${currentIndex + 1}`}
            fill
            className={styles.mainImage}
            priority={currentIndex === 0}
            onError={(e) => {
              // Якщо зображення не завантажилося, замінюємо його на плейсхолдер
              const target = e.target as HTMLImageElement;
              target.src = `/placeholder.svg?height=${currentImage.height}&width=${currentImage.width}&query=facelift image ${currentIndex + 1}`;
            }}
          />
        </div>

        <button className={styles.navButton} onClick={handleNext}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.indicators}>
          {processedImages.map((_, index) => (
            <button
              key={`${galleryId}-indicator-${index}`}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Перейти до зображення ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.zoomControls}>
          <button
            className={styles.zoomButton}
            onClick={handleZoomOut}
            aria-label="Зменшити"
          >
            <ZoomOut size={20} />
          </button>
          <span className={styles.zoomLevel}>{gallerySize}%</span>
          <button
            className={styles.zoomButton}
            onClick={handleZoomIn}
            aria-label="Збільшити"
          >
            <ZoomIn size={20} />
          </button>
        </div>
      </div>

      <div className={styles.thumbnails}>
        {processedImages.map((img, index) => (
          <div
            key={`${galleryId}-thumb-${index}`}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={img.src || '/placeholder.svg'}
              alt={`Мініатюра ${index + 1}`}
              width={100}
              height={100 / (img.width / img.height)}
              className={styles.thumbnailImage}
              onError={(e) => {
                // Якщо мініатюра не завантажилася, замінюємо її на плейсхолдер
                const target = e.target as HTMLImageElement;
                target.src = `/placeholder.svg?height=75&width=100&query=thumbnail ${index + 1}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryFaceLiftPreparation;
