'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import styles from './BreastLiftContraIndications.module.css';
import { ContraIndicationsGallery } from '../../components/ContraIndicationsGallery/ContraIndicationsGallery';

interface BreastLiftContraIndicationsProps {
  backgroundColor?: string;
}

const BreastLiftContraIndications: React.FC<
  BreastLiftContraIndicationsProps
> = ({
  backgroundColor = '#f0f7ff', // Світло-блакитний колір за замовчуванням
}) => {
  // Дані для галереї
  const galleryImages = [
    '/images/breast-contraindications/blefaroContraindicatio1.jpg',
  ];

  // Запасні зображення, якщо основні недоступні
  const fallbackImages = [
    '/placeholder.svg?height=600&width=400&text=Протипоказання+1',
  ];

  const [images, setImages] = useState<string[]>(galleryImages);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Перевірка доступності зображень при монтуванні компонента
  useEffect(() => {
    const checkImagesExist = async () => {
      try {
        const imagePromises = galleryImages.map(
          (src) =>
            new Promise((resolve) => {
              const img = new window.Image();
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
              img.src = src;
            })
        );

        const results = await Promise.all(imagePromises);
        const allImagesExist = results.every(Boolean);

        if (!allImagesExist) {
          setImages(fallbackImages);
        }

        setImagesLoaded(true);
      } catch (error) {
        console.error('Помилка перевірки зображень:', error);
        setImages(fallbackImages);
        setImagesLoaded(true);
      }
    };

    checkImagesExist();
  }, []);

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Протипокази до операції підтяжки грудей і корекції сосків та ареоли
        </h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              Операція з підтяжки грудей має низку протипоказань:
            </p>
            <ul className={styles.contraindicationsList}>
              <li className={styles.contraindicationItem}>
                вік пацієнтки віком до 18 років;
              </li>
              <li className={styles.contraindicationItem}>
                хронічні захворювання (гіпертонія, цукровий діабет, захворювання
                крові);
              </li>
              <li className={styles.contraindicationItem}>
                гормональна дисфункція;
              </li>
              <li className={styles.contraindicationItem}>
                пухлинні утворення (доброякісні та злоякісні новоутворення);
              </li>
              <li className={styles.contraindicationItem}>
                схильність до формування рубців;
              </li>
              <li className={styles.contraindicationItem}>
                надлишкова маса тіла.
              </li>
            </ul>
            <p className={styles.paragraph}>
              Також втручання варто відкласти при гострих респіраторах
              захворюваннях, що супроводжуються високою температурою тіла.
              Планувати корекцію рекомендується не раніше ніж через 6 місяців
              після завершення лактації. Груди повинні набути остаточної форми,
              щоб фахівець міг бачити всю картину та дати відповідні
              рекомендації.
            </p>
            <p className={styles.paragraph}>
              Рішення про хірургічне втручання приймає спеціаліст на підставі
              результатів обстеження та аналізів.
            </p>
          </div>

          <div className={styles.galleryColumn}>
            {imagesLoaded && (
              <ContraIndicationsGallery
                images={images}
                galleryId="contra-indications-gallery"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastLiftContraIndications;
