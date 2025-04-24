'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './Gerniotomiya.module.css';

interface GerniotomiyaProps {
  backgroundColor?: string;
}

const Gerniotomiya: React.FC<GerniotomiyaProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Зображення для компонента
  const image = {
    src: '/images/gerniotomiya/gerniya2.png',
    alt: 'Грижа передньої черевної стінки',
    width: 600,
    height: 450,
  };

  return (
    <section className={styles.gerniotomiya} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Грижі</h2>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitsItem}>🔹 Зникає випинання</li>
              <li className={styles.benefitsItem}>
                🔹 Усувається ризик защемлення
              </li>
              <li className={styles.benefitsItem}>
                🔹 Відновлюється естетика тіла
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.fullWidthContent}>
          <p className={styles.paragraph}>
            <strong>Грижі</strong> передньої черевної стінки – патологічні
            стани, які повязані з випинанням органів під шкіру через пупкове
            кільце, паховий канал та інші природні отвори.
          </p>
          <p className={styles.paragraph}>
            Також грижа може виникнути як ускладнення після оперативного
            втручання. Це поширене захворювання, яке у дорослої людини можна
            усунути тільки оперативним шляхом. Грижа ніколи не проходить
            самостійно і доставляє пацієнтові багато болісних відчуттів. Тому
            найкращий спосіб швидко повернутися до повноцінного життя і забути
            про болі в животі – лапароскопічна операція.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gerniotomiya;
