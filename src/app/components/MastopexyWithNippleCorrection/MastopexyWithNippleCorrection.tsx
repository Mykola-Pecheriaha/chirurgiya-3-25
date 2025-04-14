'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './MastopexyWithNippleCorrection.module.css';

interface MastopexyWithNippleCorrectionProps {
  backgroundColor?: string;
}

const MastopexyWithNippleCorrection: React.FC<
  MastopexyWithNippleCorrectionProps
> = ({
  backgroundColor = '#d6f58e', // Початковий колір за замовчуванням
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Підтяжку грудей і корекцію сосків та ареоли
        </h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span className={styles.bulletPoint}>•</span>
                <span className={styles.benefitText}>Бажаний обєм</span>
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.bulletPoint}>•</span>
                <span className={styles.benefitText}>Ідеальна форма</span>
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.bulletPoint}>•</span>
                <span className={styles.benefitText}>
                  Реабілітація до 30 днів
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/mastopexy-with-nipple-correction/plastychna-khirurhiy2.jpg"
                alt="Підтяжка грудей і корекція сосків"
                width={600}
                height={450}
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.src =
                    '/placeholder.svg?height=450&width=600&text=Підтяжка+грудей';
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.fullWidthText}>
          <p className={styles.paragraph}>
            Красиві груди — синонім жіночності, впевненості та внутрішньої
            гармонії. З віком, після вагітності, грудного вигодовування або змін
            у вазі, форма молочної залози втрачає свою пружність, а сосок і
            ареола — чіткі естетичні пропорції.
          </p>
          <p className={styles.paragraph}>
            Підтяжка грудей (мастопексія) дозволяє повернути молочній залозі
            гармонійний контур і природну форму. У поєднанні з корекцією
            сосково-ареолярного комплексу можна досягти максимально
            збалансованого і привабливого результату. Операція не лише усуває
            ознаки опущення грудей, а й вдосконалює зовнішній вигляд сосків та
            ареоли — їх форму, розмір і симетрію.
          </p>
          <p className={styles.paragraph}>
            Сучасні хірургічні методики дозволяють проводити ці втручання
            безпечно, ефективно та з природним результатом, підкреслюючи красу
            кожної жінки.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MastopexyWithNippleCorrection;
