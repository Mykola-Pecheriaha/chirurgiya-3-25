'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './SpleenSurgery.module.css';

interface SpleenSurgeryProps {
  backgroundColor?: string;
}

const SpleenSurgery: React.FC<SpleenSurgeryProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Масив зображень для правої колонки
  const images = [
    {
      url: '/images/spleenSurgery/spleen4.jpg',
      alt: 'Селезінка',
    },
    {
      url: '/images/spleenSurgery/spleen8.jpg',
      alt: 'Спленомегалія',
    },
    {
      url: '/images/spleenSurgery/spleen7.jpg',
      alt: 'Спленектомія лапаратомна',
    },
    {
      url: '/images/spleenSurgery/spleen3.jpg',
      alt: 'Спленектомія лапаоскопічна',
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Операції при захворюванні селезінки</h2>

        <div className={styles.introText}>
          <p>
            Селезінка - це орган над вашим животом і під ребрами з вашого лівого
            боку. Селезінка є частиною вашого{' '}
            <a href="#" className={styles.link}>
              лімфатична система
            </a>
            , який бореться з інфекцією та підтримує баланс рідин у вашому тілі.
            Вона містить лейкоцити, які борються з мікробами. Селезінка також
            допомагає контролювати кількість крові у вашому тілі та руйнує старі
            та пошкоджені клітини.
          </p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <p>Певні захворювання можуть спричинити набряк селезінки.</p>
            <p>
              Збільшення селезінки може бути спричинено різноманітними
              факторами, які впливають на її функціонування та структуру. Ось
              основні причини, які викликають цей стан:
            </p>

            <ul className={styles.bulletList}>
              <li>інфекційні захворювання</li>
              <li>хронічні захворювання печінки</li>
              <li>онкологічні процеси</li>
              <li>порушення кровообігу</li>
              <li>травми</li>
              <li>захворювання крові</li>
              <li>аутоімунні стани</li>
              <li>метаболічні порушення</li>
            </ul>

            <p>
              Ці фактори впливають на селезінку по-різному, але всі вони
              підкреслюють важливість вчасної діагностики для встановлення
              точного джерела проблеми.
            </p>

            <p>
              Виявлення збільшення селезінки (спленомегалії) потребує
              комплексного обстеження, спрямованого на визначення її причин.
              Основні методи діагностики передбачають:
            </p>

            <ul className={styles.bulletList}>
              <li>фізичне обстеження</li>
              <li>лабораторні дослідження</li>
              <li>ультразвукове дослідження (УЗД)</li>
              <li>
                компʼютерна томографія (КТ) або магнітно-резонансна томографія
                (МРТ)радіоізотопне сканування – дає змогу оцінити функціональну
                активність селезінки, зокрема у складних клінічних випадках;
              </li>
              <li>
                біопсія – застосовується рідко, головним чином при підозрі на
                пухлинний процес або системні захворювання;
              </li>
              <li>
                кістковомозкова пункція – дозволяє оцінити стан кровотворної
                системи, особливо при підозрі на захворювання крові.
              </li>
            </ul>

            <p>
              Діагностика спленомегалії включає поєднання фізичних, лабораторних
              та інструментальних методів. Такий підхід дозволяє виявити причини
              патології та розробити індивідуальний план лікування.
            </p>

            <h3 className={styles.sectionTitle}>Лікування</h3>
            <p>
              Лікування спленомегалії залежить від причини, яка спричинила
              патологію, тому основний акцент робиться на усуненні основного
              захворювання.
            </p>

            <p>
              <strong>Хірургічне лікування:</strong> спленектомія (видалення
              селезінки) виконується при загрозі розриву органу, значному
              збільшенні, яке заважає роботі сусідніх органів, або при
              онкологічних захворюваннях.
            </p>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.stickyImagesContainer}>
              {images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <Image
                    src={image.url || '/placeholder.svg'}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                  <p className={styles.imageCaption}>{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpleenSurgery;
