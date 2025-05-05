'use client';

import Image from 'next/image';
import styles from './CarpalSyndrome.module.css';
import { CarpalGallery } from './CarpalGallery';

interface CarpalSyndromeProps {
  backgroundColor?: string;
}

export function CarpalSyndrome({
  backgroundColor = '#f8f9fa',
}: CarpalSyndromeProps) {
  return (
    <section className={styles.carpalSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Перша секція: текст зліва, зображення справа */}
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.mainTitle}>Карпальний синдром.</h2>
            <p className={styles.subtitle}>Розпізнання і фахове лікування</p>

            <ul className={styles.benefitsList}>
              <li>Зникнення болі в кисті</li>
              <li>Зникнення відчуття заніміння в кінчиках пальців</li>
              <li>Набуття сили в м'язах кисті</li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/carpal/carpale17-removebg-preview.png"
                alt="Карпальний синдром"
                width={500}
                height={400}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        {/* Друга секція: повний текст на всю ширину */}
        <div className={styles.fullWidthSection}>
          <p className={styles.descriptionText}>
            Попри його багато назв (cиндро́м запя́стного кана́лу, синдром друкарки,
            хвороба офісних працівників…) є тим захворюванням яке виникає в
            людей, чия професія повязана з одноманітними рухами запястя та
            незручним положенням рук при виконанні роботи.
          </p>
          <p className={styles.descriptionText}>
            Суть захворювання зводиться до того, що в процесі цих рухів кисті
            поступово виникає потовщення і ущільнення оболонок сухожилків
            згиначів, які проходять з передпліччя на кисть через вузький канал
            на запястку. Цей канал називається карпальним, є досить обмежений і
            в звязку з тим що він утворений з трьох сторін кістками запястка. А
            з однієї сторони досить щільною карпальною звязкою, яка не в змозі
            розтягуватися. Тому місця в цьому каналі досить обмежено і через ці
            потовщення оболонок сухожилок приводить до здавлення нерва
            (серединного) який також там проходить.
          </p>
        </div>

        {/* Третя секція: текст зліва, галерея справа */}
        <div className={styles.gallerySection}>
          <div className={styles.leftColumn}>
            <h3 className={styles.sectionTitle}>Анатомія карпального каналу</h3>
            <p className={styles.anatomyText}>
              Карпальний канал - це вузький прохід на долонній стороні зап'ястя,
              через який проходять серединний нерв і сухожилля згиначів пальців.
              Стінки каналу утворені кістками зап'ястя і поперечною карпальною
              зв'язкою.
            </p>
            <p className={styles.anatomyText}>
              При карпальному синдромі відбувається здавлення серединного нерва,
              що призводить до болю, оніміння та слабкості в руці і пальцях.
            </p>
            <h3 className={styles.sectionTitle}>Функція серединного нерву</h3>
            <ul className={styles.anatomyText}>
              <li>відчувати перші чотири пальці</li>
              <li>
                відповідає за координацію руху кисті, дрібну моторику кисті
              </li>
              <li>
                звуження і розширення кровоносних судин від дії зовнішніх
                подразників
              </li>
              <li>регулює роботу потових залоз долоні</li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <CarpalGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarpalSyndrome;
