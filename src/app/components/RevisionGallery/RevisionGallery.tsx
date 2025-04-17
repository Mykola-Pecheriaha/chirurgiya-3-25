'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './RevisionGallery.module.css';

interface RevisionGalleryProps {
  images: string[];
  title?: string;
  showTitle?: boolean;
}

const RevisionGallery: React.FC<RevisionGalleryProps> = ({
  images,
  title = 'Галерея',
  showTitle = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Ініціалізуємо лайки для кожного зображення
    setLikes(Array(images.length).fill(0));
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

  const handleLike = () => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[currentIndex] = (newLikes[currentIndex] || 0) + 1;
      return newLikes;
    });
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  // Перевіряємо, чи є зображення
  if (!images || images.length === 0) {
    return (
      <div className={styles.noImages}>Немає зображень для відображення</div>
    );
  }

  return (
    <div
      className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
    >
      {showTitle && <h3 className={styles.galleryTitle}>{title}</h3>}

      <div className={styles.imageContainer}>
        <button onClick={handlePrev} className={styles.navButton}>
          &#10094;
        </button>

        <div className={styles.imageWrapper}>
          <Image
            src={images[currentIndex] || '/placeholder.svg'}
            alt={`Зображення ${currentIndex + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        <button onClick={handleNext} className={styles.navButton}>
          &#10095;
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.likeSection}>
          <button onClick={handleLike} className={styles.likeButton}>
            ❤️ {likes[currentIndex] || 0}
          </button>
        </div>

        <div className={styles.pagination}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button onClick={toggleFullscreen} className={styles.fullscreenButton}>
          {isFullscreen ? '✕' : '⛶'}
        </button>
      </div>
    </div>
  );
};

export default RevisionGallery;
