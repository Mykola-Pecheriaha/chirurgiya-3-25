import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Services.module.css';

interface Service {
  id: string;
  title: string;
  imageUrl?: string;
  imageAlt: string;
  link: string;
}

interface ServicesProps {
  backgroundColor?: string;
  services?: Service[];
  cardsPerRow?: number;
}

const defaultServices: Service[] = [
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
    id: 'varicose',
    title: 'Судинна хірургія',
    imageUrl: '/images/services/vascular.jpg',
    imageAlt: 'Судинна хірургія',
    link: '/services/varicose',
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
  {
    id: 'pyoseptic-surgery',
    title: 'Гнійно-септичні захворювання в хірургії',
    imageUrl: '/images/services/flegmon6.jpg',
    imageAlt: 'Гнійно-септичні захворювання в хірургії',
    link: '/services/pyoseptic-surgery',
  },
];

const Services: React.FC<ServicesProps> = ({
  backgroundColor = '#f8f9fa',
  services = defaultServices,
  cardsPerRow = 3, // Змінено з 4 на 3
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Послуги хірургічного відділення</h2>

        <div className={styles.servicesRow}>
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
