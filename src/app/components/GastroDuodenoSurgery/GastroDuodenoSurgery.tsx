'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './GastroDuodenoSurgery.module.css';

interface GastroDuodenoSurgeryProps {
  backgroundColor?: string;
}

const GastroDuodenoSurgery: React.FC<GastroDuodenoSurgeryProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Операції при виразці шлунка і ДПК</h2>

        <p className={styles.introText}>
          Від часу запровадження до лікування інгибіторів протонної помпи (так
          звана хімічна ваготомія) та ерадикації (видалення) H. pylori значно
          зменшилась роль хірургічного лікування.{' '}
          <strong>
            {' '}
            <br />
            Хірургічне лікування не ліквідує ризик рецидиву виразки
          </strong>
          <br></br>також у оперованих хворих з часом розвиваються <u />
          різні ускладнення
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.sectionTitle}>
              Покази до хірургічного лікування виразки шлунку та дванадцятипалої
              кишки
            </h3>

            <h4 className={styles.subTitle}>
              Операції при виразці шлунка та дванадцятипалої кишки
            </h4>
            <p className={styles.paragraph}>
              Виразка шлунка з ускладненим перебігом зазвичай лікується
              хірургічним шляхом. Перевага віддається органозберігаючим
              втручанням.
            </p>

            <h4 className={styles.subTitle}>
              Операції при виразці шлунка показані при:
            </h4>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>перфорації;</li>
              <li className={styles.bulletItem}>
                профузних кровотечах, які не можуть усуватися консервативно або
                за допомогою ендоскопічних методів;
              </li>
              <li className={styles.bulletItem}>
                відсутності ефекту медикаментозної терапії.
              </li>
            </ul>

            <p className={styles.paragraph}>
              <strong>Ургентні операції</strong> <br></br> проводять по житеєвим
              показам і в ургентному порядку
            </p>

            <p className={styles.paragraph}>
              <strong>При</strong>
            </p>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                декомпенсованому рубцово-виразковому стенозі воротаря та ДПК;
              </li>
              <li className={styles.bulletItem}>
                Пенетрації виразки в суміжні органи
              </li>
            </ul>

            <p className={styles.paragraph}>
              Операці проводять в <strong>плановому порядку</strong>. <br></br>
              Метод хірургічного лікування визначається клінічним випадком після
              <a href="#" className={styles.link}>
                {' '}
                консультації хірурга
              </a>{' '}
              з ретельною діагностикою та оцінки потенційних користі та ризиків.
            </p>

            <p className={styles.paragraph}>
              Після операції <strong>проводиться курс реабілітації.</strong>
            </p>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imagesContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gastro-duodeno/dpksurgery3.jpg"
                  alt="Операція при виразці шлунка"
                  width={300}
                  height={250}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>Проривна виразка ДПК</p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gastro-duodeno/dpksurgery4.jpg"
                  alt="Ендоскопічне дослідження"
                  width={300}
                  height={250}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>Проривна виразка шлунку</p>
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gastro-duodeno/dpksurgery2.jpg"
                  alt="Операція при виразці шлунка"
                  width={300}
                  height={250}
                  className={styles.image}
                />
                <p className={styles.imageCaption}>
                  Операція при виразці шлунка
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GastroDuodenoSurgery;
