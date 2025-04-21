'use client';

import type React from 'react';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import styles from './GalleryBlepharoplastytDetails.module.css';

export interface ImageItem {
  src: string;
  width: number;
  height: number;
}

interface GalleryBlepharoplastytDetailsProps {
  images: ImageItem[];
  galleryId: string;
}

const GalleryBlepharoplastytDetails: React.FC<
  GalleryBlepharoplastytDetailsProps
> = ({ images, galleryId }) => {
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
            if (response.ok) {
              return image;
            } else {
              // Якщо зображення недоступне, використовуємо плейсхолдер
              return {
                src: `/placeholder.svg?height=${image.height}&width=${image.width}&query=blepharoplasty`,
                width: image.width,
                height: image.height,
              };
            }
          } catch (error) {
            // У випадку помилки також використовуємо плейсхолдер
            return {
              src: `/placeholder.svg?height=${image.height}&width=${image.width}&query=blepharoplasty`,
              width: image.width,
              height: image.height,
            };
          }
        })
      );

      setAvailableImages(checkedImages);
      setIsLoading(false);
    };

    checkImagesAvailability();
  }, [images]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? availableImages.length - 1 : prevIndex - 1
    );
  }, [availableImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === availableImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [availableImages.length]);

  const increaseZoom = useCallback(() => {
    setZoom((prevZoom) => Math.min(prevZoom + 10, 150));
  }, []);

  const decreaseZoom = useCallback(() => {
    setZoom((prevZoom) => Math.max(prevZoom - 10, 50));
  }, []);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>Завантаження галереї...</div>
    );
  }

  if (availableImages.length === 0) {
    return (
      <div className={styles.errorContainer}>Немає доступних зображень</div>
    );
  }

  const currentImage = availableImages[currentIndex];

  return (
    <div className={styles.gallery} id={galleryId}>
      <div className={styles.mainImageContainer}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          aria-label="Попереднє зображення"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className={styles.imageWrapper}
          style={{ width: '100%', height: 'auto' }}
        >
          <div
            style={{
              width: `${zoom}%`,
              margin: '0 auto',
              position: 'relative',
              height: 0,
              paddingBottom: `${(currentImage.height / currentImage.width) * zoom}%`,
            }}
          >
            <Image
              src={currentImage.src || '/placeholder.svg'}
              alt={`Зображення ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0}
            />
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Наступне зображення"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.zoomControls}>
          <button
            onClick={decreaseZoom}
            className={styles.zoomButton}
            aria-label="Зменшити"
          >
            <ZoomOut size={20} />
          </button>
          <span className={styles.zoomLevel}>{zoom}%</span>
          <button
            onClick={increaseZoom}
            className={styles.zoomButton}
            aria-label="Збільшити"
          >
            <ZoomIn size={20} />
          </button>
        </div>

        <div className={styles.indicators}>
          {availableImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
              onClick={() => handleThumbnailClick(index)}
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
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={`Мініатюра ${index + 1}`}
              width={80}
              height={60}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryBlepharoplastytDetails;
