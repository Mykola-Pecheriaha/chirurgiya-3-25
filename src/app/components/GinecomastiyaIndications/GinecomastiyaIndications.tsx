'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import styles from './GinecomastiyaIndications.module.css';
import GalleryGinecomastiyaIndications, {
  type ImageType,
} from './GalleryGinecomastiyaIndications';

interface GinecomastiyaIndicationsProps {
  backgroundColor?: string;
}

const GinecomastiyaIndications: React.FC<GinecomastiyaIndicationsProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Зображення для першої галереї з розмірами
  const galleryImages1: ImageType[] = [
    {
      src: '/images/GinecomastiyaIndications/ginecomas6.jpg',
      width: 600,
      height: 600,
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas8.jpg',
      width: 600,
      height: 830,
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas7.jpg',
      width: 600,
      height: 850,
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas10.jpg',
      width: 600,
      height: 600,
    },
  ];

  // Зображення для другої галереї з розмірами
  const galleryImages2: ImageType[] = [
    {
      src: '/images/GinecomastiyaIndications/ginecomas9.jpg',
      width: 600,
      height: 700,
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas10.jpg',
      width: 600,
      height: 600,
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas11.jpg',
      width: 600,
      height: 600,
    },
  ];

  // Зображення для третьої галереї з розмірами
  const galleryImages3: ImageType[] = [
    {
      src: '/images/GinecomastiyaContraindications/Contraindicatio2.jpg',
      width: 600,
      height: 700,
    },
  ];

  // Перевірка доступності зображень
  const [safeImages1, setSafeImages1] = useState<ImageType[]>(galleryImages1);
  const [safeImages2, setSafeImages2] = useState<ImageType[]>(galleryImages2);
  const [safeImages3, setSafeImages3] = useState<ImageType[]>(galleryImages3);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImagesLoaded = async (images: ImageType[]) => {
      return await Promise.all(
        images.map(async (img) => {
          try {
            const response = await fetch(img.src, { method: 'HEAD' });
            if (response.ok) {
              return img;
            } else {
              return {
                src: `/placeholder.svg?height=${img.height}&width=${img.width}&query=medical image`,
                width: img.width,
                height: img.height,
              };
            }
          } catch (error) {
            return {
              src: `/placeholder.svg?height=${img.height}&width=${img.width}&query=medical image`,
              width: img.width,
              height: img.height,
            };
          }
        })
      );
    };

    const loadAllImages = async () => {
      const checked1 = await checkImagesLoaded(galleryImages1);
      const checked2 = await checkImagesLoaded(galleryImages2);
      const checked3 = await checkImagesLoaded(galleryImages3);

      setSafeImages1(checked1);
      setSafeImages2(checked2);
      setSafeImages3(checked3);
    };

    loadAllImages();
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Лікування гінекомастії: показання до операції
        </h2>

        {/* Перша секція: дві колонки з текстом і галереєю */}
        <div className={styles.twoColumns}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              Гінекомастія — це стан, який характеризується збільшенням молочних
              залоз у чоловіків. Існують два основних типи цієї патології:{' '}
              <strong>істинна</strong> та <strong>хибна</strong>{' '}
              (псевдогінекомастія).
            </p>
            <p className={styles.indication}>
              <span className={styles.bullet}>🔹</span>{' '}
              <strong>Істинна гінекомастія</strong> виникає внаслідок
              гормональних збоїв, що можуть бути спричинені захворюваннями або
              прийомом гормональних препаратів, зокрема стероїдів. Це
              підтверджено низкою міжнародних досліджень. Часто такий тип
              гінекомастії спостерігається у підлітків під час періоду
              гормональної перебудови. У цих випадках зазвичай рекомендоване
              медикаментозне лікування. У менш ніж 10% випадків подібні зміни
              зустрічаються у чоловіків у зрілому віці.
            </p>
            <p className={styles.indication}>
              <span className={styles.bullet}>🔹</span>{' '}
              <strong>Хибна гінекомастія</strong> є результатом надмірної ваги
              або ожиріння. У цьому випадку збільшення грудей зумовлене
              накопиченням жирової тканини, а не змінами у гормональному фоні.
            </p>
          </div>

          <div className={styles.galleryColumn}>
            <GalleryGinecomastiyaIndications
              images={safeImages1}
              galleryId="ginecomastiya-indications-gallery-1"
              initialZoom={0.75}
            />
          </div>
        </div>

        {/* Додатковий текстовий блок на всю ширину */}
        <div className={styles.fullWidthText}>
          <p>
            Найчастіше патологія спостерігається з двох сторін, однак, у деяких
            випадках, може уражатися і одна сторона. Це не лише косметичний
            недолік, в окремих випадках один із симптомів серйозних порушень у
            роботі організму. Отже, необхідно пройти комплексне обстеження, щоб
            визначити природу хвороби.
          </p>
        </div>

        {/* Заголовок для другої секції */}
        <h3 className={styles.subtitle}>
          Операція гінекомастія у чоловіків показана у таких випадках:
        </h3>

        {/* Друга секція: дві колонки зі списком і галереєю */}
        <div className={styles.twoColumns}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              Оперативне втручання при гінекомастії у чоловіків рекомендоване у
              таких випадках:
            </p>
            <ul className={styles.indicationsList}>
              <li>
                симетричне або асиметричне збільшення грудей, що виходить за
                межі норми;
              </li>
              <li>виділення із соска при натисканні;</li>
              <li>наявність ущільнень або відчутної твердості в тканинах;</li>
              <li>біль під час дотику чи пальпації;</li>
              <li>
                відчуття тяжкості, дискомфорту чи естетичне незадоволення
                виглядом грудей.
              </li>
            </ul>
          </div>

          <div className={styles.galleryColumn}>
            <GalleryGinecomastiyaIndications
              images={safeImages2}
              galleryId="ginecomastiya-indications-gallery-2"
              initialZoom={0.75}
            />
          </div>
        </div>

        {/* Ще один текстовий блок на всю ширину */}
        <div className={styles.fullWidthText}>
          <p>
            Гінекомастія — не лише медична проблема, а й емоційна. Її ефективне
            хірургічне лікування дозволяє не просто усунути фізичний дефект, а й
            суттєво покращити якість життя, повернути впевненість у собі та
            власній привабливості.
          </p>
        </div>

        {/* Заголовок для третьої секції */}
        <h3 className={styles.subtitle}>Протипокази</h3>

        {/* Текстовий блок на всю ширину */}
        <div className={styles.fullWidthText}>
          <p>
            Гінекомастія лікування хірургічним шляхом показане пацієнтам не
            завжди. Є низка протипоказань, яких рекомендовано дотримуватися:
          </p>
        </div>

        {/* Третя секція: дві колонки з текстом і галереєю */}
        <div className={styles.twoColumns}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              <strong>Медичні протипоказання до проведення операції:</strong>
            </p>
            <ul className={styles.indicationsList}>
              <li>
                Серцева недостатність та інші серйозні захворювання
                серцево-судинної системи
              </li>
              <li>Хронічні патології печінки та нирок</li>
              <li>
                Цукровий діабет, надмірна вага або ожиріння високого ступеня
              </li>
              <li>Порушення згортання крові</li>
              <li>Онкологічні захворювання</li>
            </ul>
          </div>

          <div className={styles.galleryColumn}>
            <GalleryGinecomastiyaIndications
              images={safeImages3}
              galleryId="ginecomastiya-indications-gallery-3"
              initialZoom={0.75}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GinecomastiyaIndications;
