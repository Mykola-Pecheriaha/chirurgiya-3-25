'use client';

import type React from 'react';
import Link from 'next/link';
import styles from './BigBord.module.css';

interface BigBordProps {
  backgroundColor?: string;
}

const BigBord: React.FC<BigBordProps> = ({ backgroundColor = '#f0f7ff' }) => {
  return (
    <div className={styles.bigBord} style={{ backgroundColor }}>
      <div className={styles.containerBig}>
        {/* Основний контент з текстом */}
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>
            Хірургічне відділення № 1 ЦМКЛ м.Чернівці
          </h1>
          <h2 className={styles.subTitle}>Обирайте нас - тому що ...</h2>
          <ul className={styles.featuresList}>
            <li>ми професійні</li>
            <li>ми турботливі</li>
            <li>у нас сучасне обладнання</li>
            <li>у нас комфортні палати</li>
            <li>у нас повне медикаментозне забезпечення</li>
            <li>у нас сучасне і лагідне наркозне забезпечення</li>
          </ul>

          {/* Кнопка "Зв'язатися з нами" */}
          <Link href="/about-doctor/contacts">
            <button className={styles.contactButton}>
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigBord;
