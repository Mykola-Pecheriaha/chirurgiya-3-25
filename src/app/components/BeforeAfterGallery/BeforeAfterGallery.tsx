'use client';

import type React from 'react';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { BeforeAfterImage } from '../../../data/before-after-gallery-data';
import styles from './BeforeAfterGallery.module.css';

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
  initialIndex?: number;
  title?: string;
  showTitle?: boolean;
  backgroundColor?: string;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({
  images,
  initialIndex = 0,
  title = 'Приклади робіт "до і після"',
  showTitle = true,
  backgroundColor = 'transparent',
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAfter, setShowAfter] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const toggleBeforeAfter = () => {
    setShowAfter((prev) => !prev);
  };

  if (!isClient || images.length === 0) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className={styles.galleryWrapper} style={{ backgroundColor }}>
      {showTitle && <h2 className={styles.galleryTitle}>{title}</h2>}

      <div
        className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        {isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className={styles.closeButton}
            aria-label="Закрити повноекранний режим"
          >
            ✕
          </button>
        )}

        <div className={styles.mainContent}>
          <button
            onClick={handlePrev}
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Попереднє зображення"
          >
            &#10094;
          </button>

          <div className={styles.imagesContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image
                  src={
                    showAfter ? currentImage.after.src : currentImage.before.src
                  }
                  alt={
                    showAfter ? currentImage.after.alt : currentImage.before.alt
                  }
                  width={500}
                  height={600}
                  className={styles.galleryImage}
                  priority={true}
                  onError={(e) => {
                    e.currentTarget.src =
                      '/placeholder.svg?height=800&width=600&text=Зображення+недоступне';
                  }}
                />
                <div className={styles.imageLabel}>
                  {showAfter ? 'Після' : 'До'}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Наступне зображення"
          >
            &#10095;
          </button>
        </div>

        <div className={styles.controls}>
          <button
            onClick={toggleBeforeAfter}
            className={styles.toggleButton}
            aria-label={showAfter ? 'Показати до' : 'Показати після'}
          >
            {showAfter ? 'Показати ДО' : 'Показати ПІСЛЯ'}
          </button>

          {!isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className={styles.fullscreenButton}
              aria-label="Повноекранний режим"
            >
              <span className={styles.fullscreenIcon}>⤢</span>
            </button>
          )}
        </div>

        <div className={styles.thumbnailsContainer}>
          <div className={styles.thumbnailsScroll}>
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`${styles.thumbnailPair} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={styles.thumbnailWrapper}>
                  <Image
                    src={image.before.thumbnail || image.before.src}
                    alt={`До: ${image.before.alt}`}
                    width={80}
                    height={100}
                    className={styles.thumbnail}
                  />
                  <div className={styles.thumbnailLabel}>До</div>
                </div>
                <div className={styles.thumbnailWrapper}>
                  <Image
                    src={image.after.thumbnail || image.after.src}
                    alt={`Після: ${image.after.alt}`}
                    width={80}
                    height={100}
                    className={styles.thumbnail}
                  />
                  <div className={styles.thumbnailLabel}>Після</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
