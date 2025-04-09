'use client';

import type React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/legacy/image';
import styles from './PrimmaGallery.module.css';

interface Comment {
  id: number;
  text: string;
}

interface PrimmaGalleryProps {
  images: string[];
  galleryId: string;
}

const PrimmaGallery: React.FC<PrimmaGalleryProps> = ({ images, galleryId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState<number[]>([]);
  const [comments, setComments] = useState<Comment[][]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log('PrimmaGallery: Отримані зображення:', images);
    setIsClient(true);
  }, [images]);

  useEffect(() => {
    if (isClient) {
      const savedLikes = localStorage.getItem(`likes_${galleryId}`);
      const savedComments = localStorage.getItem(`comments_${galleryId}`);
      setLikes(
        savedLikes ? JSON.parse(savedLikes) : Array(images.length).fill(0)
      );
      setComments(
        savedComments
          ? JSON.parse(savedComments)
          : Array(images.length).fill([])
      );
    }
  }, [galleryId, images.length, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(`likes_${galleryId}`, JSON.stringify(likes));
      localStorage.setItem(`comments_${galleryId}`, JSON.stringify(comments));
    }
  }, [likes, comments, galleryId, isClient]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const toggleFullscreen = () => {
    setIsFullscreen((prevState) => !prevState);
  };

  const handleLike = () => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[currentImageIndex] = (newLikes[currentImageIndex] || 0) + 1;
      return newLikes;
    });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments((prevComments) => {
        const newComments = [...prevComments];
        newComments[currentImageIndex] = [
          ...(newComments[currentImageIndex] || []),
          { id: Date.now(), text: newComment.trim() },
        ];
        return newComments;
      });
      setNewComment('');
    }
  };

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  console.log('PrimmaGallery: isClient:', isClient, 'images:', images);

  if (!isClient || images.length === 0) {
    console.log('PrimmaGallery: Завантаження або відсутні зображення');
    return <div>Завантаження...</div>;
  }

  return (
    <div className={styles.galleryWrapper}>
      <div
        className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        {isFullscreen && (
          <button onClick={toggleFullscreen} className={styles.closeButton}>
            ✕
          </button>
        )}
        <div className={styles.mainContent}>
          <button onClick={handlePrev} className={styles.navButton}>
            {'<'}
          </button>
          <div className={styles.imageContainer}>
            {!showComments ? (
              <div className={styles.imageWrapper}>
                {images[currentImageIndex] ? (
                  <Image
                    src={images[currentImageIndex] || '/placeholder.svg'}
                    alt={`Зображення галереї ${currentImageIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    priority={true}
                    onError={() =>
                      console.error(
                        `PrimmaGallery: Помилка завантаження зображення: ${images[currentImageIndex]}`
                      )
                    }
                  />
                ) : (
                  <div>Зображення не знайдено</div>
                )}
              </div>
            ) : (
              <div className={styles.commentsSection}>
                <h3>Коментарі</h3>
                <ul>
                  {comments[currentImageIndex]?.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                  ))}
                </ul>
                <form onSubmit={handleAddComment}>
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Додати коментар"
                  />
                  <button type="submit">Додати</button>
                </form>
              </div>
            )}
          </div>
          <button onClick={handleNext} className={styles.navButton}>
            {'>'}
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.likeSection}>
            <span className={styles.likes}>
              {likes[currentImageIndex] || 0}
            </span>
            <button onClick={handleLike} className={styles.likeButton}>
              ❤️
            </button>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.dots}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
            <button onClick={toggleComments} className={styles.commentButton}>
              💬
            </button>
            {!isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className={styles.fullscreenButton}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimmaGallery;
