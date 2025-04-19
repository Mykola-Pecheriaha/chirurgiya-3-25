'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './FaceliftSection.module.css';

interface FaceliftSectionProps {
  backgroundColor?: string;
}

const FaceliftSection: React.FC<FaceliftSectionProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const [imageSrc, setImageSrc] = useState(
    '/images/faceliftSection/FaceliftSec1-removebg-preview.png'
  );

  // Перевірка доступності зображення
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImageExists = async () => {
      try {
        const response = await fetch(imageSrc, { method: 'HEAD' });
        if (!response.ok) {
          setImageSrc('/refreshed-appearance.png');
        }
      } catch (error) {
        setImageSrc('/refreshed-appearance.png');
      }
    };

    checkImageExists();
  }, [imageSrc]);

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Фейсліфтинг
              <br />
              <span className={styles.subtitle}>Підтяжка обличчя та шиї</span>
            </h2>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>✨</span> Поверніть молодість
                всього за 1 місяць
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>🔷</span> Чіткий та виразний
                контур обличчя
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.emoji}>⏳</span> Тривалий ефект — до
                10–15 років
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc || '/placeholder.svg'}
              alt="Фейсліфтинг - підтяжка обличчя та шиї"
              width={500}
              height={600}
              className={styles.mainImage}
              priority
            />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.description}>
            Фейсліфтинг (підтяжка обличчя та шиї) — це сучасна можливість
            позбутися вікових змін та повернути собі свіжий, молодий вигляд.
            Операція не лише омолоджує зовнішність, а й зберігає природність
            міміки та вашу індивідуальність.
          </p>
          <p className={styles.description}>
            Під час хірургічного втручання формується чіткий контур обличчя,
            шкіра стає пружнішою, зникають зморшки та заломи.
          </p>
          <p className={styles.description}>
            Сьогодні фейсліфтинг особливо популярний серед пацієнтів після 50 —
            завдяки малій травматичності та вражаючим результатам омолодження.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaceliftSection;
