'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LipoGalleryIndicatio.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

interface LipoGalleryIndicatioProps {
  images: GalleryImage[];
}

export function LipoGalleryIndicatio({ images }: LipoGalleryIndicatioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    // Ініціалізуємо масив завантажених зображень
    setImagesLoaded(new Array(images.length).fill(true));
  }, [images]);

  useEffect(() => {
    // Додаємо обробник клавіші Escape для закриття повноекранного режиму
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && fullscreen) {
        setFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openFullscreen = () => {
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
    setShowThumbnails(false);
  };

  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Перевіряємо наявність зображень
  const currentImage = images[currentIndex] || {
    src: '/placeholder.svg',
    alt: 'Зображення недоступне',
    width: 800,
    height: 600,
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        <button
          className={styles.navButton}
          onClick={prevImage}
          aria-label="Попереднє зображення"
        >
          &#10094;
        </button>

        <div className={styles.imageContainer}>
          <Image
            src={currentImage.src || '/placeholder.svg'}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className={styles.image}
            onError={() => {
              // Обробка помилки завантаження зображення
              const newImagesLoaded = [...imagesLoaded];
              newImagesLoaded[currentIndex] = false;
              setImagesLoaded(newImagesLoaded);
            }}
          />
          <button
            className={styles.fullscreenButton}
            onClick={openFullscreen}
            aria-label="Відкрити на повний екран"
          >
            +
          </button>
        </div>

        <button
          className={styles.navButton}
          onClick={nextImage}
          aria-label="Наступне зображення"
        >
          &#10095;
        </button>
      </div>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>

      {fullscreen && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeFullscreen}
              aria-label="Закрити"
            >
              &times;
            </button>

            <button
              className={styles.thumbnailsButton}
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              &#8942;
            </button>

            <button
              className={styles.fullscreenNavButton}
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>

            <div className={styles.fullscreenImageContainer}>
              <Image
                src={currentImage.src || '/placeholder.svg'}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className={styles.fullscreenImage}
                onError={() => {
                  // Обробка помилки завантаження зображення
                  const newImagesLoaded = [...imagesLoaded];
                  newImagesLoaded[currentIndex] = false;
                  setImagesLoaded(newImagesLoaded);
                }}
              />
              {currentImage.title && (
                <div className={styles.imageTitle}>{currentImage.title}</div>
              )}
            </div>

            <button
              className={styles.fullscreenNavButton}
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>

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
                      onError={() => {
                        // Обробка помилки завантаження зображення
                        const newImagesLoaded = [...imagesLoaded];
                        newImagesLoaded[index] = false;
                        setImagesLoaded(newImagesLoaded);
                      }}
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

export default LipoGalleryIndicatio;
