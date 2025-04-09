'use client';

import type React from 'react';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { BeforeAfterImage } from '@/data/before-after-gallery-data';
import styles from './SideBySideGallery.module.css';

interface SideBySideGalleryProps {
  images: BeforeAfterImage[];
  initialIndex?: number;
  title?: string;
  showTitle?: boolean;
  backgroundColor?: string;
}

const SideBySideGallery: React.FC<SideBySideGalleryProps> = ({
  images,
  initialIndex = 0,
  title = 'Приклади робіт "до і після"',
  showTitle = true,
  backgroundColor = 'transparent',
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
            <div className={styles.sideBySideWrapper}>
              {/* Зображення "До" */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={currentImage.before.src || '/placeholder.svg'}
                    alt={currentImage.before.alt}
                    width={500}
                    height={600}
                    className={styles.galleryImage}
                    priority={true}
                    onError={(e) => {
                      e.currentTarget.src =
                        '/placeholder.svg?height=600&width=500&text=Зображення+недоступне';
                    }}
                  />
                  <div className={styles.imageLabel}>До</div>
                </div>
              </div>

              {/* Зображення "Після" */}
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={currentImage.after.src || '/placeholder.svg'}
                    alt={currentImage.after.alt}
                    width={500}
                    height={600}
                    className={styles.galleryImage}
                    priority={true}
                    onError={(e) => {
                      e.currentTarget.src =
                        '/placeholder.svg?height=600&width=500&text=Зображення+недоступне';
                    }}
                  />
                  <div className={styles.imageLabel}>Після</div>
                </div>
              </div>
            </div>

            <div className={styles.patientInfo}>
              Пацієнт №{currentIndex + 1}
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
                <div className={styles.thumbnailNumber}>№{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBySideGallery;
