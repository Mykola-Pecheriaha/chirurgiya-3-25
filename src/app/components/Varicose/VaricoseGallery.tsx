'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

// Визначаємо зображення безпосередньо в компоненті галереї
const galleryImages = [
  {
    src: '/images/varicose/varicos2.jpg',
    alt: 'Варикозне розширення вен',
    width: 800,
    height: 700,
    title: 'Варикозне розширення вен',
  },
  {
    src: '/images/varicose/varicos12.jpg',
    alt: 'Причини варикозу',
    width: 800,
    height: 700,
    title: 'Причини варикозу',
  },
  {
    src: '/images/varicose/varicos3.jpg',
    alt: 'Малорухливий спосіб життя',
    width: 800,
    height: 700,
    title: 'Малорухливий спосіб життя',
  },
  {
    src: '/images/varicose/varicos14.jpg',
    alt: 'Спадковість як фактор ризику',
    width: 800,
    height: 700,
    title: 'Спадковість як фактор ризику',
  },
  {
    src: '/images/varicose/varicos16.jpg',
    alt: 'Спадковість як фактор ризику',
    width: 800,
    height: 700,
    title: 'Спадковість як фактор ризику',
  },
];

export function VaricoseGallery() {
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
              `/placeholder.svg?height=600&width=800&query=varicose veins ${currentIndex + 1 || '/placeholder.svg'}` ||
              '/placeholder.svg'
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
            {/* Навігаційні кнопки в повноекранному режимі */}
            <button
              className={`${styles.fullscreenNavButton} ${styles.fullscreenNavButtonPrev}`}
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &lt;
            </button>
            <div className={styles.fullscreenImageContainer}>
              <Image
                src={
                  currentImage.src ||
                  `/placeholder.svg?height=600&width=800&query=varicose veins ${currentIndex + 1 || '/placeholder.svg'}` ||
                  '/placeholder.svg'
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
              className={`${styles.fullscreenNavButton} ${styles.fullscreenNavButtonNext}`}
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &gt;
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
                        `/placeholder.svg?height=75&width=100&query=varicose thumbnail ${index + 1 || '/placeholder.svg'}` ||
                        '/placeholder.svg'
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
