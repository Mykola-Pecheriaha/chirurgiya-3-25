'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MininvasiveSurgery.module.css';

interface SurgeryCard {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

interface MininvasiveSurgeryProps {
  backgroundColor?: string;
  surgeryTypes?: SurgeryCard[];
  cardsPerRow?: 3 | 4;
}

// Дані про типи малоінвазивної хірургії
const defaultSurgeryTypes: SurgeryCard[] = [
  {
    id: 'laparoscopic-surgery',
    title: 'Лапароскопічна хірургія',
    imageUrl: '/images/mininvasiveSurgery/mininvasiveSurgery5.jpg',
    imageAlt: 'Лапароскопічна хірургія',
    link: '/services/minimally-invasive/laparoscopic-surgery',
  },
  {
    id: 'endoscopic-surgery',
    title: 'Ендоскопічна хірургія',
    imageUrl: '/images/mininvasiveSurgery/mininvasiveSurgery1.jpg',
    imageAlt: 'Ендоскопічна хірургія',
    link: '/services/minimally-invasive/endoscopic-surgery',
  },
];

const MininvasiveSurgery: React.FC<MininvasiveSurgeryProps> = ({
  backgroundColor = '#f0f7ff',
  surgeryTypes = defaultSurgeryTypes,
  cardsPerRow = 4,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Малоінвазивна хірургія</h2>
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
                    src={
                      surgery.imageUrl ||
                      '/placeholder.svg?height=200&width=200&query=minimally invasive surgery'
                    }
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
      </div>
    </div>
  );
};

export default MininvasiveSurgery;
