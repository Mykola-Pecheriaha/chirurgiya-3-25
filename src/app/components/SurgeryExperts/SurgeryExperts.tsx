'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SurgeryExperts.module.css';

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

interface SurgeryExpertsProps {
  backgroundColor?: string;
  specialists?: Specialist[];
}

// Дані про фахівців з хірургії
const defaultSpecialists: Specialist[] = [
  {
    id: 'specialist1',
    name: 'Горбатенко Едуард Олександрович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, Заступник медичного директора по хірургії. Стаж роботи 22 роки.',
    imageUrl: '/images/ourSpecialists/gorbatenko.jpg',
    profileUrl: '/specialists/gorbatenko',
    buttonColor: '#1eaaf1',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist2',
    name: 'Пижик Валентин Анатолійович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, Завідувач хірургічного відділення №2. Стаж роботи 28 років.',
    imageUrl:
      '/images/ourSpecialists/pyzhyk.JPG?height=200pyzhyk.JPG00&width=300',
    profileUrl: '/specialists/pyzhyk',
    buttonColor: '#3eccf3',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist3',
    name: 'Печеряга Микола Миколайович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, стаж роботи 30 років. Спеціалізується на пластичних, естетичних та малоінвазивних операціях, а також на проктології.',
    imageUrl: '/images/ourSpecialists/pecheriaha.jpg',
    profileUrl: '/specialists/pecheriaha',
    buttonColor: '#1eaaf1',
    objectFit: 'none',
    objectPosition: 'center top',
    imageContainerHeight: 400,
    imageHeight: 350,
    imageWidth: 300,
  },
  {
    id: 'specialist4',
    name: 'Бамбизов Леонід Михайлович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, стаж роботи 30 років. Спеціалізується на малоінвазивних операціях, на операціях біліодегестивної ділянки і ендоскопічних операціях жовчевивідних шляхах.',
    imageUrl: '/images/ourSpecialists/bambizov.jpg',
    profileUrl: '/specialists/bambizov',
    buttonColor: '#3eccf3',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist5',
    name: 'Карпенко Олександр Вікторович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, стаж роботи 20 років. Спеціалізується на малоінвазивних баріатричних операціях.',
    imageUrl: '/images/ourSpecialists/karpenko.jpg',
    profileUrl: '/specialists/karpenko',
    buttonColor: '#3eccf3',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist6',
    name: 'Андрушкова Юлія Анатолієвна',
    position: 'Хірург-онколог',
    description:
      'Хірург-онколог, стаж роботи 4 роки. Спеціалізується на пластичних операціях та операціях при утвореннях шкіри.',
    imageUrl: '/images/ourSpecialists/andrushkova.JPG',
    profileUrl: '/specialists/andrushkova',
    buttonColor: '#3eccf3',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist7',
    name: 'Фомін Андрій',
    position: 'Хірург',
    description:
      'Хірург першої категорії, стаж роботи 18 років. Спеціалізується по судинній хірургії, а також на операціях при варикозному розширенні вен.',
    imageUrl: '/images/ourSpecialists/fomin.jpg',
    profileUrl: '/specialists/fomin',
    buttonColor: '#3eccf3',
    objectFit: 'contain',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist8',
    name: 'Білега Богдан',
    position: 'Хірург',
    description:
      'Хірург першої категорії, стаж роботи 18 років. Сертифікований також як уролог.',
    imageUrl: '/images/ourSpecialists/placeholder.svg?height=300&width=300',
    profileUrl: '/specialists/bilega',
    buttonColor: '#3eccf3',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
  {
    id: 'specialist9',
    name: 'Грудецький Віталій Віталійович',
    position: 'Хірург',
    description:
      'Хірург-онколог першої категорії, стаж роботи 12 років. Спеціалізується на малоінвазивних та баріатричних операціях.',
    imageUrl: '/images/ourSpecialists/placeholder.svg?height=300&width=300',
    profileUrl: '/specialists/hrudetskyi',
    buttonColor: '#3eccf3',
    objectFit: 'cover',
    objectPosition: 'center top',
    imageContainerHeight: 400,
  },
];

const SurgeryExperts: React.FC<SurgeryExpertsProps> = ({
  backgroundColor = '#f0f7ff',
  specialists = defaultSpecialists,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Фахівці з хірургії</h2>

        <div className={styles.description}>
          <p>
            Хірургія – це основа медицини. Невідкладні операції рятують життя, а
            планові – покращують його якість і тривалість. Хірурги – еліта
            будь-якої лікарні, і наші спеціалісти поєднують досвід, сучасні
            технології та майстерність. Від простих втручань до найскладніших
            операцій – усе виконується з дотриманням найвищих стандартів.
            Професіоналізм, самовідданість та безпека пацієнта – наші головні
            принципи.
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

export default SurgeryExperts;
