'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './OttoGalleryPreparation.module.css';

interface ImageType {
  src: string;
  width: number;
  height: number;
  title?: string;
}

interface OttoGalleryPreparationProps {
  images: ImageType[];
}

const OttoGalleryPreparation: React.FC<OttoGalleryPreparationProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(75); // початковий масштаб 75%
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Перевірка доступності зображень
  useEffect(() => {
    const checkImages = async () => {
      const loadStatuses = await Promise.all(
        images.map(async (image) => {
          if (typeof window === 'undefined') return true;

          try {
            const img = new window.Image();
            img.crossOrigin = 'anonymous';

            return new Promise<boolean>((resolve) => {
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
              img.src = image.src;
            });
          } catch (error) {
            console.error('Error checking image:', error);
            return false;
          }
        })
      );

      setImagesLoaded(loadStatuses);
    };

    checkImages();
  }, [images]);

  // Функції навігації
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Функції масштабування
  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 25, 150));
  };

  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 25, 50));
  };

  const resetZoom = () => {
    setZoom(75);
  };

  // Отримання поточного зображення
  const currentImage = images[currentIndex];
  const isImageLoaded = imagesLoaded[currentIndex];

  return (
    <div className={styles.galleryContainer} ref={containerRef}>
      {/* Контейнер зображення */}
      <div className={styles.imageContainer}>
        {isImageLoaded ? (
          <div
            className={styles.imageWrapper}
            style={{
              transform: `scale(${zoom / 100})`,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={currentImage.src || '/placeholder.svg'}
              alt={currentImage.title || `Зображення ${currentIndex + 1}`}
              width={currentImage.width}
              height={currentImage.height}
              className={styles.image}
            />
          </div>
        ) : (
          <div className={styles.placeholder}>
            <p>Зображення недоступне</p>
          </div>
        )}
      </div>

      {/* Заголовок зображення */}
      {currentImage.title && (
        <div className={styles.imageTitle}>{currentImage.title}</div>
      )}

      {/* Контейнер елементів керування */}
      <div className={styles.controlsContainer}>
        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={goToPrevious}
            aria-label="Попереднє зображення"
          >
            &lt;
          </button>

          <div className={styles.zoomControls}>
            <button
              onClick={zoomOut}
              aria-label="Зменшити"
              className={styles.zoomButton}
            >
              -
            </button>
            <span className={styles.zoomLevel}>{zoom}%</span>
            <button
              onClick={zoomIn}
              aria-label="Збільшити"
              className={styles.zoomButton}
            >
              +
            </button>
            <button
              onClick={resetZoom}
              aria-label="Скинути масштаб"
              className={styles.resetButton}
            >
              ↺
            </button>
          </div>

          <button
            className={styles.navButton}
            onClick={goToNext}
            aria-label="Наступне зображення"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Мініатюри */}
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
            onClick={() => goToImage(index)}
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

export default OttoGalleryPreparation;
