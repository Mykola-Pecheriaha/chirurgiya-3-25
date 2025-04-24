'use client';

import type React from 'react';
import styles from './GerniotomiyaDetails.module.css';
import GernioGallery from './GernioGallery';

interface GerniotomiyaDetailsProps {
  backgroundColor?: string;
}

const GerniotomiyaDetails: React.FC<GerniotomiyaDetailsProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Зображення для першої галереї
  const images = [
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis14.jpg',
      alt: 'Грижі передньої черевної стінки',
      width: 800,
      height: 600,
      title: 'Грижі передньої черевної стінки',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis1.jpg',
      alt: 'Пупочне кільце',
      width: 800,
      height: 600,
      title: 'Пупочне кільце',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis15.jpg',
      alt: 'Паховий канал',
      width: 800,
      height: 600,
      title: 'Паховий канал',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis16.jpg',
      alt: 'Пахова грижа',
      width: 800,
      height: 600,
      title: 'Пахова грижа',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis19.jpg',
      alt: 'Класична герніотомія з сіткою',
      width: 800,
      height: 600,
      title: 'Класична герніотомія з сіткою',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis21.jpg',
      alt: 'Класична герніотомія з сіткою',
      width: 800,
      height: 600,
      title: 'Класична герніотомія з сіткою',
    },
  ];

  // Зображення для другої галереї
  const secondGalleryImages = [
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis6.jpg',
      alt: 'Діагностика грижі',
      width: 800,
      height: 600,
      title: 'Діагностика грижі',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis5.jpg',
      alt: 'Защемлення грижі',
      width: 800,
      height: 600,
      title: 'Защемлення грижі',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis22.jpg',
      alt: 'Хірургічне втручання класичною методикою',
      width: 800,
      height: 600,
      title: 'Хірургічне втручання класичною методикою',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis23.jpg',
      alt: 'Хірургічне втручання лапароскопічним методом',
      width: 800,
      height: 600,
      title: 'Хірургічне втручання лапароскопічним методом',
    },
    {
      src: '/images/gerniotomiyaDetails/gerniyaDetalis25.jpg',
      alt: 'Лапараскопічна герніотомія',
      width: 800,
      height: 600,
      title: 'Лапараскопічна герніотомія',
    },
  ];

  return (
    <section className={styles.gerniotomiyaDetails} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>📌 Що таке грижі?</h2>

            <div className={styles.segment}>
              <p className={styles.paragraph}>
                Грижі передньої черевної стінки — це патологічне випинання
                органів черевної порожнини під шкіру через:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>пупкове кільце,</li>
                <li className={styles.listItem}>паховий канал,</li>
                <li className={styles.listItem}>післяопераційні рубці,</li>
                <li className={styles.listItem}>інші природні отвори.</li>
              </ul>
            </div>

            <div className={styles.segment}>
              <h3 className={styles.subtitle}>⚠️ Чому важливо оперувати?</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Грижі не зникають самостійно
                </li>
                <li className={styles.listItem}>
                  З часом можуть збільшуватися та викликати защемлення
                </li>
                <li className={styles.listItem}>
                  Супроводжуються болем і дискомфортом, особливо під час
                  фізичної активності
                </li>
              </ul>
            </div>

            <div className={styles.segment}>
              <h3 className={styles.subtitle}>
                💡 Оптимальне рішення — операція з вживлення алогенного імпланта
                (сітки)
              </h3>
              <p className={styles.paragraph}>
                Вибір методу (звичайний чи лапароскопічний) залежить від стану
                хворого.
              </p>

              <div className={styles.methodsContainer}>
                <div className={styles.method}>
                  <h4 className={styles.methodTitle}>
                    Лапароскопічний метод герніотомії:
                  </h4>
                  <ul className={styles.methodList}>
                    <li className={`${styles.methodItem} ${styles.positive}`}>
                      дозволяє швидко усунути дефект
                    </li>
                    <li className={`${styles.methodItem} ${styles.positive}`}>
                      має короткий період відновлення
                    </li>
                    <li className={`${styles.methodItem} ${styles.positive}`}>
                      мінімізує післяопераційний біль
                    </li>
                    <li className={`${styles.methodItem} ${styles.negative}`}>
                      однак потребує повного знечулення з апаратним диханням, що
                      передбачає додаткові ризики та витрати
                    </li>
                  </ul>
                </div>

                <div className={styles.method}>
                  <h4 className={styles.methodTitle}>
                    При класичній операції з вживленням сітки:
                  </h4>
                  <ul className={styles.methodList}>
                    <li className={`${styles.methodItem} ${styles.positive}`}>
                      знечулення може бути як місцеве, так і регіональне
                    </li>
                    <li className={`${styles.methodItem} ${styles.positive}`}>
                      непотрібні кошти на герніостеплери
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.galleriesContainer}>
            <div className={styles.galleryContainer}>
              <GernioGallery images={images} />
            </div>
            <div className={styles.galleryContainer}>
              <GernioGallery images={secondGalleryImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GerniotomiyaDetails;
