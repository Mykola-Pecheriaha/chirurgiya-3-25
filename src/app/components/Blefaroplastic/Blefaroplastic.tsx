'use client';

import type React from 'react';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Blefaroplastic.module.css';

interface BlefaroplasticProps {
  backgroundColor?: string;
}

const Blefaroplastic: React.FC<BlefaroplasticProps> = ({
  backgroundColor = '#f8f4ff',
}) => {
  const [imageSrc, setImageSrc] = useState(
    '/images/blepharoplasty/blefaroplasty-removebg-preview.png'
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImage = async () => {
      try {
        const response = await fetch(imageSrc, { method: 'HEAD' });
        if (!response.ok) {
          setImageSrc('/blepharoplasty-results.png');
        }
        setImageLoaded(true);
      } catch (error) {
        setImageSrc('/blepharoplasty-results.png');
        setImageLoaded(true);
      }
    };

    checkImage();
  }, [imageSrc]);

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Блефаропластика
              <span className={styles.subtitle}>пластика повік</span>
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                <span className={styles.emoji}>✨</span> Швидка реабілітація
              </li>
              <li>
                <span className={styles.emoji}>🔷</span> Без слідів від операції
              </li>
              <li>
                <span className={styles.emoji}>⏳</span> Результат на 10-15
                років
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            {imageLoaded && (
              <Image
                src={imageSrc || '/placeholder.svg'}
                alt="Блефаропластика - пластика повік"
                width={500}
                height={600}
                priority
                className={styles.mainImage}
              />
            )}
          </div>
        </div>

        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            Пластика повік (блефаропластика) – одна з найпопулярніших пластичних
            операцій, що омолоджують. Вона ефективно усуває перші вікові зміни в
            періорбітальній ділянці та повертає очам чарівність та
            привабливість.
          </p>
          <p className={styles.description}>
            Блефаропластика передбачає видалення навислої шкіри, «мішків» під
            очима та часткове усунення зморшок. Після операції ваші очі будуть
            випромінювати сяйво та молодість!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blefaroplastic;
