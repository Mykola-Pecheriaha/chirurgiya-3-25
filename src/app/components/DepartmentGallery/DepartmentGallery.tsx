'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './DepartmentGallery.module.css';

// Типи для зображень
interface DepartmentImage {
  id: number;
  src: string;
  alt: string;
  thumbnail?: string;
}

// Дані зображень
const departmentImages: DepartmentImage[] = [
  {
    id: 1,
    src: '/images/surgical-department/surgdepartm26.jpg',
    alt: 'Хірургічне відділення - рецепція',
    thumbnail: '/images/surgical-department/surgdepartm26.jpg',
  },
  {
    id: 2,
    src: '/images/surgical-department/surgdepartm14.jpg',
    alt: 'Палата хірургічного відділення',
    thumbnail: '/images/surgical-department/surgdepartm14.jpg',
  },
  {
    id: 3,
    src: '/images/surgical-department/surgdepartm11.jpg',
    alt: 'Сучасна операційна',
    thumbnail: '/images/surgical-department/surgdepartm11.jpg',
  },
  {
    id: 4,
    src: '/images/surgical-department/surgdepartm28.jpg',
    alt: 'Кімната відновлення',
    thumbnail: '/images/surgical-department/surgdepartm28.jpg',
  },
  {
    id: 5,
    src: '/images/surgical-department/surgdepartm2.jpg',
    alt: 'Хірургічна команда',
    thumbnail: '/images/surgical-department/surgdepartm2.jpg',
  },
];

interface DepartmentGalleryProps {
  initialIndex?: number;
}

export function DepartmentGallery({
  initialIndex = 0,
}: DepartmentGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Функція для отримання індексу попереднього зображення
  const getPrevIndex = useCallback(
    (index: number) => {
      return index === 0 ? departmentImages.length - 1 : index - 1;
    },
    [departmentImages.length]
  );

  // Функція для отримання індексу наступного зображення
  const getNextIndex = useCallback(
    (index: number) => {
      return index === departmentImages.length - 1 ? 0 : index + 1;
    },
    [departmentImages.length]
  );

  // Навігація по галереї
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => getPrevIndex(prevIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Функція для відкриття повноекранного режиму
  const openFullscreen = () => {
    setShowFullscreen(true);
  };

  // Функція для закриття повноекранного режиму
  const closeFullscreen = () => {
    setShowFullscreen(false);
  };

  // Якщо немає зображень, не відображаємо галерею
  if (departmentImages.length === 0) {
    return (
      <div className={styles.noImages}>Немає зображень для відображення</div>
    );
  }

  // Отримуємо індекси для трьох зображень, які будуть відображатися
  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  // Додамо обробники кліків для бічних зображень
  const handlePrevImageClick = () => {
    goToImage(prevIndex);
  };

  const handleNextImageClick = () => {
    goToImage(nextIndex);
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Головна галерея */}
      <div className={styles.mainGallery}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          aria-label="Попереднє зображення"
        >
          &#10094;
        </button>
        <div className={styles.imagesContainer}>
          {/* Попереднє зображення */}
          <div
            className={`${styles.imageWrapper} ${styles.prevImage}`}
            onClick={() => goToImage(prevIndex)}
          >
            <div className={styles.imageContainer}>
              <Image
                src={departmentImages[prevIndex].src || '/placeholder.svg'}
                alt={departmentImages[prevIndex].alt}
                width={800}
                height={500}
                className={styles.galleryImage}
              />
            </div>
          </div>
          {/* Поточне зображення */}
          <div
            className={`${styles.imageWrapper} ${styles.activeImage}`}
            onClick={openFullscreen}
          >
            <div className={styles.imageContainer}>
              <Image
                src={departmentImages[currentIndex].src || '/placeholder.svg'}
                alt={departmentImages[currentIndex].alt}
                width={800}
                height={500}
                className={styles.galleryImage}
                priority
              />
            </div>
          </div>
          {/* Наступне зображення */}
          <div
            className={`${styles.imageWrapper} ${styles.nextImage}`}
            onClick={() => goToImage(nextIndex)}
          >
            <div className={styles.imageContainer}>
              <Image
                src={departmentImages[nextIndex].src || '/placeholder.svg'}
                alt={departmentImages[nextIndex].alt}
                width={800}
                height={500}
                className={styles.galleryImage}
              />
            </div>
          </div>
        </div>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Наступне зображення"
        >
          &#10095;
        </button>
      </div>
      {/* Мініатюри */}
      <div className={styles.thumbnailsContainer}>
        <div className={styles.thumbnailsScroll}>
          {departmentImages.map((image, index) => (
            <div
              key={image.id}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => goToImage(index)}
            >
              <Image
                src={image.thumbnail || image.src || '/placeholder.svg'}
                alt={`Мініатюра: ${image.alt}`}
                width={100}
                height={100}
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Повноекранний режим */}
      {showFullscreen && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <Image
            src={departmentImages[currentIndex].src || '/placeholder.svg'}
            alt={departmentImages[currentIndex].alt}
            width={1200}
            height={800}
            className={styles.fullscreenImage}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={styles.closeButton}
            onClick={closeFullscreen}
            aria-label="Закрити"
          >
            ✕
          </button>
          <button
            className={`${styles.fullscreenNavButton} ${styles.fullscreenPrevButton}`}
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Попереднє зображення"
          >
            &#10094;
          </button>
          <button
            className={`${styles.fullscreenNavButton} ${styles.fullscreenNextButton}`}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Наступне зображення"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
