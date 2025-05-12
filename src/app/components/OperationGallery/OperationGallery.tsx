'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './OperationGallery.module.css';

// Типи для зображень
interface OperationImage {
  id: number;
  src: string;
  alt: string;
  thumbnail?: string;
}

// Дані зображень
const operationImages: OperationImage[] = [
  {
    id: 1,
    src: '/images/gallery-images/gallery-images1.jpg',
    alt: 'Хірургічне відділення',
    thumbnail: '/images/gallery-images/gallery-images1.jpg',
  },
  {
    id: 2,
    src: '/images/gallery-images/gallery-images2.JPG',
    alt: 'Операційна',
    thumbnail: '/images/gallery-images/gallery-images2.JPG',
  },
  {
    id: 3,
    src: '/images/gallery-images/gallery-images3.JPG',
    alt: 'Палата',
    thumbnail: '/images/gallery-images/gallery-images3.JPG',
  },
  {
    id: 4,
    src: '/images/gallery-images/gallery-images4.JPG',
    alt: 'Медичне обладнання',
    thumbnail: '/images/gallery-images/gallery-images4.JPG',
  },
  {
    id: 5,
    src: '/images/gallery-images/gallery-images5.jpg',
    alt: 'Команда лікарів',
    thumbnail: '/images/gallery-images/gallery-images5.jpg',
  },
  {
    id: 6,
    src: '/images/gallery-images/gallery-images6.jpg',
    alt: 'Консультація пацієнта',
    thumbnail: '/images/gallery-images/gallery-images6.jpg',
  },
  {
    id: 7,
    src: '/images/gallery-images/gallery-images7.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images7.jpg',
  },
  {
    id: 8,
    src: '/images/gallery-images/gallery-images8.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images8.jpg',
  },
  {
    id: 9,
    src: '/images/gallery-images/gallery-images9.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images9.jpg',
  },
  {
    id: 10,
    src: '/images/gallery-images/gallery-images10.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images10.jpg',
  },
  {
    id: 11,
    src: '/images/gallery-images/gallery-images11.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images11.jpg',
  },
  {
    id: 12,
    src: '/images/gallery-images/gallery-images12.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images12.jpg',
  },
  {
    id: 13,
    src: '/images/gallery-images/gallery-images13.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images13.jpg',
  },
  {
    id: 14,
    src: '/images/gallery-images/gallery-images14.jpg',
    alt: 'Реабілітація',
    thumbnail: '/images/gallery-images/gallery-images14.jpg',
  },
];

interface OperationGalleryProps {
  initialIndex?: number;
}

export function OperationGallery({ initialIndex = 1 }: OperationGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Функція для отримання індексу попереднього зображення
  const getPrevIndex = useCallback(
    (index: number) => {
      return index === 0 ? operationImages.length - 1 : index - 1;
    },
    [operationImages.length]
  );

  // Функція для отримання індексу наступного зображення
  const getNextIndex = useCallback(
    (index: number) => {
      return index === operationImages.length - 1 ? 0 : index + 1;
    },
    [operationImages.length]
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
  if (operationImages.length === 0) {
    return (
      <div className={styles.noImages}>Немає зображень для відображення</div>
    );
  }

  // Отримуємо індекси для трьох зображень, які будуть відображатися
  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

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
          <div className={`${styles.imageWrapper} ${styles.prevImage}`}>
            <div className={styles.imageContainer}>
              <Image
                src={operationImages[prevIndex].src || '/placeholder.svg'}
                alt={operationImages[prevIndex].alt}
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
                src={operationImages[currentIndex].src || '/placeholder.svg'}
                alt={operationImages[currentIndex].alt}
                width={800}
                height={500}
                className={styles.galleryImage}
                priority
              />
            </div>
          </div>

          {/* Наступне зображення */}
          <div className={`${styles.imageWrapper} ${styles.nextImage}`}>
            <div className={styles.imageContainer}>
              <Image
                src={operationImages[nextIndex].src || '/placeholder.svg'}
                alt={operationImages[nextIndex].alt}
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
          {operationImages.map((image, index) => (
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
            src={operationImages[currentIndex].src || '/placeholder.svg'}
            alt={operationImages[currentIndex].alt}
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
