'use client';

import type React from 'react';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { BeforeAfterImage } from '@/types/gallery';
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
  const [showThumbnails, setShowThumbnails] = useState(false);
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
    if (!isFullscreen) {
      setShowThumbnails(false);
    }
  };

  const toggleThumbnails = () => {
    setShowThumbnails((prev) => !prev);
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
          <>
            <button
              onClick={toggleFullscreen}
              className={styles.closeButton}
              aria-label="Закрити повноекранний режим"
            >
              ✕
            </button>
            <button
              onClick={toggleThumbnails}
              className={styles.thumbnailsToggleButton}
              aria-label={
                showThumbnails ? 'Сховати мініатюри' : 'Показати мініатюри'
              }
            >
              ⋮
            </button>
          </>
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

            {!isFullscreen && (
              <div className={styles.patientInfo}>
                Пацієнт №{currentIndex + 1}
              </div>
            )}
          </div>

          <button
            onClick={handleNext}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Наступне зображення"
          >
            &#10095;
          </button>
        </div>

        {/* Індикатори та кнопка розгортання */}
        <div className={styles.controls}>
          <div className={styles.indicators}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {!isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className={styles.fullscreenButton}
              aria-label="Повноекранний режим"
            >
              +
            </button>
          )}
        </div>

        {/* Мініатюри (показуються тільки в повноекранному режимі, якщо увімкнено) */}
        {isFullscreen && showThumbnails && (
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
                  </div>
                  <div className={styles.thumbnailWrapper}>
                    <Image
                      src={image.after.thumbnail || image.after.src}
                      alt={`Після: ${image.after.alt}`}
                      width={80}
                      height={100}
                      className={styles.thumbnail}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBySideGallery;
