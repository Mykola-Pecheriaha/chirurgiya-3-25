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
    imageUrl: '/placeholder.svg?height=200&width=200&text=Захворювання+печінки',
    imageAlt: 'Захворювання печінки',
    link: '/services/traditional-surgery/liver', // Переконайтеся, що шлях правильний
  },
  {
    id: 'gallbladder',
    title: 'Захворювання жовчевого міхура і жовчевих протоків',
    imageUrl:
      '/placeholder.svg?height=200&width=200&text=Захворювання+жовчевого+міхура',
    imageAlt: 'Захворювання жовчевого міхура і жовчевих протоків',
    link: '/traditional-surgery/gallbladder',
  },
  {
    id: 'stomach',
    title: 'Захворювання шлунка і ДПК',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Захворювання+шлунка',
    imageAlt: 'Захворювання шлунка і ДПК',
    link: '/traditional-surgery/stomach',
  },
  {
    id: 'spleen',
    title: 'Хвороби селезінки',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Хвороби+селезінки',
    imageAlt: 'Хвороби селезінки',
    link: '/traditional-surgery/spleen',
  },
  {
    id: 'intestine',
    title: 'Хвороби кишкивника',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Хвороби+кишкивника',
    imageAlt: 'Хвороби кишкивника',
    link: '/traditional-surgery/intestine',
  },
  {
    id: 'soft-tissue',
    title: "Хвороби м'ягких тканей тулуба та кінцівок",
    imageUrl:
      "/placeholder.svg?height=200&width=200&text=Хвороби+м'ягких+тканей",
    imageAlt: "Хвороби м'ягких тканей тулуба та кінцівок",
    link: '/traditional-surgery/soft-tissue',
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
        <h2 className={styles.title}>Традиційна хірургія</h2>
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
      </div>
    </div>
  );
};

export default TraditionalSurgery;
