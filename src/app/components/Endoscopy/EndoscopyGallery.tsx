'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './EndoscopyGallery.module.css';

// Визначаємо зображення безпосередньо в компоненті галереї
const galleryImages = [
  {
    src: '/images/endoscopy/endoscopy3.jpg',
    alt: 'Ендоскопічне обладнання',
    width: 800,
    height: 600,
    title: 'Сучасне ендоскопічне обладнання',
  },

  {
    src: '/images/endoscopy/endoscopy7.jpg',
    alt: 'Ендоскопічне обстеження шлунка',
    width: 800,
    height: 600,
    title: 'Гастроскопія',
  },
  {
    src: '/images/endoscopy/endoscopy6.jpg',
    alt: 'Колоноскопія',
    width: 800,
    height: 600,
    title: 'Колоноскопія',
  },
  {
    src: '/images/endoscopy/endoscopy8.jpg',
    alt: 'Біопсія під час ендоскопії',
    width: 800,
    height: 600,
    title: 'Біопсія під час ендоскопії',
  },
  {
    src: '/images/endoscopy/endoscopy9.jpg',
    alt: 'Бронхоскопія',
    width: 800,
    height: 600,
    title: 'Бронхоскопія',
  },
  {
    src: '/images/endoscopy/endoscopy11.jpg',
    alt: 'Цистоскопія',
    width: 800,
    height: 600,
    title: 'Цистоскопія',
  },
];

export function EndoscopyGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    // Ініціалізуємо масив завантажених зображень
    setImagesLoaded(new Array(galleryImages.length).fill(false));
  }, []);

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
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

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  // Перевіряємо наявність зображень
  if (!galleryImages || galleryImages.length === 0) {
    return <div className={styles.noImages}>Зображення недоступні</div>;
  }

  const currentImage = galleryImages[currentIndex];

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
          {!imagesLoaded[currentIndex] && (
            <div className={styles.imageLoader}>Завантаження...</div>
          )}
          <Image
            src={
              currentImage.src ||
              '/placeholder.svg?height=600&width=800&query=endoscopy procedure'
            }
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className={styles.image}
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0} // Пріоритетне завантаження першого зображення
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
        {galleryImages.map((_, index) => (
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
                src={
                  currentImage.src ||
                  '/placeholder.svg?height=600&width=800&query=endoscopy procedure'
                }
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className={styles.fullscreenImage}
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
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
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={
                        image.src ||
                        '/placeholder.svg?height=75&width=100&query=endoscopy thumbnail'
                      }
                      alt={image.alt}
                      width={100}
                      height={75}
                      className={styles.thumbnailImage}
                      onLoad={() => {}} // Не відстежуємо завантаження мініатюр
                      onError={() => {}} // Не відстежуємо помилки мініатюр
                    />
                  </div>
                ))}
              </div>
            )}
            <div className={styles.fullscreenIndicators}>
              {galleryImages.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.fullscreenIndicator} ${index === currentIndex ? styles.activeFullscreenIndicator : ''}`}
                  onClick={() => selectImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EndoscopyGallery;
