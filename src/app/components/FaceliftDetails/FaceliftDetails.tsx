'use client';

import type React from 'react';
import { useEffect, useState, useRef } from 'react';
import GalleryFaceliftDetails from './GalleryFaceliftDetails';
import styles from './FaceliftDetails.module.css';

interface ImageItem {
  src: string;
  width?: number;
  height?: number;
}

interface FaceliftDetailsProps {
  backgroundColor?: string;
}

const FaceliftDetails: React.FC<FaceliftDetailsProps> = ({
  backgroundColor = '#f8f4ff',
}) => {
  const initialRenderRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  const indicationsImages: ImageItem[] = [
    {
      src: '/images/FaceliftDetails/faceliftDetalis1.jpg',
      width: 500,
      height: 400,
    },

    {
      src: '/images/FaceliftDetails/faceliftDetalis15.jpg',
      width: 500,
      height: 400,
    },

    {
      src: '/images/FaceliftDetails/faceliftDetalis9.jpg',
      width: 500,
      height: 400,
    },
    {
      src: '/images/FaceliftDetails/faceliftDetalis19.jpg',
      width: 500,
      height: 650,
    },
    {
      src: '/images/FaceliftDetails/faceliftDetalis26.jpg',
      width: 500,
      height: 400,
    },
  ];

  const contraindicationsImages: ImageItem[] = [
    {
      src: '/images/FaceliftDetails/abdomino125-24.jpg',
      width: 400,
      height: 400,
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
        <h2 className={styles.title}>
          Покази та протипокази до операції підтяжки обличчя та шиї
        </h2>

        <div className={styles.section}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>
              <span className={styles.emoji}>🧑‍⚕️</span> Показання до фейсліфтингу
            </h3>
            <ul className={styles.list}>
              <li>помітному опущенні зовнішніх куточків очей;</li>
              <li>провисанні м'яких тканин шкіри в районі лоба та брів;</li>
              <li>появі глибоких зморшок в області щік;</li>
              <li>появі «брилів», провисанні м'яких тканин щік;</li>
              <li>появі другого підборіддя;</li>
              <li>формуванні складок та зморшок в області шиї;</li>
              <li>втраті тонусу шийнопідборідного кута.</li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            {isClient && (
              <GalleryFaceliftDetails
                images={indicationsImages}
                galleryId="indications-gallery"
              />
            )}
          </div>
        </div>

        <div className={styles.fullWidthText}>
          <p>
            <span className={styles.emoji}>🩺</span>{' '}
            <strong>Корекція овалу обличчя</strong> рекомендується пацієнтам
            після <strong>45 років</strong> за наявності відповідних показань.
            До цього віку пластичну операцію можна замінити безопераційними
            методиками.
          </p>
          <p>
            <strong>Контурна пластика обличчя</strong> — ін'єкційна процедура з
            використанням філерів на основі гіалуронової кислоти, які заповнюють
            зморшки й складки, створюючи підтягнутий овал.
          </p>
          <p>
            Також ефективний <strong>ліпофілінг</strong> — омолодження власною
            жировою тканиною.
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>
              <span className={styles.emoji}>⚠️</span> Протипоказання
            </h3>
            <ul className={styles.list}>
              <li>онкологічні захворювання;</li>
              <li>серцево-судинні патології та захворювання;</li>
              <li>ендокринологічні захворювання на стадії загострення;</li>
              <li>захворювання та інфекційні ураження шкіри;</li>
              <li>вагітність та лактація;</li>
              <li>алергічні реакції;</li>
              <li>психічні розлади.</li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            {isClient && (
              <GalleryFaceliftDetails
                images={contraindicationsImages}
                galleryId="contraindications-gallery"
              />
            )}
          </div>
        </div>

        <div className={styles.fullWidthText}>
          <p>
            <span className={styles.emoji}>🧑‍⚕️</span>{' '}
            <strong>Рішення про хірургічне втручання</strong> приймає спеціаліст
            на основі стану здоров'я пацієнта та клінічних досліджень.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaceliftDetails;
