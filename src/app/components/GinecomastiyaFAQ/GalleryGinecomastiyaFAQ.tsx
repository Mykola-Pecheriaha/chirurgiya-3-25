'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import styles from './GalleryGinecomastiyaFAQ.module.css';

interface GalleryGinecomastiyaFAQProps {
  images: string[];
  galleryId: string;
}

const GalleryGinecomastiyaFAQ: React.FC<GalleryGinecomastiyaFAQProps> = ({
  images,
  galleryId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(0.75); // Початковий масштаб 75%
  const [safeImages, setSafeImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Перевіряємо доступність зображень тільки на клієнті
    if (typeof window === 'undefined') return;

    const checkImagesExistence = async () => {
      try {
        setIsLoading(true);
        const checkedImages = await Promise.all(
          images.map(async (src) => {
            try {
              const response = await fetch(src, { method: 'HEAD' });
              return response.ok
                ? src
                : `/placeholder.svg?height=400&width=600&query=image`;
            } catch (error) {
              return `/placeholder.svg?height=400&width=600&query=image`;
            }
          })
        );
        setSafeImages(checkedImages);
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking images:', error);
        setSafeImages(
          images.map(() => `/placeholder.svg?height=400&width=600&query=image`)
        );
        setIsLoading(false);
      }
    };

    checkImagesExistence();
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? safeImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === safeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 1.5));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
  };

  if (isLoading) {
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
            src={safeImages[currentIndex] || '/placeholder.svg'}
            alt={`Зображення ${currentIndex + 1}`}
            width={600}
            height={400}
            priority={currentIndex === 0}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {safeImages.length > 1 && (
          <div className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={goToPrevious}
              aria-label="Попереднє зображення"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={styles.navButton}
              onClick={goToNext}
              aria-label="Наступне зображення"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        <div className={styles.zoomControls}>
          <button
            className={styles.zoomButton}
            onClick={zoomOut}
            aria-label="Зменшити"
            disabled={scale <= 0.5}
          >
            <Minus size={20} />
          </button>
          <span className={styles.zoomLevel}>{Math.round(scale * 100)}%</span>
          <button
            className={styles.zoomButton}
            onClick={zoomIn}
            aria-label="Збільшити"
            disabled={scale >= 1.5}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {safeImages.length > 1 && (
        <div className={styles.thumbnails}>
          {safeImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image || '/placeholder.svg'}
                alt={`Мініатюра ${index + 1}`}
                width={100}
                height={75}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryGinecomastiyaFAQ;
