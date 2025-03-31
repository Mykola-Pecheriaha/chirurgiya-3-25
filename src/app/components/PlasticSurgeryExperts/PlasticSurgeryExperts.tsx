'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PlasticSurgeryExperts.module.css';

interface Specialist {
  id: string;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  profileUrl: string;
  buttonColor?: string;
  imageHeight?: number;
  imageWidth?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  imageContainerHeight?: number;
}

interface PlasticSurgeryExpertsProps {
  backgroundColor?: string;
  specialists?: Specialist[];
}

// Дані про фахівців з пластичної хірургії
const defaultSpecialists: Specialist[] = [
  {
    id: 'specialist1',
    name: 'Печеряга Микола Миколайович',
    position: 'Пластичний хірург',
    description:
      'Хірург вищої категорії, стаж роботи 30 років. Спеціалізується на пластичних, естетичних та малоінвазивних операціях, а також на проктології',
    imageUrl: '/images/ourSpecialists/pecheriaha.jpg',
    profileUrl: '/specialists/pecheriaha',
    buttonColor: '#1eaaf1',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist2',
    name: 'Андрушкова Юлія Анатолієвна',
    position: 'Хірург-онколог',
    description:
      'Хірург-онколог, стаж роботи 4 роки. Спеціалізується на пластичних операціях та операціях при утвореннях шкіри',
    imageUrl: '/images/ourSpecialists/andrushkova.JPG',
    profileUrl: '/specialists/andrushkova',
    buttonColor: '#3eccf3',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
];

const PlasticSurgeryExperts: React.FC<PlasticSurgeryExpertsProps> = ({
  backgroundColor = '#f0f7ff',
  specialists = defaultSpecialists,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topText}>Ми працюємо в next.js I ts</div>

        <h2 className={styles.title}>Фахівці з пластичної хірургії</h2>

        <div className={styles.description}>
          <p>
            Пластична хірургія допомагає покращити зовнішність, відновити
            гармонію тіла та впевненість у собі. Наші фахівці – досвідчені
            хірурги, які використовують сучасні методики для досягнення
            природних і безпечних результатів. Оберіть спеціаліста, якому можна
            довірити свою красу та здоровя.
          </p>
        </div>

        <div className={styles.specialistsGrid}>
          {specialists.map((specialist) => (
            <div key={specialist.id} className={styles.specialistCard}>
              <div
                className={styles.imageContainer}
                style={{
                  height: specialist.imageContainerHeight
                    ? `${specialist.imageContainerHeight}px`
                    : '300px',
                }}
              >
                <Image
                  src={specialist.imageUrl || '/placeholder.svg'}
                  alt={specialist.name}
                  width={specialist.imageWidth || 300}
                  height={specialist.imageHeight || 300}
                  className={styles.specialistImage}
                  style={{
                    objectFit: specialist.objectFit || 'cover',
                    objectPosition: specialist.objectPosition || 'center',
                  }}
                  onError={(e) => {
                    // Встановлюємо запасне зображення при помилці завантаження
                    e.currentTarget.src =
                      '/placeholder.svg?height=300&width=300';
                  }}
                />
              </div>

              <div className={styles.specialistInfo}>
                <h3 className={styles.specialistName}>{specialist.name}</h3>
                <div className={styles.specialistPosition}>
                  {specialist.position}
                </div>
                <p className={styles.specialistDescription}>
                  {specialist.description}
                </p>
              </div>

              <Link
                href={specialist.profileUrl}
                className={styles.profileButton}
                style={{ backgroundColor: specialist.buttonColor }}
              >
                Переглянути профіль
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlasticSurgeryExperts;
