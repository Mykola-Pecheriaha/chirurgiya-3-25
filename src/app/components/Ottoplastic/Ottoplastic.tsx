import type React from 'react';
import Image from 'next/image';
import styles from './Ottoplastic.module.css';
import { GalleryIndication } from '../PlasticSurgery/GalleryIndication';

interface OttoplasticProps {
  backgroundColor?: string;
}

export const Ottoplastic: React.FC<OttoplasticProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Масив зображень для галереї з розмірами та назвами
  const galleryImages = [
    {
      src: '/images/ottoplastic/otto6.jpg',
      width: 700,
      height: 600,
      title: 'До і після отопластики - приклад 1',
    },
    {
      src: '/images/ottoplastic/otto5.jpg',
      width: 700,
      height: 1000,
      title: 'До і після отопластики - приклад 2',
    },
    {
      src: '/images/ottoplastic/otto7.jpg',
      width: 700,
      height: 1000,
      title: 'До і після отопластики - приклад 3',
    },
    {
      src: '/images/ottoplastic/otto3.jpg',
      width: 700,
      height: 1000,
      title: 'До і після отопластики - приклад 4',
    },
  ];

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        {/* Верхня секція - дві колонки */}
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>
              👂 Отопластика — корекція клаповухості
            </h2>
            <div className={styles.advantages}>
              <p className={styles.advantagesTitle}>🔹 Основні переваги:</p>
              <ul className={styles.advantagesList}>
                <li>✔️ Бажана форма та розмір вушних раковин</li>
                <li>✔️ Виправлення асиметрії</li>
                <li>✔️ Без гематом і помітних рубців</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/ottoplastic/otto2-removebg-preview.png"
                alt="Отопластика - корекція клаповухості"
                width={500}
                height={400}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        {/* Середня секція - на всю ширину */}
        <div className={styles.middleSection}>
          <p className={styles.description}>
            Отопластика — це популярна пластична операція, що дозволяє ефективно
            скоригувати:
          </p>
          <ul className={styles.descriptionList}>
            <li>асиметрію вушних раковин</li>
            <li>клаповухість</li>
            <li>надмірну відстовбурченість вух</li>
          </ul>
          <p className={styles.additionalInfo}>
            Операція виконується як для <strong>дорослих</strong>, так і для{' '}
            <strong>дітей</strong>, за медичними чи естетичними показаннями.
          </p>
        </div>

        {/* Нижня секція - дві колонки */}
        <div className={styles.bottomSection}>
          <div className={styles.leftColumn}>
            <div className={styles.results}>
              <p className={styles.resultsTitle}>🌟 Результат отопластики:</p>
              <ul className={styles.resultsList}>
                <li>усунення фізичних вад</li>
                <li>гармонізація рис обличчя</li>
                <li>підвищення впевненості в собі</li>
                <li>позбавлення психологічного дискомфорту</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <GalleryIndication images={galleryImages} initialZoom={75} />
          </div>
        </div>

        {/* Остання секція - на всю ширину */}
        <div className={styles.factSection}>
          <p className={styles.factTitle}>🔍 Цікаво знати:</p>
          <p className={styles.factText}>
            Клаповухість — одна з найпоширеніших вушних деформацій. За
            статистикою, вона зустрічається у <strong>близько 5% людей</strong>.
            І хоча це не загрожує здоров'ю, така особливість часто стає{' '}
            <strong>причиною заниженої самооцінки</strong>, особливо в
            підлітковому віці.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ottoplastic;
