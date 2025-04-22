'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PlasticSurgery.module.css';

interface ServiceCard {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

interface PlasticSurgeryProps {
  backgroundColor?: string;
  cardsPerRow?: 3 | 4;
}

// Дані про послуги пластичної хірургії
const plasticSurgeryServices: ServiceCard[] = [
  {
    id: 'breast-augmentation',
    title: 'Збільшення груді',
    imageUrl: '/images/plastic-list/plastic-lift.jpg',
    imageAlt: 'Збільшення груді',
    link: '/services/plastic-surgery/breast-surgery',
  },
  {
    id: 'breast-lift',
    title: 'Підтяжку грудей і корекцію сосків та ареоли',
    imageUrl: '/images/plastic-list/plastic-lift2.jpg',
    imageAlt: 'Підтяжку грудей і корекцію сосків та ареоли',
    link: '/services/plastic-surgery/mastopexy-with-nipple-correction',
  },
  {
    id: 'papila-correction',
    title: 'Корекція соска та ареоли',
    imageUrl: '/images/plastic-list/plastic-lift3.jpg',
    imageAlt: 'Корекція соска та ареоли',
    link: '/services/plastic-surgery/mastopexy-with-nipple-correction',
  },
  {
    id: 'implant-removal',
    title: 'Видалення імплантів',
    imageUrl: '/images/plastic-list/plastic-lift4.jpg',
    imageAlt: 'Видалення імплантів',
    link: '/services/plastic-surgery/implant-revision',
  },
  {
    id: 'implant-replacement',
    title: 'Заміна імплантів',
    imageUrl: '/images/plastic-list/plastic-lift6.jpg',
    imageAlt: 'Заміна імплантів',
    link: '/services/plastic-surgery/implant-revision',
  },
  {
    id: 'gynecomastia',
    title: 'Гінекомастія',
    imageUrl: '/images/plastic-list/plastic-lift7.jpg',
    imageAlt: 'Гінекомастія',
    link: '/services/plastic-surgery/gynecomastia',
  },
  {
    id: 'facelift-section',
    title: 'Підтяжка обличчя та шиї',
    imageUrl: '/images/plastic-list/plastic-lift8.jpg',
    imageAlt: 'Підтяжка обличчя та шиї',
    link: '/services/plastic-surgery/facelift-section',
  },
  {
    id: 'blepharoplasty',
    title: 'Блефаропластика',
    imageUrl: '/images/plastic-list/plastic-lift9.jpg',
    imageAlt: 'Блефаропластика',
    link: '/services/plastic-surgery/blepharoplasty',
  },
  {
    id: 'ottoplastic',
    title: 'Корекція клаповухості',
    imageUrl: '/images/plastic-list/plastic-lift11.jpg',
    imageAlt: 'Корекція клаповухості',
    link: '/services/plastic-surgery/ottoplastic',
  },
  {
    id: 'abdominoplasty',
    title: 'Абдомінопластика',
    imageUrl: '/images/plastic-list/plastic-lift12.jpg',
    imageAlt: 'Абдомінопластика',
    link: '/services/plastic-surgery/abdominoplasty',
  },
  {
    id: 'gernioplastica',
    title: 'Герніопластика',
    imageUrl: '/images/plastic-list/plastic-lift13.jpg',
    imageAlt: 'Герніопластика',
    link: '/services/plastic-surgery/gernioplastica',
  },
  {
    id: 'liposuction',
    title: 'Ліпосакція',
    imageUrl: '/images/plastic-list/plastic-lift14.jpg',
    imageAlt: 'Ліпосакція',
    link: '/services/plastic-surgery/liposuction',
  },
  {
    id: 'leg-plastic',
    title: 'Пластика ніг',
    imageUrl: '/images/plastic-list/plastic-lift15.jpg',
    imageAlt: 'Пластика ніг',
    link: '/services/plastic-surgery/leg-plastic',
  },
  {
    id: 'buttock-augmentation',
    title: 'Збільшення сідниць',
    imageUrl: '/images/plastic-list/plastic-lift16.jpg',
    imageAlt: 'Збільшення сідниць',
    link: '/services/plastic-surgery/buttock-augmentation',
  },
  {
    id: 'buttock-augmentation',
    title: 'Видалення шийного горба',
    imageUrl: '/images/plastic-list/plastic-lift17.jpg',
    imageAlt: 'Видалення шийного горба',
    link: '/services/plastic-surgery/buttock-augmentation',
  },
];

const PlasticSurgery: React.FC<PlasticSurgeryProps> = ({
  backgroundColor = '#f8f9fa',
  cardsPerRow = 4,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Пластична хірургія</h2>

        <div
          className={`${styles.servicesGrid} ${cardsPerRow === 3 ? styles.threePerRow : styles.fourPerRow}`}
        >
          {plasticSurgeryServices.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className={styles.serviceCardLink}
            >
              <div className={styles.serviceCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={service.imageUrl || '/placeholder.svg'}
                    alt={service.imageAlt}
                    width={200}
                    height={200}
                    className={styles.serviceImage}
                  />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlasticSurgery;
