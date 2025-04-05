'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './SoftTissueSurgery.module.css';

interface SoftTissueSurgeryProps {
  backgroundColor?: string;
}

const SoftTissueSurgery: React.FC<SoftTissueSurgeryProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Операції на м&apos;яких тканинах</h2>

        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              М&apos;які тканини тіла — це жирова, сполучна, м&apos;язова
              тканина, а також шкіра, підшкірна клітковина, фасції. Саме ці
              структури найчастіше піддаються впливу травм, інфекцій або
              новоутворень. Патології м&apos;яких тканин є важливою частиною
              загальної хірургії, оскільки часто супроводжуються болем,
              запаленням, деформацією та порушенням функцій, що суттєво знижує
              якість життя пацієнтів.
            </p>
            <p className={styles.paragraph}>
              Особливу увагу заслуговують{' '}
              <strong>доброякісні новоутворення</strong> м&apos;яких тканин
              (ліпоми, атероми, фіброми, гігроми тощо), які, попри свою
              неагресивну природу, можуть досягати значних розмірів, викликати
              дискомфорт або косметичні дефекти. У багатьох випадках такі
              утворення потребують хірургічного видалення — як з лікувальною,
              так і з естетичною метою.
            </p>
            <p className={styles.paragraph}>
              Їхні захворювання часто залишаються непоміченими на ранніх етапах,
              однак можуть викликати значний дискомфорт, порушення функцій і
              навіть призводити до серйозних ускладнень.
            </p>
            <p className={styles.paragraph}>
              Хірургія м&apos;яких тканин — важливий напрямок загальної
              хірургії, який дозволяє ефективно лікувати патології, що знижують
              якість життя пацієнта.
            </p>

            <p className={styles.paragraph}>
              Наша мета — своєчасна діагностика, індивідуальний підхід та
              безпечне оперативне втручання з максимальним збереженням функцій і
              зовнішнього вигляду.
            </p>

            <h3 className={styles.sectionTitle}>
              До доброякісних новоутворення м&apos;яких тканин
            </h3>

            <ul className={styles.bulletList}>
              <li>
                <strong>Ліпома</strong> — жировик, м&apos;яке утворення під
                шкірою;
              </li>
              <li>
                <strong>Атерома</strong> — кіста сальної залози, може
                запалюватися;
              </li>
              <li>
                <strong>Фіброма</strong> — щільне утворення зі сполучної
                тканини;
              </li>
              <li>
                <strong>Гігрома</strong> — кіста, що утворюється поблизу
                суглобів або сухожиль;
              </li>
              <li>
                <strong>Папілома, невус (родимка)</strong> — доброякісні
                утворення шкіри.
              </li>
            </ul>

            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                <span className={styles.infoIcon}>👉</span> Усі ці пухлини є
                доброякісними, однак можуть викликати:
              </p>
              <ul className={styles.infoList}>
                <li>косметичні незручності;</li>
                <li>дискомфорт або біль при зростанні;</li>
                <li>запалення або інфікування;</li>
                <li>сумніви в доброякісному характері.</li>
              </ul>
            </div>

            <div className={styles.treatmentBox}>
              <p className={styles.treatmentTitle}>
                <span className={styles.toolIcon}>🔧</span> Метод лікування:
                хірургічне видалення із дотриманням естетики та мінімізації
                травми.
              </p>
            </div>

            <h3 className={styles.sectionTitle}>
              Травматичні ушкодження м&apos;яких тканин
            </h3>
            <ul className={styles.bulletList}>
              <li>Різані, рвані, колоті рани</li>
              <li>Укуси</li>
              <li>Гематоми після травм</li>
              <li>Опіки та відмороження</li>
            </ul>

            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                <span className={styles.infoIcon}>👉</span> У складних випадках
                — накладання швів, видалення нежиттєздатних тканин, пластика
                шкіри.
              </p>
            </div>

            <h3 className={styles.sectionTitle}>
              Кісти, гігроми, післятравматичні ущільнення та здавлення
              переферичних нервів
            </h3>
            <ul className={styles.bulletList}>
              <li>
                Зазвичай розташовані біля суглобів, сухожилків або в підшкірній
                клітковині.
              </li>
              <li>Часто викликають біль при русі або зростають із часом.</li>
              <li>Потребують планового хірургічного видалення.</li>
            </ul>

            <div className={styles.approachBox}>
              <p className={styles.approachTitle}>
                <span className={styles.stethoscopeIcon}>🩺</span> Наш підхід
              </p>
              <ul className={styles.approachList}>
                <li>Індивідуальний підбір методу втручання</li>
                <li>Використання сучасного обладнання</li>
                <li>Естетичний результат — без грубих рубців</li>
                <li>Стерильність та безпека на всіх етапах</li>
              </ul>
            </div>

            <div className={styles.conclusionBox}>
              <p className={styles.conclusion}>
                <span className={styles.pinIcon}>📌</span> Збереження цілісності
                та функціональності м&apos;яких тканин є ключовим у кожному
                випадку. Ми піклуємося не лише про результат операції, а й про
                комфорт та якість життя наших пацієнтів після неї.
              </p>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/softTissueSurgery/lipoma.jpg"
                alt="Ліпома"
                width={300}
                height={400}
                className={styles.image}
              />
              <p className={styles.imageCaption}>Ліпома</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/softTissueSurgery/ateroma.jpg"
                alt="Атерома"
                width={300}
                height={300}
                className={styles.image}
              />
              <p className={styles.imageCaption}>Атерома</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/softTissueSurgery/fibromaa.jpg"
                alt="Фіброма"
                width={300}
                height={300}
                className={styles.image}
              />
              <p className={styles.imageCaption}>Фіброма</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/softTissueSurgery/gigroma.jpg"
                alt="Гігрома"
                width={300}
                height={300}
                className={styles.image}
              />
              <p className={styles.imageCaption}>Гігрома</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/softTissueSurgery/papiloma.jpg"
                alt="Папілома"
                width={300}
                height={300}
                className={styles.image}
              />
              <p className={styles.imageCaption}>Папілома</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/softTissueSurgery/rana.jpg"
                alt="Рана"
                width={300}
                height={300}
                className={styles.image}
              />
              <p className={styles.imageCaption}>Рана</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/softTissueSurgery/dog.jpg"
                alt="Укус"
                width={300}
                height={300}
                className={styles.image}
              />
              <p className={styles.imageCaption}>Укус</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftTissueSurgery;
