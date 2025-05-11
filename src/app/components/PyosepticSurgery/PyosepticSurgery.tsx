'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PyosepticSurgery.module.css';

interface ServiceCard {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

interface PyosepticSurgeryProps {
  backgroundColor?: string;
  cardsPerRow?: 3 | 4;
}

// Дані про гнійно-септичні захворювання в хірургії
const pyosepticServices: ServiceCard[] = [
  {
    id: 'flegmon',
    title: 'Флегмона',
    imageUrl: '/images/services-pyoseptic/flegmon2.jpg',
    imageAlt: 'Флегмона - гнійне запалення клітковини',
    link: '/services/pyoseptic-surgery/flegmon',
  },
  {
    id: 'furuncle',
    title: 'Фурункул',
    imageUrl: '/images/services-pyoseptic/furuncle.jpg',
    imageAlt: 'Фурункул - гнійне запалення волосяного фолікула',
    link: '/furuncle',
  },
  {
    id: 'carbuncle',
    title: 'Карбункул',
    imageUrl: '/images/services-pyoseptic/carbuncle.jpg',
    imageAlt: 'Карбункул - гнійне запалення групи волосяних фолікулів',
    link: '/carbuncle',
  },
  {
    id: 'abscess',
    title: 'Абсцес',
    imageUrl: '/images/services-pyoseptic/abscess.jpg',
    imageAlt: 'Абсцес - обмежене скупчення гною в тканинах',
    link: '/abscess',
  },
  {
    id: 'hydradenitis',
    title: 'Гідраденіт',
    imageUrl: '/images/services-pyoseptic/hydradenitis.jpg',
    imageAlt: 'Гідраденіт - запалення потових залоз',
    link: '/hydradenitis',
  },
  {
    id: 'panaritium',
    title: 'Панарицій',
    imageUrl: '/images/services-pyoseptic/panaritium2.jpg',
    imageAlt: 'Панарицій - гнійне запалення тканин пальця',
    link: '/panaritium',
  },
  {
    id: 'mastitis',
    title: 'Мастит',
    imageUrl: '/images/services-pyoseptic/mastitis.jpg',
    imageAlt: 'Мастит - запалення молочної залози',
    link: '/mastitis',
  },
  {
    id: 'peritonitis',
    title: 'Перитоніт',
    imageUrl: '/images/services-pyoseptic/peritonitis.jpg',
    imageAlt: 'Перитоніт - запалення очеревини',
    link: '/services/pyoseptic-surgery',
  },
];

export function PyosepticSurgery({
  backgroundColor = '#f8f9fa',
  cardsPerRow = 4,
}: PyosepticSurgeryProps) {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Гнійно-септичні захворювання в хірургії
        </h2>
        <div
          className={`${styles.servicesGrid} ${cardsPerRow === 3 ? styles.threePerRow : styles.fourPerRow}`}
        >
          {pyosepticServices.map((service) => (
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
                    width={400}
                    height={300}
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
}
