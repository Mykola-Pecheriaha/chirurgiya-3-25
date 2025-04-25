'use client';

import type { FC } from 'react';
import styles from './GerniotomiyaIndicatio.module.css';
import IndicatioGallery from './IndicatioGallery';

interface GerniotomiyaIndicatioProps {
  backgroundColor?: string;
}

const GerniotomiyaIndicatio: FC<GerniotomiyaIndicatioProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Масив зображень для першої галереї (покази)
  const indicationsImages = [
    {
      src: '/images/gerniotomiyaIndicatio/gerniyaDetalis28.jpg',
      alt: 'Показання до операції грижесічення',
      width: 800,
      height: 600,
      title: 'Показання до операції грижесічення',
    },
    {
      src: '/images/gerniotomiyaIndicatio/gerniyaDetalis26.jpg',
      alt: 'Ознаки защемленої грижі',
      width: 800,
      height: 600,
      title: 'Ознаки защемленої грижі',
    },
    {
      src: '/images/gerniotomiyaIndicatio/gerniyaDetalis27.jpg',
      alt: 'Планова операція грижесічення',
      width: 800,
      height: 600,
      title: 'Планова операція грижесічення',
    },
  ];

  // Масив зображень для другої галереї (протипокази)
  const contraindicationsImages = [
    {
      src: '/images/gerniotomiyaIndicatio/contraindicatio1.jpg',
      alt: 'Хронічні захворювання як протипокази',
      width: 800,
      height: 600,
      title: 'Хронічні захворювання як протипокази',
    },
    {
      src: '/images/gerniotomiyaIndicatio/abdominoPreparation27.jpg',
      alt: 'Протипокази до планової операції',
      width: 800,
      height: 600,
      title: 'Протипокази до планової операції',
    },
    {
      src: '/images/gerniotomiyaIndicatio/gerniyaDetalis29.jpg',
      alt: 'Протипокази до ургентної операції',
      width: 800,
      height: 600,
      title: 'Протипокази до ургентної операції',
    },
    {
      src: '/images/gerniotomiyaIndicatio/gerniyaDetalis30.jpg',
      alt: 'Протипокази до ургентної операції',
      width: 800,
      height: 600,
      title: 'Відмова дієздатного хворого',
    },
  ];

  return (
    <section
      className={styles.gerniotomiyaIndicatio}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          📌 Покази до операції грижесічення (герніотомія)
        </h2>

        {/* Перший сектор - Покази */}
        <div className={styles.sector}>
          <div className={styles.textContent}>
            <p className={styles.mainPoint}>
              🔹 Наявність грижі у хворого — абсолютний показ до операції
            </p>

            <div className={styles.subsection}>
              <h3 className={styles.subtitle}>
                📅 Покази до планової операції
              </h3>
              <p className={styles.point}>
                <span className={styles.checkmark}>✅</span> Наявність грижі є
                показом до планової операції
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subtitle}>
                🚨 Покази до ургентної (невідкладної) операції
              </h3>
              <p className={styles.point}>
                <span className={styles.alert}>❗</span> Наявність защемленої
                грижі
              </p>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subtitle}>⚠️ Ознаки защемленої грижі:</h3>
              <ul className={styles.symptomsList}>
                <li>Грижеве випинання, про яке хворий знає,</li>
                <li>Перестало вправлятись</li>
                <li>Почало дуже боліти</li>
                <li>Біль часто досить сильний</li>
                <li>Стан може супроводжуватися нудотою і блюванням</li>
              </ul>
            </div>
          </div>

          <div className={styles.galleryContainer}>
            <IndicatioGallery images={indicationsImages} />
          </div>
        </div>

        {/* Другий сектор - Протипокази */}
        <div className={styles.sector}>
          <div className={styles.textContent}>
            <h3 className={styles.contraTitle}>
              ❌ Протипокази до операції грижесічення (герніотомія)
            </h3>

            <div className={styles.subsection}>
              <h3 className={styles.subtitle}>
                ⏳ Протипокази до планової операції
              </h3>
              <p className={styles.warning}>
                ⚠️ Усі хронічні захворювання в стадії декомпенсації, зокрема:
              </p>
              <ul className={styles.contraindicationsList}>
                <li>
                  серцева недостатність та інші патології серцево-судинної
                  системи
                </li>
                <li>хронічні захворювання печінки та нирок</li>
                <li>цукровий діабет</li>
                <li>порушення згортання крові</li>
                <li>онкологічні захворювання в термінальних стадіях</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subtitle}>
                🚫 Протипокази до ургентної операції
              </h3>
              <ul className={styles.urgentContraindicationsList}>
                <li>Агонуючий стан хворого</li>
                <li>
                  Категорична відмова дієздатного хворого
                  <br />
                  <span className={styles.note}>
                    з письмовою розпискою у присутності лікарів і родичів
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.galleryContainer}>
            <IndicatioGallery images={contraindicationsImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GerniotomiyaIndicatio;
