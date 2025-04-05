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
    imageUrl: '/placeholder.svg?height=200&width=200&text=Збільшення+груді',
    imageAlt: 'Збільшення груді',
    link: '/services/plastic-surgery/breast-augmentation',
  },
  {
    id: 'breast-lift',
    title: 'Підтяжка грудей',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Підтяжка+грудей',
    imageAlt: 'Підтяжка грудей',
    link: '/services/plastic-surgery/breast-lift',
  },
  {
    id: 'papila-correction',
    title: 'Корекція соска та ареоли',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Корекція+соска',
    imageAlt: 'Корекція соска та ареоли',
    link: '/services/plastic-surgery/papila-correction',
  },
  {
    id: 'implant-removal',
    title: 'Видалення імплантів',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Видалення+імплантів',
    imageAlt: 'Видалення імплантів',
    link: '/services/plastic-surgery/implant-removal',
  },
  {
    id: 'implant-replacement',
    title: 'Заміна імплантів',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Заміна+імплантів',
    imageAlt: 'Заміна імплантів',
    link: '/services/plastic-surgery/implant-replacement',
  },
  {
    id: 'gynecomastia',
    title: 'Гінекомастія',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Гінекомастія',
    imageAlt: 'Гінекомастія',
    link: '/services/plastic-surgery/gynecomastia',
  },
  {
    id: 'face-lift',
    title: 'Підтяжка обличчя',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Підтяжка+обличчя',
    imageAlt: 'Підтяжка обличчя',
    link: '/services/plastic-surgery/face-lift',
  },
  {
    id: 'blepharoplasty',
    title: 'Блефаропластика',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Блефаропластика',
    imageAlt: 'Блефаропластика',
    link: '/services/plastic-surgery/blepharoplasty',
  },
  {
    id: 'flap-correction',
    title: 'Корекція клаповухості',
    imageUrl:
      '/placeholder.svg?height=200&width=200&text=Корекція+клаповухості',
    imageAlt: 'Корекція клаповухості',
    link: '/services/plastic-surgery/flap-correction',
  },
  {
    id: 'abdominoplasty',
    title: 'Абдомінопластика',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Абдомінопластика',
    imageAlt: 'Абдомінопластика',
    link: '/services/plastic-surgery/abdominoplasty',
  },
  {
    id: 'gernioplastica',
    title: 'Герніопластика',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Герніопластика',
    imageAlt: 'Герніопластика',
    link: '/services/plastic-surgery/gernioplastica',
  },
  {
    id: 'liposuction',
    title: 'Ліпосакція',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Ліпосакція',
    imageAlt: 'Ліпосакція',
    link: '/services/plastic-surgery/liposuction',
  },
  {
    id: 'leg-plastic',
    title: 'Пластика ніг',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Пластика+ніг',
    imageAlt: 'Пластика ніг',
    link: '/services/plastic-surgery/leg-plastic',
  },
  {
    id: 'buttock-augmentation',
    title: 'Збільшення сідниць',
    imageUrl: '/placeholder.svg?height=200&width=200&text=Збільшення+сідниць',
    imageAlt: 'Збільшення сідниць',
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
        <div className={styles.topText}>Ми працюємо в next.js I ts</div>

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
