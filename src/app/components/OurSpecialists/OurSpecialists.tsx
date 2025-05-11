'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OurSpecialists.module.css';

interface Specialist {
  id: string;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  profileUrl: string;
  buttonColor?: string;
  imageHeight?: number; // Додано
  imageWidth?: number; // Додано
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'; // Додано
}

interface OurSpecialistsProps {
  backgroundColor?: string;
  specialists?: Specialist[];
}

const defaultSpecialists: Specialist[] = [
  {
    id: 'specialist1',
    name: 'Горбатенко Едуард Олександрович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, Заступник медичного директора по хірургії Стаж роботи 22 роки. В 1997 році',
    imageUrl: '/images/ourSpecialists/gorbatenko.jpg',
    profileUrl: '/specialists/gorbatenko',
    buttonColor: '#1eaaf1',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist2',
    name: 'Пижик Валентин Анатолійович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, Завідувач хірургічного відділення №2.    Стаж роботи 28 років. ',
    imageUrl:
      '/images/ourSpecialists/pyzhyk.JPG?height=200pyzhyk.JPG00&width=300',
    profileUrl: '/specialists/pyzhyk',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 100, // Змінює ширину зображення
  },

  {
    id: 'specialist3',
    name: 'Печеряга Микола Миколайович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, стаж роботи 30 років. Спеціалізується на пластичних, естетичних та малоінвазивних операціях, а також на проктології',

    imageUrl: '/images/ourSpecialists/pecheriaha.jpg',
    profileUrl: '/specialists/pecheriaha',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 200, // Змінює ширину зображення
  },
  {
    id: 'specialist4',
    name: 'Бамбизов Леонід Михайлович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, стаж роботи 30 років. Стаж роботи 30 років. Спеціалізується на малоінвазивних операціях, на операціях біліодегестивної ділянки і ендоскопічних операціях жовчевивідних шляхах',
    imageUrl: '/images/ourSpecialists/bambizov.jpg',
    profileUrl: '/specialists/bambizov',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist5',
    name: 'Карпенко Олександир Вікторович',
    position: 'Хірург',
    description:
      'Хірург вищої категорії, стаж роботи 30 років. Стаж роботи 20 років. Спеціалізується на малоінвазивних баріатричеих операціях.',
    imageUrl: '/images/ourSpecialists/karpenko.jpg',
    profileUrl: '/specialists/karpenko',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist6',
    name: 'Андрушкова Юлія Анатолієвна',
    position: 'Хірург-онколог',
    description:
      'Хірург-онколог , стаж роботи 4 роки. Спеціалізується на пластчих операціях та операціях при утвореннях шкіри',
    imageUrl: '/images/ourSpecialists/andrushkova.JPG',
    profileUrl: '/specialists/andrushkova',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist7',
    name: 'Фомін Андрій ',
    position: 'Хірург',
    description:
      'Хірург першої категорії, стаж роботи 18 років. Спеціалізується по судинні хірургії, а також на операціях при варикозному розширенні вен',
    imageUrl: '/images/ourSpecialists/fomin.jpg',
    profileUrl: '/specialists/fomin',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist8',
    name: 'Білега Богдан ',
    position: 'Хірург',
    description:
      'Хірург першої категорії, стаж роботи 18 років. Сертифікований також як уролог',
    imageUrl: '/images/ourSpecialists/bilega1.jpg',
    profileUrl: '/specialists/bilega',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist9',
    name: 'Кубеєв Сергій Германович',
    position: 'Уролог',
    description: 'Уролог першої категорії, стаж роботи 28 років. ',
    imageUrl: '/images/ourSpecialists/kubeyev.JPG',
    profileUrl: '/specialists/kubeyev',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist10',
    name: 'Курій Микола Іванович',
    position: 'Уролог',
    description:
      'Уролог першої категорії, стаж роботи 8 років. Спеціалізується на малоінвазивних та ендоскопічних урологічних операціях.',
    imageUrl: '/images/ourSpecialists/kurii.JPG',
    profileUrl: '/specialists/kurii',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist11',
    name: 'Блискун Володимир',
    position: 'Уролог',
    description: 'Уролог першої категорії, стаж роботи 8 років.',
    imageUrl: '/images/ourSpecialists/icon7.jpg',
    profileUrl: '/specialists/blyskun',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
  {
    id: 'specialist12',
    name: 'Грудецький Віталій Віталійович',
    position: 'Хірург',
    description:
      'Хірург-онколог першої категорії, стаж роботи 12 років. Спеціалізується на малоінвазивних та баріатричеих операціях',
    imageUrl: '/images/ourSpecialists/icon7.jpg',
    profileUrl: '/specialists/hrudetskyi',
    buttonColor: '#3eccf3',
    objectFit: 'contain', // Змінює спосіб відображення зображення
    // або
    imageHeight: 350, // Змінює висоту зображення
    imageWidth: 300, // Змінює ширину зображення
  },
];

const OurSpecialists: React.FC<OurSpecialistsProps> = ({
  backgroundColor = '#f8f9fa',
  specialists = defaultSpecialists,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наша команда</h2>

        <div className={styles.description}>
          <p>
            Наше хірургічне відділення — це команда досвідчених і професійних
            лікарів, які працюють заради вашого здоровя. Ми поєднуємо сучасні
            методи лікування з індивідуальним підходом до кожного пацієнта.
          </p>
        </div>

        <div className={styles.specialistsGrid}>
          {specialists.map((specialist) => (
            <div key={specialist.id} className={styles.specialistCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={specialist.imageUrl || '/placeholder.svg'}
                  alt={specialist.name}
                  width={specialist.imageWidth || 300}
                  height={specialist.imageHeight || 300}
                  className={styles.specialistImage}
                  style={{ objectFit: specialist.objectFit || 'cover' }}
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

export default OurSpecialists;
