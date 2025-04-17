'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import PrimmaGallery from '../../components/PrimmaGallery/PrimmaGallery';
import styles from './Ginecomastiya.module.css';

interface GinecomastiyaProps {
  backgroundColor?: string;
}

const Ginecomastiya: React.FC<GinecomastiyaProps> = ({
  backgroundColor = '#C0DCF5FF',
}) => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const benefits = [
    'Бажана фігура',
    'Швидка реабілітація',
    'Упевненість в собі',
  ];

  const galleryImages = [
    '/images/gynecomastia/ginecomas3.jpg',
    '/images/gynecomastia/ginecomas4.jpg',
    '/images/gynecomastia/ginecomas5.jpg',
  ];

  // Перевірка доступності зображень
  useEffect(() => {
    const checkImageAvailability = (src: string) => {
      if (typeof window !== 'undefined') {
        const img = new window.Image();
        img.onload = () =>
          setImagesLoaded((prev) => ({ ...prev, [src]: true }));
        img.onerror = () =>
          setImagesLoaded((prev) => ({ ...prev, [src]: false }));
        img.src = src;
      }
    };

    // Перевірка головного зображення
    checkImageAvailability(
      '/images/gynecomastia/ginecomas2-removebg-preview.png'
    );

    // Перевірка зображень галереї
    galleryImages.forEach((src) => checkImageAvailability(src));
  }, [galleryImages]);

  // Функція для отримання безпечного шляху до зображення
  const getSafeImageSrc = (src: string) => {
    if (imagesLoaded[src] === false) {
      // Якщо зображення недоступне, використовуємо плейсхолдер
      return `/placeholder.svg?height=400&width=500&query=Гінекомастія`;
    }
    return src;
  };

  // Створення безпечного масиву зображень для галереї
  const safeGalleryImages = galleryImages.map((src) =>
    imagesLoaded[src] === false
      ? `/placeholder.svg?height=400&width=500&query=Гінекомастія`
      : src
  );

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Гінекомастія</h1>
            <ul className={styles.benefits}>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <ArrowRight size={16} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={
                getSafeImageSrc(
                  '/images/gynecomastia/ginecomas2-removebg-preview.png'
                ) || '/placeholder.svg'
              }
              alt="Гінекомастія"
              width={400}
              height={300}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>

        <p className={styles.description}>
          Гінекомастія у чоловіків – аномальне збільшення грудних залоз
          доброякісного характеру. Порушення часто буває спричинене гормональним
          дисбалансом, а також може стати наслідком набору зайвої ваги. Чоловічі
          груди стають схожими на жіночі молочні залози. Патологія викликає масу
          комплексів та дискомфорт. Видалення гінекомастії передбачає пластичну
          операцію, яка повертає чоловічому торсу його природні контури.
        </p>

        <div className={styles.examples}>
          <div className={styles.examplesContent}>
            <h2 className={styles.examplesTitle}>Приклади робіт До-Після</h2>
          </div>
          <div className={styles.examplesGallery}>
            <h4 className={styles.galleryTitle}>Гінекомастія</h4>
            <PrimmaGallery
              images={safeGalleryImages}
              galleryId="ginecomastiya-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ginecomastiya;
