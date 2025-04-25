'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './GernioGalleryFAQ.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

interface GernioGalleryFAQProps {
  images: GalleryImage[];
}

export function GernioGalleryFAQ({ images }: GernioGalleryFAQProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Просто ініціалізуємо масив для відстеження стану зображень
    setImagesLoaded(new Array(images.length).fill(true));

    // Не використовуємо new Image() для перевірки, оскільки це викликає помилки
  }, [images]);

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
    setShowThumbnails(false);
  };

  const toggleThumbnails = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowThumbnails(!showThumbnails);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.galleryContainer} ref={galleryRef}>
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
        >
          &#10094;
        </button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextImage}
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
        <button className={styles.fullscreenButton} onClick={toggleFullscreen}>
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
            {/* Стрілки навігації в повноекранному режимі */}
            <button
              className={`${styles.navButton} ${styles.fullscreenPrevButton}`}
              onClick={prevImage}
            >
              &#10094;
            </button>
            <button
              className={`${styles.navButton} ${styles.fullscreenNextButton}`}
              onClick={nextImage}
            >
              &#10095;
            </button>

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

            {/* Кнопки керування у верхньому правому куті */}
            <button
              className={styles.thumbnailsButton}
              onClick={toggleThumbnails}
            >
              ⋮⋮
            </button>
            <button className={styles.closeButton} onClick={toggleFullscreen}>
              ×
            </button>

            {/* Мініатюри */}
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
}
