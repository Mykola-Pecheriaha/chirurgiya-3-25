'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Services.module.css';

interface ServiceCard {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

interface ServicesProps {
  backgroundColor?: string;
  services?: ServiceCard[];
  cardsPerRow?: 3 | 4;
}

// Дані про послуги хірургічного відділення
const defaultServices: ServiceCard[] = [
  {
    id: 'generalsurgery',
    title: 'Хірургічні хвороби',
    imageUrl: '/images/services/general.jpg',
    imageAlt: 'Хірургічні хвороби',
    link: '/services/traditional-surgery',
  },
  {
    id: 'emergencysurgery',
    title: 'Ургентна хірургія',
    imageUrl: '/images/services/urgent.jpg',
    imageAlt: 'Ургентна хірургія',
    link: '/services/emergencysurgery',
  },
  {
    id: 'plasticsurgery',
    title: 'Пластична хірургія',
    imageUrl: '/images/services/plastikl.jpg',
    imageAlt: 'Пластична хірургія',
    link: '/services/plastic-surgery',
  },

  {
    id: 'vascular-surgery',
    title: 'Судинна хірургія',
    imageUrl: '/images/services/vascular.jpg',
    imageAlt: 'Судинна хірургія',
    link: '/services/vascular-surgery',
  },
  {
    id: 'skintumors',
    title: 'Пухлини шкіри',
    imageUrl: '/images/services/resultbreast5.jpg',
    imageAlt: 'Пухлини шкіри',
    link: '/services/skintumors',
  },
  {
    id: 'minimally-invasive',
    title: 'Малоінвазивна хірургія',
    imageUrl: '/images/services/laparoscopiya.jpg',
    imageAlt: 'Малоінвазивна хірургія',
    link: '/services/minimally-invasive',
  },
  {
    id: 'bariatrics',
    title: 'Баріатрична хірургія',
    imageUrl: '/images/services/bariatriya.jpg',
    imageAlt: 'Баріатрична хірургія',
    link: '/services/bariatrics',
  },
  {
    id: 'proctology',
    title: 'Проктологія',
    imageUrl: '/images/services/proctologiya.jpg',
    imageAlt: 'Проктологія',
    link: '/services/proctology',
  },
  {
    id: 'urologiya',
    title: 'Урологія',
    imageUrl: '/images/services/urologi.jpg',
    imageAlt: 'Урологія',
    link: '/services/emergency-surgery',
  },
];

const Services: React.FC<ServicesProps> = ({
  backgroundColor = '#f8f9fa',
  services = defaultServices,
  cardsPerRow = 4,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Послуги хірургічного відділення</h2>

        <div
          className={`${styles.servicesGrid} ${cardsPerRow === 3 ? styles.threePerRow : styles.fourPerRow}`}
        >
          {services.map((service) => (
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

export default Services;
