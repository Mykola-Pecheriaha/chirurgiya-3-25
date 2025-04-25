'use client';

import { useState, useEffect, useRef, type FC } from 'react';
import Image from 'next/image';
import styles from './IndicatioGallery.module.css';

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

interface IndicatioGalleryProps {
  images: ImageType[];
}

const IndicatioGallery: FC<IndicatioGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ініціалізуємо масив завантажених зображень
    setImagesLoaded(new Array(images.length).fill(true));
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleFullscreen = () => {
    setShowFullscreen(!showFullscreen);
    setShowThumbnails(false);
  };

  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (showFullscreen) {
      if (e.key === 'Escape') {
        setShowFullscreen(false);
        setShowThumbnails(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showFullscreen]);

  useEffect(() => {
    if (showFullscreen && fullscreenRef.current) {
      fullscreenRef.current.focus();
    }
  }, [showFullscreen]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <button
          className={styles.navButton}
          onClick={handlePrev}
          aria-label="Попереднє зображення"
        >
          &#10094;
        </button>
        <div className={styles.imageWrapper}>
          <Image
            src={images[currentIndex].src || '/placeholder.svg'}
            alt={images[currentIndex].alt}
            width={images[currentIndex].width}
            height={images[currentIndex].height}
            className={styles.mainImage}
          />
          <button
            className={styles.fullscreenButton}
            onClick={toggleFullscreen}
            aria-label="Повноекранний режим"
          >
            +
          </button>
        </div>
        <button
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Наступне зображення"
        >
          &#10095;
        </button>
      </div>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {showFullscreen && (
        <div
          className={styles.fullscreenOverlay}
          ref={fullscreenRef}
          tabIndex={0}
        >
          <div className={styles.fullscreenControls}>
            <button
              className={styles.closeButton}
              onClick={toggleFullscreen}
              aria-label="Закрити повноекранний режим"
            >
              &times;
            </button>
            <button
              className={styles.thumbnailsButton}
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              &#9783;
            </button>
          </div>

          <div className={styles.fullscreenImageContainer}>
            <button
              className={styles.fullscreenNavButton}
              onClick={handlePrev}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <div className={styles.fullscreenImageWrapper}>
              <Image
                src={images[currentIndex].src || '/placeholder.svg'}
                alt={images[currentIndex].alt}
                width={images[currentIndex].width}
                height={images[currentIndex].height}
                className={styles.fullscreenImage}
              />
              {images[currentIndex].title && (
                <div className={styles.imageTitle}>
                  {images[currentIndex].title}
                </div>
              )}
            </div>
            <button
              className={styles.fullscreenNavButton}
              onClick={handleNext}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>
          </div>

          {showThumbnails && (
            <div className={styles.thumbnailsContainer}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                  onClick={() => handleThumbnailClick(index)}
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
      )}
    </div>
  );
};

export default IndicatioGallery;
