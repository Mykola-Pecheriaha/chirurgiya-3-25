'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './IntestineSurgery.module.css';

interface IntestineSurgeryProps {
  backgroundColor?: string;
}

const IntestineSurgery: React.FC<IntestineSurgeryProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Масив зображень для правої колонки
  const images = [
    {
      url: '/placeholder.svg?height=300&width=400&text=Кишківник',
      alt: 'Кишківник',
    },
    {
      url: '/placeholder.svg?height=300&width=400&text=Хірургічне+втручання',
      alt: 'Хірургічне втручання',
    },
    {
      url: '/placeholder.svg?height=300&width=400&text=Реабілітація',
      alt: 'Реабілітація',
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Операції при захворюванні кишкивника</h2>

        <div className={styles.introText}>
          <p>
            Кишківник – це життєво важливий орган травної системи, який
            поділяється на <strong>тонкий</strong> і <strong>товстий</strong>{' '}
            кишківник, кожен із яких виконує свої унікальні функції.
          </p>
          <p className={styles.markerPoint}>
            <span className={styles.blueMarker}>🔹</span>{' '}
            <strong>Тонкий кишківник</strong> відповідає за основний процес
            травлення їжі та всмоктування поживних речовин, необхідних для
            життєдіяльності організму.
          </p>
          <p className={styles.markerPoint}>
            <span className={styles.blueMarker}>🔹</span>{' '}
            <strong>Товстий кишківник</strong> забезпечує всмоктування води,
            розщеплення клітковини за допомогою мікрофлори, а також формування
            та виведення калових мас.
          </p>
          <p>
            Хвороби кишківника можуть бути дуже різноманітними, проте в цьому
            розділі ми зосередимося лише на тих станах, які{' '}
            <strong>вимагають хірургічного втручання</strong>. Успішне лікування
            таких патологій залежить не тільки від своєчасної операції, але й
            від правильного відновлення функції кишківника, зокрема{' '}
            <strong>збереження його прохідності</strong> та забезпечення
            нормального пасажу кишкового вмісту.
          </p>
          <p>
            Хірургія кишківника спрямована не лише на усунення патології, а й на{' '}
            <strong>
              максимальне збереження функціональної спроможності органу
            </strong>
            , що є ключовим для якості життя пацієнта.
          </p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <p>
              <strong>
                Ось список основних захворювань тонкого, які потребують
                хірургічного лікування:
              </strong>
            </p>
            <p className={styles.listTitle}>
              1. Захворювання тонкого кишечника:
            </p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Гостра кишкова непрохідність</strong> (спайкова,
                обтураційна, странгуляційна)
              </li>
              <li>
                <strong>Перфорація тонкого кишечника</strong> (наприклад, при
                виразках або травмах)
              </li>
              <li>
                <strong>Некротизуючий ентероколіт</strong>
              </li>
              <li>
                <strong>Хвороба Крона</strong> (при ускладненнях, таких як
                стриктури чи свищі)
              </li>
              <li>
                <strong>Мезентеріальний тромбоз</strong> (ішемія кишечника)
              </li>
              <li>
                <strong>Дивертикули тонкої кишки</strong> (перфорація,
                кровотеча)
              </li>
              <li>
                <strong>Гострий апендицит</strong>
              </li>
              <li>
                <strong>Пухлини тонкого кишечника</strong> (доброякісні та
                злоякісні)
              </li>
              <li>
                <strong>Травми тонкої кишки</strong> (відкрита та закрита травма
                живота)
              </li>
            </ul>

            <p>
              З них Гострі ургентні стани (вимагають термінової операції) - ми
              розглядаємо в розділі ургентої хірургії, але їх перелік такий
            </p>

            <p className={styles.listTitle}>Тонкий кишечник:</p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Гостра кишкова непрохідність</strong> (спайкова,
                обтураційна, странгуляційна)
              </li>
              <li>
                <strong>Перфорація тонкого кишечника</strong> (наприклад, при
                виразках або травмах)
              </li>
              <li>
                <strong>Некротизуючий ентероколіт</strong>
              </li>
              <li>
                <strong>Мезентеріальний тромбоз</strong> (ішемія кишечника)
              </li>
              <li>
                <strong>Гострий апендицит</strong>
              </li>
              <li>
                <strong>Травми тонкої кишки</strong> (відкриті та закриті
                ушкодження)
              </li>
            </ul>

            <p>До планових хірургічних втручань відносяться такі звороби</p>

            <p className={styles.listTitle}>Тонкий кишечник:</p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Хвороба Крона</strong> (при хронічних стриктурах або
                свищах)
              </li>
              <li>
                <strong>Доброякісні пухлини тонкого кишечника</strong>
              </li>
              <li>
                <strong>Поліпи тонкої кишки</strong> (при ризику малігнізації)
              </li>
              <li>
                <strong>Дивертикули тонкої кишки</strong> (без гострих
                ускладнень)
              </li>
            </ul>

            <p>
              Можна ще виділити категорію{' '}
              <strong className={styles.highlight}>
                Умовно ургентні стани
              </strong>{' '}
              — це ситуації, коли пацієнта можна підготувати до операції
              впродовж кількох днів, але зволікати не можна (наприклад,
              непрохідність пухлинного характеру).
            </p>

            <p>
              Ось основні методики хірургічних втручань при захворюваннях
              тонкого кишечника, поділені на ургентні (термінові) та планові
              операції.
            </p>

            <h3 className={styles.sectionTitle}>
              Ургентні операції (термінові втручання)
            </h3>
            <p className={styles.listTitle}>Тонкий кишечник:</p>
            <ol className={styles.numberedList}>
              <li>
                <strong>Резекція тонкого кишечника з анастомозом</strong> – при
                некрозі кишки (ішемія, тромбоз, травми).
              </li>
              <li>
                <strong>Ентеротомія з видаленням стороннього тіла</strong> – при
                кишковій непрохідності через стороннє тіло.
              </li>
              <li>
                <strong>Декомпресія кишечника</strong> – при гострій кишковій
                непрохідності (наприклад, через інтубацію тонкої кишки).
              </li>
              <li>
                <strong>
                  Ентеростомія (виведення кишки на передню черевну стінку)
                </strong>{' '}
                – при перитоніті або тяжкій кишковій непрохідності.
              </li>
              <li>
                <strong>Геміколектомія (правобічна чи лівобічна)</strong> – при
                обширному некрозі або онкологічному ураженні.
              </li>
              <li>
                <strong>Судинна реконструкція мезентеріальних артерій</strong> –
                при мезентеріальному тромбозі.
              </li>
            </ol>

            <h3 className={styles.sectionTitle}>
              Планові операції (відкладені, але необхідні втручання)
            </h3>
            <p className={styles.listTitle}>Тонкий кишечник:</p>
            <ol className={styles.numberedList}>
              <li>
                <strong>Лапароскопічна резекція тонкої кишки</strong> – при
                хворобі Крона або доброякісних пухлинах.
              </li>
              <li>
                <strong>Ентеропластика</strong> – відновлення прохідності
                кишечника при стриктурах.
              </li>
              <li>
                <strong>Відновлення кишкової безперервності</strong> – після
                тимчасової ентеростомії.
              </li>
              <li>
                <strong>Лапароскопічна видалення поліпів тонкої кишки</strong>.
              </li>
            </ol>
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

export default IntestineSurgery;
