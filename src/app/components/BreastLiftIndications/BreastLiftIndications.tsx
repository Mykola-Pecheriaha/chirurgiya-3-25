'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import styles from './BreastLiftIndications.module.css';
import BreastLiftGallery from '../../components/BreastLiftGallery/BreastLiftGallery';

interface BreastLiftIndicationsProps {
  backgroundColor?: string;
}

// Дані для галереї
const galleryImages = [
  '/images/breast-lift/removalInfo12.jpg',
  '/images/breast-lift/removalInfo30.jpg',
  '/images/breast-lift/removalInfo35.jpg',
  '/images/breast-lift/removalInfo46.jpg',
];

// Запасні зображення, якщо основні недоступні
const fallbackImages = [
  '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+1',
  '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+2',
  '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+3',
  '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+4',
];

const BreastLiftIndications: React.FC<BreastLiftIndicationsProps> = ({
  backgroundColor = '#e4f9b0', // Світліший, але веселий відтінок від #d6f58e
}) => {
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
          Підтяжку грудей і корекцію сосків та ареоли
        </h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.sectionTitle}>
              Покази до підтяжки молочних залоз та корекції ареоли і соска
            </h3>

            <h4 className={styles.subTitle}>
              Покази до підтяжки грудей та корекції сосково-ареолярної зони
            </h4>
            <ul className={styles.indicationsList}>
              <li className={styles.indicationItem}>
                <strong>Птоз (опущення грудей).</strong> З віком тканини
                втрачають еластичність, шкіра в{"'"}яне, бюст втрачає форму.
                Підтяжка ефективно вирішує цю вікову проблему, повертаючи
                пружність і естетику.
              </li>
              <li className={styles.indicationItem}>
                <strong>Зміни після пологів та грудного вигодовування.</strong>{' '}
                Залозиста тканина значно збільшується, а після лактації —
                зменшується, залишаючи обвислу шкіру. Підтяжка допомагає молодим
                мамам повернути форму грудей.
              </li>
              <li className={styles.indicationItem}>
                <strong>Асиметрія.</strong> Операція дозволяє вирівняти розмір
                та форму молочних залоз.
              </li>
              <li className={styles.indicationItem}>
                <strong>Різке схуднення.</strong> Коливання ваги змінюють об
                {"'"}єм грудей, а надлишок шкіри залишається. Підтяжка повертає
                пружність і привабливість.
              </li>
              <li className={styles.indicationItem}>
                <strong>Косметичні недоліки сосків та ареоли.</strong> Корекція
                дозволяє покращити форму, розмір і зовнішній вигляд.
              </li>
            </ul>
          </div>

          <div className={styles.galleryColumn}>
            {imagesLoaded && (
              <BreastLiftGallery
                images={images}
                galleryId="breast-lift-gallery"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastLiftIndications;
