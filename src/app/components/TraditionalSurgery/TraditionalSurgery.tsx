'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TraditionalSurgery.module.css';

interface SurgeryCard {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

interface TraditionalSurgeryProps {
  backgroundColor?: string;
  surgeryTypes?: SurgeryCard[];
  cardsPerRow?: 3 | 4;
}

// Дані про типи традиційної хірургії
const defaultSurgeryTypes: SurgeryCard[] = [
  {
    id: 'liver',
    title: 'Захворювання печінки',
    imageUrl: '/images/traditionalSurgery/dpksurgery4.jpg',
    imageAlt: 'Захворювання печінки',
    link: '/services/traditional-surgery/liver', // Переконайтеся, що шлях правильний
  },
  {
    id: 'gallbladder',
    title: 'Захворювання жовчевого міхура і жовчевих протоків',
    imageUrl: '/images/traditionalSurgery/chole1.jpg',
    imageAlt: 'Захворювання жовчевого міхура і жовчевих протоків',
    link: '/services/traditional-surgery/gallbladder',
  },
  {
    id: 'stomach',
    title: 'Захворювання шлунка і ДПК',
    imageUrl: '/images/traditionalSurgery/gastro.jpg',
    imageAlt: 'Захворювання шлунка і ДПК',
    link: '/services/traditional-surgery/gastro-duodeno',
  },
  {
    id: 'spleen',
    title: 'Хвороби селезінки',
    imageUrl: '/images/traditionalSurgery/spleen1.jpg',
    imageAlt: 'Хвороби селезінки',
    link: '/services/traditional-surgery/spleen-surgery',
  },
  {
    id: 'intestine',
    title: 'Хвороби кишкивника',
    imageUrl: '/images/traditionalSurgery/intestine2.jpg',
    imageAlt: 'Хвороби кишкивника',
    link: '/services/traditional-surgery/intestine-surgery',
  },
  {
    id: 'soft-tissue',
    title: "Хвороби м'ягких тканей тулуба та кінцівок",
    imageUrl: '/images/traditionalSurgery/derma.jpg',
    imageAlt: "Хвороби м'ягких тканей тулуба та кінцівок",
    link: '/services/traditional-surgery/soft-tissue',
  },
];

const TraditionalSurgery: React.FC<TraditionalSurgeryProps> = ({
  backgroundColor = '#f0f7ff',
  surgeryTypes = defaultSurgeryTypes,
  cardsPerRow = 3,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Хірургічні хвороби</h2>
        <div className={styles.topText}>
          Оперативні втручання на органах черевної порожнини та заочеревинного
          простору, які виконуються через лапаротомний чи заочеревинний доступ.
        </div>

        <div
          className={`${styles.surgeryGrid} ${cardsPerRow === 3 ? styles.threePerRow : styles.fourPerRow}`}
        >
          {surgeryTypes.map((surgery) => (
            <Link
              href={surgery.link}
              key={surgery.id}
              className={styles.surgeryCardLink}
            >
              <div className={styles.surgeryCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={surgery.imageUrl || '/placeholder.svg'}
                    alt={surgery.imageAlt}
                    width={200}
                    height={200}
                    className={styles.surgeryImage}
                  />
                </div>
                <h3 className={styles.surgeryTitle}>{surgery.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам
            детальну консультацію.
          </p>
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

export default TraditionalSurgery;
