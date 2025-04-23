'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AbdominoGalleryPreparation.module.css';

interface ImageItem {
  src: string;
  alt?: string;
  width: number;
  height: number;
  title?: string;
}

interface AbdominoGalleryPreparationProps {
  images: ImageItem[];
}

const AbdominoGalleryPreparation: React.FC<AbdominoGalleryPreparationProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Перевірка доступності зображень
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  useEffect(() => {
    const checkImages = async () => {
      const results = await Promise.all(
        images.map(async (image) => {
          if (typeof window === 'undefined') return true;

          return new Promise<boolean>((resolve) => {
            if (typeof window !== 'undefined') {
              const img = new window.Image();
              img.crossOrigin = 'anonymous';
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
              img.src = image.src;
            } else {
              resolve(true); // На сервері вважаємо, що зображення доступне
            }
          });
        })
      );
      setLoadedImages(results);
    };

    checkImages();
  }, [images]);

  // Функція для переходу до наступного зображення
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Функція для переходу до попереднього зображення
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Функція для переходу до конкретного зображення
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Функція для збільшення/зменшення зображення
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Функція для показу/приховування мініатюр
  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails);
  };

  // Поточне зображення
  const currentImage = images[currentIndex];

  return (
    <div className={styles.gallery} ref={galleryRef}>
      <div className={styles.imageContainer}>
        {loadedImages[currentIndex] ? (
          <Image
            src={currentImage.src || '/placeholder.svg'}
            alt={currentImage.alt || `Зображення ${currentIndex + 1}`}
            fill={true}
            sizes="100vw"
            priority={currentIndex === 0}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <span>Зображення недоступне</span>
          </div>
        )}

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
      </div>

      {/* Модальне вікно для збільшеного зображення */}
      {isZoomed && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <Image
              src={currentImage.src || '/placeholder.svg'}
              alt={currentImage.alt || `Зображення ${currentIndex + 1}`}
              width={currentImage.width}
              height={currentImage.height}
              className={styles.modalImage}
            />

            <div className={styles.zoomControls}>
              <button
                className={styles.closeButton}
                onClick={toggleZoom}
                aria-label="Закрити"
              >
                ✕
              </button>
              <button
                className={styles.thumbnailsButton}
                onClick={toggleThumbnails}
                aria-label="Показати мініатюри"
              >
                ⋮⋮
              </button>
            </div>

            {/* Стрілки навігації в модальному вікні */}
            <button
              className={`${styles.modalNavButton} ${styles.modalPrevButton}`}
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <button
              className={`${styles.modalNavButton} ${styles.modalNextButton}`}
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>

            {/* Мініатюри внизу модального вікна */}
            {showThumbnails && (
              <div className={styles.thumbnailsContainer}>
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
            )}
          </div>
        </div>
      )}

      <div className={styles.controls}>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`Перейти до зображення ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.zoomButton}
          onClick={toggleZoom}
          aria-label="Збільшити зображення"
        >
          +
        </button>
      </div>

      {currentImage.title && (
        <div className={styles.imageTitle}>{currentImage.title}</div>
      )}
    </div>
  );
};

export default AbdominoGalleryPreparation;
