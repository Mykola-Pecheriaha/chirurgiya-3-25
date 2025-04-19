'use client';

import type React from 'react';

import { useState, useEffect, useRef } from 'react';
import styles from './FaceLiftPreparation.module.css';
import GalleryFaceLiftPreparation from './GalleryFaceLiftPreparation';

interface ImageItem {
  src: string;
  width: number;
  height: number;
}

interface FaceLiftPreparationProps {
  backgroundColor?: string;
}

const FaceLiftPreparation: React.FC<FaceLiftPreparationProps> = ({
  backgroundColor = '#f8f4ff',
}) => {
  const initialRenderRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  // Масиви зображень з розмірами
  const preparationImages: ImageItem[] = [
    {
      src: '/images/FaceLiftPreparation/analiz3.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/preparatio4.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/life.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/preparatio5.jpg',
      width: 800,
      height: 600,
    },
  ];

  const operationImages: ImageItem[] = [
    {
      src: '/images/FaceLiftPreparation/operatio6.jpg',
      width: 600,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/operatio3.jpg',
      width: 600,
      height: 500,
    },
    {
      src: '/images/FaceLiftPreparation/operatio2.jpg',
      width: 600,
      height: 500,
    },
    {
      src: '/images/FaceLiftPreparation/preparatio8.jpg',
      width: 600,
      height: 500,
    },
  ];

  const recoveryImages: ImageItem[] = [
    {
      src: '/images/FaceLiftPreparation/reabilit3.jpg',
      width: 600,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/reabilit4.jpg',
      width: 600,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/reabilit5.jpg',
      width: 500,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/reabilit6.jpg',
      width: 600,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/reabilit7.jpg',
      width: 600,
      height: 600,
    },
    {
      src: '/images/FaceLiftPreparation/reabilit2.jpg',
      width: 600,
      height: 600,
    },
  ];

  // Перевірка, чи код виконується на клієнті
  useEffect(() => {
    if (initialRenderRef.current) {
      setIsClient(true);
      initialRenderRef.current = false;
    }
  }, []);

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Підготовка до фейсліфтингу</h2>

        {/* Секція підготовки */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <h3>📋 Етап підготовки</h3>
          </div>

          <div className={styles.sectionContent}>
            <div className={styles.textContent}>
              <p>
                Підготовка до фейсліфтингу — важливий етап, який забезпечує
                безпеку та ефективність процедури. Перед операцією необхідно:
              </p>
              <ul className={styles.bulletList}>
                <li>Пройти комплексне медичне обстеження</li>
                <li>Здати аналізи крові та сечі</li>
                <li>Пройти консультацію анестезіолога</li>
                <li>
                  Припинити прийом препаратів, що розріджують кров, за 2 тижні
                  до операції
                </li>
                <li>
                  Відмовитися від куріння та алкоголю за 2 тижні до процедури
                </li>
                <li>
                  Підготувати шкіру обличчя за допомогою спеціальних засобів
                </li>
              </ul>
            </div>
            <div className={styles.galleryContent}>
              {isClient && (
                <GalleryFaceLiftPreparation
                  images={preparationImages}
                  galleryId="preparation-gallery"
                />
              )}
            </div>
          </div>
        </section>

        <div className={styles.fullWidthText}>
          <p>
            <strong>Важливо!</strong> Дотримання всіх рекомендацій лікаря на
            етапі підготовки значно знижує ризик ускладнень та покращує
            результат операції. Пацієнт отримує детальні інструкції щодо
            підготовки під час консультації з хірургом.
          </p>
        </div>

        {/* Секція операції */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <h3>🔪 Проведення операції</h3>
          </div>

          <div className={styles.sectionContent}>
            <div className={styles.textContent}>
              <p>
                Операція фейсліфтингу проводиться під загальним наркозом або
                місцевою анестезією з седацією. Процедура включає:
              </p>
              <ul className={styles.bulletList}>
                <li>Розріз вздовж лінії росту волосся та навколо вуха</li>
                <li>Відшарування шкіри та підтяжку підшкірних тканин</li>
                <li>Видалення надлишків шкіри</li>
                <li>Накладання косметичних швів</li>
              </ul>
              <p>
                Тривалість операції становить 2-4 години залежно від обсягу
                втручання. Сучасні методики дозволяють мінімізувати
                травматичність та забезпечити природний результат.
              </p>
            </div>
            <div className={styles.galleryContent}>
              {isClient && (
                <GalleryFaceLiftPreparation
                  images={operationImages}
                  galleryId="operation-gallery"
                />
              )}
            </div>
          </div>
        </section>

        <div className={styles.fullWidthText}>
          <p>
            Фейсліфтинг — це хірургічне втручання, яке вимагає високої
            кваліфікації хірурга. Операція проводиться в стерильних умовах з
            використанням сучасного обладнання та матеріалів. Пацієнт перебуває
            під постійним наглядом медичного персоналу.
          </p>
        </div>

        {/* Секція реабілітації */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <h3>🧠 Реабілітаційний період</h3>
          </div>

          <div className={styles.sectionContent}>
            <div className={styles.textContent}>
              <p>
                Реабілітація після фейсліфтингу — важливий етап, який впливає на
                кінцевий результат. Відновлювальний період включає:
              </p>
              <ul className={styles.bulletList}>
                <li>Перебування в стаціонарі протягом 1-2 днів</li>
                <li>Носіння компресійної пов'язки протягом 7-10 днів</li>
                <li>Зняття швів через 7-14 днів</li>
                <li>Обмеження фізичних навантажень протягом 3-4 тижнів</li>
                <li>Уникнення сонячних променів протягом 2-3 місяців</li>
                <li>Регулярні огляди у хірурга</li>
              </ul>
              <p>
                Повне відновлення займає 3-6 місяців, але вже через 2-3 тижні
                пацієнт може повернутися до звичного способу життя.
              </p>
            </div>
            <div className={styles.galleryContent}>
              {isClient && (
                <GalleryFaceLiftPreparation
                  images={recoveryImages}
                  galleryId="recovery-gallery"
                />
              )}
            </div>
          </div>
        </section>

        <div className={styles.fullWidthText}>
          <p>
            Результат фейсліфтингу зберігається протягом 7-10 років. Для
            підтримання ефекту рекомендується дотримуватися здорового способу
            життя, правильно доглядати за шкірою та регулярно відвідувати
            косметолога.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaceLiftPreparation;
