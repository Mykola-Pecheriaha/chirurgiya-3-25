'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './GernioGallery.module.css';

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

interface GernioGalleryProps {
  images: ImageType[];
}

const GernioGallery: React.FC<GernioGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);

  // Обробники подій
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setShowThumbnails(false);
    }
  };

  const toggleThumbnails = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowThumbnails(!showThumbnails);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Закриття повноекранного режиму при натисканні Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <div className={styles.galleryContainer}>
      {/* Заголовок галереї */}
      <div className={styles.galleryHeader}>
        <h4 className={styles.galleryTitle}>
          {images[currentIndex]?.title || 'Галерея'}
        </h4>
      </div>

      {/* Контейнер для зображення */}
      <div className={styles.imageContainer}>
        {/* Стрілки навігації */}
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevImage}
          aria-label="Попереднє зображення"
        >
          &#10094;
        </button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextImage}
          aria-label="Наступне зображення"
        >
          &#10095;
        </button>

        {/* Зображення */}
        <div className={styles.imageWrapper}>
          <Image
            src={images[currentIndex]?.src || '/placeholder.svg'}
            alt={images[currentIndex]?.alt || 'Зображення галереї'}
            fill={true}
            sizes="100vw"
            priority={currentIndex === 0}
            className={styles.image}
          />
        </div>
      </div>

      {/* Панель інструментів */}
      <div className={styles.toolsPanel}>
        {/* Індикатори */}
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>

        {/* Кнопка збільшення */}
        <button
          className={styles.fullscreenButton}
          onClick={toggleFullscreen}
          aria-label="Повноекранний режим"
        >
          +
        </button>
      </div>

      {/* Модальне вікно для повноекранного перегляду */}
      {isFullscreen && (
        <div className={styles.fullscreenOverlay} onClick={toggleFullscreen}>
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Зображення в повноекранному режимі */}
            <div className={styles.fullscreenImageContainer}>
              <Image
                src={images[currentIndex]?.src || '/placeholder.svg'}
                alt={images[currentIndex]?.alt || 'Зображення галереї'}
                fill={true}
                sizes="100vw"
                className={styles.fullscreenImage}
              />
            </div>

            {/* Стрілки навігації в повноекранному режимі */}
            <button
              className={`${styles.navButton} ${styles.fullscreenPrevButton}`}
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <button
              className={`${styles.navButton} ${styles.fullscreenNextButton}`}
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>

            {/* Кнопка закриття - явно позиціонована у верхньому правому куті */}
            <button
              className={styles.closeButton}
              onClick={toggleFullscreen}
              aria-label="Закрити повноекранний режим"
            >
              ×
            </button>

            {/* Кнопка для відображення мініатюр - явно позиціонована поруч з кнопкою закриття */}
            <button
              className={styles.thumbnailsButton}
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              ⋮⋮
            </button>

            {/* Мініатюри - відображаються внизу при активації */}
            {showThumbnails && (
              <div className={styles.thumbnailsContainer}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      width={100}
                      height={75}
                      className={styles.thumbnailImage}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GernioGallery;
