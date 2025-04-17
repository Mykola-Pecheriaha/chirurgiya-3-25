'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './GalleryGinecomastiyaPreparation.module.css';

export interface GalleryGinecomastiyaPreparationProps {
  images: string[];
  galleryId: string;
}

const GalleryGinecomastiyaPreparation: React.FC<
  GalleryGinecomastiyaPreparationProps
> = ({ images, galleryId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(0.75); // Початковий масштаб 75%
  const [availableImages, setAvailableImages] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImagesAvailability = async () => {
      const checkedImages = await Promise.all(
        images.map(async (src) => {
          try {
            const response = await fetch(src, { method: 'HEAD' });
            return response.ok
              ? src
              : `/placeholder.svg?height=400&width=600&query=medical+image`;
          } catch (error) {
            return `/placeholder.svg?height=400&width=600&query=medical+image`;
          }
        })
      );
      setAvailableImages(checkedImages);
    };

    checkImagesAvailability();
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? availableImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === availableImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
  };

  if (availableImages.length === 0) {
    return <div className={styles.loading}>Завантаження галереї...</div>;
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <div
          className={styles.mainImage}
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src={availableImages[currentIndex] || '/placeholder.svg'}
            alt={`Зображення ${currentIndex + 1}`}
            width={600}
            height={400}
            priority={currentIndex === 0}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
          aria-label="Попереднє зображення"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="Наступне зображення"
        >
          <ChevronRight size={24} />
        </button>

        <div className={styles.zoomControls}>
          <button
            onClick={handleZoomIn}
            aria-label="Збільшити"
            className={styles.zoomButton}
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            aria-label="Зменшити"
            className={styles.zoomButton}
          >
            <ZoomOut size={20} />
          </button>
        </div>
      </div>

      <div className={styles.thumbnails}>
        {availableImages.map((src, index) => (
          <div
            key={`${galleryId}-thumb-${index}`}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={src || '/placeholder.svg'}
              alt={`Мініатюра ${index + 1}`}
              width={100}
              height={75}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {availableImages.map((_, index) => (
          <button
            key={`${galleryId}-indicator-${index}`}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Перейти до зображення ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryGinecomastiyaPreparation;
