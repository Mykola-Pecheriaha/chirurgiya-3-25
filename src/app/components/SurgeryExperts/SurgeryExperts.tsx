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
      'Хірург вищої категорії, Заступник медичного директора по хірургії. Стаж роботи -- роки.',
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
      'Хірург вищої категорії, Завідувач хірургічного відділення №2. Стаж роботи -- років.',
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
      'Хірург вищої категорії, стаж роботи 30 років. Спеціалізація - Загальна хіркргія , пластична, естетична та малоінвазивна хірургія, а також на проктології.',
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
      'Хірург вищої категорії, стаж роботи -- років. Спеціалізація - Загальна хірургія ...',
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
      'Хірург вищої категорії, стаж роботи -- років. Спеціалізація - Загальна хірургія ...',
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
    description: 'Хірург-онколог, стаж роботи -- роки. - Загальна хірургія ...',
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
      'Хірург першої категорії, стаж роботи -- років. - Загальна хірургія ...',
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
    description: 'Хірург  ...',
    imageUrl: '/images/ourSpecialists/bilega1.jpg',
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
    description: 'Хірург-...',
    imageUrl: '/images/ourSpecialists/cartca1.jpg',
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

export default SurgeryExperts;
