'use client';

import type React from 'react';

import { useState } from 'react';
import styles from './BreastLiftPreparation.module.css';
import PreparationGallery from '../../components/PreparationGallery/PreparationGallery';

interface BreastLiftPreparationProps {
  backgroundColor?: string;
}

const BreastLiftPreparation: React.FC<BreastLiftPreparationProps> = ({
  backgroundColor = '#f0f7ff',
}) => {
  // Дані для галереї
  const galleryImages = [
    '/images/breast-preparation/breast-preparation10.jpg',
    '/images/breast-preparation/breast-preparation9.jpg',
    '/images/breast-preparation/breast-preparation11.jpg',
    '/images/breast-preparation/breast6.bmp',
  ];

  // Запасні зображення, якщо основні недоступні
  const fallbackImages = [
    '/placeholder.svg?height=600&width=400&text=Підготовка+1',
    '/placeholder.svg?height=600&width=400&text=Підготовка+2',
    '/placeholder.svg?height=600&width=400&text=Підготовка+3',
    '/placeholder.svg?height=600&width=400&text=Підготовка+4',
  ];

  const [images, setImages] = useState<string[]>(galleryImages);

  // Перевірка доступності зображень при монтуванні компонента виконується в PreparationGallery

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Підготовка до операції підтяжки грудей та корекції сосково-ареолярної
          ділянки
        </h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.sectionTitle}>
              При Підготовці до операції "підтяжки грудей та корекції
              сосково-ареолярної ділянки"
            </h3>
            <p className={styles.paragraph}>
              Потрібно провести ряд обстежень пацієнтки
            </p>

            <h4 className={styles.subTitle}>До обстеження входить:</h4>
            <ul className={styles.examList}>
              <li className={styles.examItem}>
                <span className={styles.bulletPoint}>🔹</span>
                <span className={styles.examText}>УЗД молочних залоз</span>
              </li>
              <li className={styles.examItem}>
                <span className={styles.bulletPoint}>🔹</span>
                <span className={styles.examText}>Мамографія (за потреби)</span>
              </li>
              <li className={styles.examItem}>
                <span className={styles.bulletPoint}>🔹</span>
                <span className={styles.examText}>
                  Огляд профільних спеціалістів
                </span>
              </li>
              <li className={styles.examItem}>
                <span className={styles.bulletPoint}>🔹</span>
                <span className={styles.examText}>
                  Загальні та спеціальні аналізи
                </span>
              </li>
              <li className={styles.examItem}>
                <span className={styles.bulletPoint}>🔹</span>
                <span className={styles.examText}>ЕКГ</span>
              </li>
              <li className={styles.examItem}>
                <span className={styles.bulletPoint}>🔹</span>
                <span className={styles.examText}>Флюорографія (ФОГК)</span>
              </li>
            </ul>

            <p className={styles.paragraph}>
              У деяких випадках рекомендуються:
            </p>
            <p className={styles.paragraph}>
              . УЗД молочних залоз та консультація мамолога.
            </p>

            <div className={styles.noteBox}>
              <span className={styles.noteIcon}>📌</span>
              <p className={styles.noteText}>
                Для іногородніх пацієнтів передбачена можливість поєднати
                консультацію, обстеження та здачу аналізів в один день, а також
                провести операцію під час того ж візиту. Це значно економить час
                і є зручним варіантом для пацієнтів з інших міст.
              </p>
            </div>

            <p className={styles.paragraph}>
              Рекомендується відмовитися від куріння та вживання алкоголю за 2
              тижні до операції, а також повідомити фахівця про препарати, що
              регулярно приймаються. Особливу увагу слід звернути на прийом
              препаратів, що впливають на згортання крові.
            </p>
          </div>

          <div className={styles.galleryColumn}>
            <PreparationGallery
              images={images}
              fallbackImages={fallbackImages}
              galleryId="preparation-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastLiftPreparation;
