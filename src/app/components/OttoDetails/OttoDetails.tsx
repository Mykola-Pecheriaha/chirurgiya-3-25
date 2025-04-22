import type React from 'react';
import styles from './OttoDetails.module.css';
import OttoGalleryIndication from './OttoGalleryIndication';

interface OttoDetailsProps {
  backgroundColor?: string;
}

const OttoDetails: React.FC<OttoDetailsProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Масив зображень для першої галереї
  const indicationsGalleryImages = [
    {
      src: '/images/ottodetails/ottoDetails3.jpg',
      width: 500,
      height: 700,
      title: 'Корекція клаповухості - приклад 1',
    },
    {
      src: '/images/ottodetails/ottoDetails4.jpg',
      width: 500,
      height: 500,
      title: 'Корекція клаповухості - приклад 2',
    },
    {
      src: '/images/ottodetails/ottoDetails5.jpg',
      width: 500,
      height: 500,
      title: 'Результат отопластики - корекція деформації вуха',
    },
    {
      src: '/images/ottodetails/ottoDetails1.jpg',
      width: 500,
      height: 500,
      title: 'Результат отопластики - корекці дольки вуха',
    },
    {
      src: '/images/ottodetails/ottoDetails2.jpg',
      width: 700,
      height: 500,
      title: 'Результат отопластики - корекція розриву дольки вуха',
    },
  ];

  // Масив зображень для другої галереї
  const contraindicationsGalleryImages = [
    {
      src: '/images/ottodetails/abdomino125-24.jpg',
      width: 500,
      height: 500,
      title: 'Консультація перед отопластикою',
    },
  ];

  return (
    <div className={styles.ottoDetails} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>👂 Показання до пластики вух</h2>

        <div className={styles.fullWidthText}>
          <p>
            Отопластика — це не лише шлях до гармонійного зовнішнього вигляду, а
            й спосіб усунути фізіологічні або вроджені особливості, що можуть
            спричиняти дискомфорт.
          </p>
        </div>

        <div className={styles.splitSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.subTitle}>
              🔹 Основні причини для звернення до хірурга:
            </h3>
            <ul className={styles.bulletList}>
              <li>
                <span className={styles.emoji}>👶</span> Вроджена клаповухість
                (з одного або обох боків);
              </li>
              <li>
                <span className={styles.emoji}>🎧</span> Інші деформації вушної
                раковини, що мають вроджене походження;
              </li>
              <li>
                <span className={styles.emoji}>📐</span> Надмірне прилягання
                вушної раковини до голови, яке порушує симетрію обличчя;
              </li>
              <li>
                <span className={styles.emoji}>🔁</span> Повторна корекція, якщо
                попередня операція не дала бажаного результату;
              </li>
              <li>
                <span className={styles.emoji}>💎</span> Корекція мочки вуха —
                наприклад, при її розриві або деформації.
              </li>
            </ul>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.galleryColumn}>
            <OttoGalleryIndication images={indicationsGalleryImages} />
          </div>
        </div>

        <div className={styles.centerTitle}>
          <h3 className={styles.subTitle}>🚫 Протипоказання до отопластики</h3>
        </div>

        <div className={styles.fullWidthText}>
          <p>
            Попри доволі легкий характер втручання, операція на вушних раковинах
            має певні обмеження.
          </p>
        </div>

        <div className={styles.splitSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.subTitle}>
              ⚠️ Операція не рекомендована, якщо:
            </h3>
            <ul className={styles.bulletList}>
              <li>
                <span className={styles.emoji}>🧒</span> Дитині ще не
                виповнилося 6 років;
              </li>
              <li>
                <span className={styles.emoji}>🍬</span> Є тяжка форма цукрового
                діабету;
              </li>
              <li>
                <span className={styles.emoji}>🩸</span> Спостерігаються
                порушення згортання крові;
              </li>
              <li>
                <span className={styles.emoji}>🧬</span> Діагностовано
                онкологічне захворювання;
              </li>
              <li>
                <span className={styles.emoji}>🌡️</span> Є захворювання шкіри в
                зоні втручання;
              </li>
              <li>
                <span className={styles.emoji}>🤒</span> Присутні гострі
                інфекційні або вірусні стани;
              </li>
              <li>
                <span className={styles.emoji}>🤰</span> Жінка перебуває у
                періоді вагітності чи лактації.
              </li>
            </ul>
            <p className={styles.note}>
              <span className={styles.emoji}>💡</span> Зверніть увагу: частина
              протипоказань є тимчасовими. Наприклад, після перенесеної інфекції
              операцію можна провести вже після повного відновлення.
            </p>
          </div>
          <div className={styles.galleryColumn}>
            <OttoGalleryIndication images={contraindicationsGalleryImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OttoDetails;
