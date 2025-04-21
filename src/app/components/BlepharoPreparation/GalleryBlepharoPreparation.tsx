'use client';

import type React from 'react';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './GalleryBlepharoPreparation.module.css';

interface ImageItem {
  src: string;
  width: number;
  height: number;
  title: string;
}

interface GalleryBlepharoPreparationProps {
  images: ImageItem[];
  galleryId: string;
}

const GalleryBlepharoPreparation: React.FC<GalleryBlepharoPreparationProps> = ({
  images,
  galleryId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(75); // початковий масштаб 75%
  const [availableImages, setAvailableImages] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Перевірка доступності зображень
  useEffect(() => {
    const checkImagesAvailability = async () => {
      if (typeof window === 'undefined') return;

      setIsLoading(true);

      const checkedImages = await Promise.all(
        images.map(async (image) => {
          try {
            const response = await fetch(image.src, { method: 'HEAD' });
            return response.ok ? image : null;
          } catch (error) {
            return null;
          }
        })
      );

      const filteredImages = checkedImages.filter(
        (image): image is ImageItem => image !== null
      );

      setAvailableImages(
        filteredImages.length > 0
          ? filteredImages
          : [
              {
                src: '/serene-eyes.png',
                width: 600,
                height: 400,
                title: 'Зображення недоступне',
              },
            ]
      );

      setIsLoading(false);
    };

    checkImagesAvailability();
  }, [images]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? availableImages.length - 1 : prevIndex - 1
    );
  }, [availableImages.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === availableImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [availableImages.length]);

  const handleZoomIn = useCallback(() => {
    setZoom((prevZoom) => Math.min(prevZoom + 10, 150));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((prevZoom) => Math.max(prevZoom - 10, 50));
  }, []);

  // Обробка клавіатурних подій
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '+') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev, handleZoomIn, handleZoomOut]);

  if (isLoading) {
    return <div className={styles.loading}>Завантаження галереї...</div>;
  }

  if (availableImages.length === 0) {
    return <div className={styles.noImages}>Немає доступних зображень</div>;
  }

  const currentImage = availableImages[currentIndex];

  return (
    <div className={styles.gallery} id={galleryId}>
      <div className={styles.mainImageContainer}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
          aria-label="Попереднє зображення"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.imageWrapper} style={{ width: '100%' }}>
          <div
            className={styles.zoomContainer}
            style={{
              transform: `scale(${zoom / 100})`,
              width: `${(100 * 100) / zoom}%`,
              height: `${(100 * 100) / zoom}%`,
            }}
          >
            <Image
              src={currentImage.src || '/placeholder.svg'}
              alt={currentImage.title || `Зображення ${currentIndex + 1}`}
              width={currentImage.width}
              height={currentImage.height}
              className={styles.mainImage}
              priority={currentIndex === 0}
            />
          </div>
          <p className={styles.imageTitle}>{currentImage.title}</p>
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
            onClick={handleZoomOut}
            className={styles.zoomButton}
            aria-label="Зменшити"
            disabled={zoom <= 50}
          >
            <ZoomOut size={20} />
          </button>
          <span className={styles.zoomLevel}>{zoom}%</span>
          <button
            onClick={handleZoomIn}
            className={styles.zoomButton}
            aria-label="Збільшити"
            disabled={zoom >= 150}
          >
            <ZoomIn size={20} />
          </button>
        </div>

        <div className={styles.indicators}>
          {availableImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Перейти до зображення ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>

      <div className={styles.thumbnails}>
        {availableImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.title || `Мініатюра ${index + 1}`}
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

export default GalleryBlepharoPreparation;
