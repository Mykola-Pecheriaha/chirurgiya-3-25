'use client';
import styles from './LaparoscopicCholecystectomy.module.css';
import { LaparoscopicGallery } from './LaparoscopicGallery';

interface LaparoscopicCholecystectomyProps {
  backgroundColor?: string;
}

export function LaparoscopicCholecystectomy({
  backgroundColor = '#f8f9fa',
}: LaparoscopicCholecystectomyProps) {
  return (
    <section
      className={styles.cholecystectomySection}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>📌 Лапароскопічна холецистектомія</h2>

        <div className={styles.contentBlock}>
          <p className={styles.text}>
            <span className={styles.emoji}>💡</span> Лапароскопічна
            холецистектомія — еталон хірургічного лікування захворювань жовчного
            міхура
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🔹</span> Лапароскопія
            (холецистектомія) — це малоінвазивне хірургічне втручання, яке
            передбачає видалення жовчного міхура через 3–4 невеликих отвори в
            черевній порожнині.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🔧</span> Операція виконується за
            допомогою спеціального ендоскопічного інструмента — лапароскопа,
            мікроінструментів та відеокамери.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>⚖️</span> У порівнянні з відкритою
            операцією, лапароскопія є менш травматичною та швидшою у
            відновленні.
          </p>
        </div>

        <div className={styles.indicationsBlock}>
          <h3 className={styles.subTitle}>
            <span className={styles.emoji}>🩺</span> Показання до
            лапароскопічної холецистектомії:
          </h3>
          <ul className={styles.checkList}>
            <li>
              <span className={styles.emoji}>✅</span> Симптомна жовчнокам'яна
              хвороба
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Деякі випадки
              безсимптомної жовчнокам'яної хвороби
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Гострий холецистит
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Холедохолітіаз
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Поліпоз жовчного міхура
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Холестероз
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Функціональні розлади
              жовчного
            </li>
          </ul>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                <span className={styles.emoji}>🛌</span> Анестезія та
                підготовка:
              </h3>
              <p className={styles.text}>
                <span className={styles.emoji}>💉</span> Операція проводиться
                під загальним знеболенням, тому вимагає ретельної
                передопераційної підготовки.
              </p>
              <p className={styles.text}>
                <span className={styles.emoji}>⚠️</span> Не рекомендується
                виконувати лапароскопію при:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🚫</span> Термінальних станах
                </li>
                <li>
                  <span className={styles.emoji}>🚫</span> Порушеннях згортання
                  крові
                </li>
                <li>
                  <span className={styles.emoji}>🚫</span> Декомпенсованих
                  хворобах життєво важливих органів
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                <span className={styles.emoji}>📋</span> Необхідні аналізи перед
                операцією:
              </h3>
              <p className={styles.text}>
                <span className={styles.emoji}>🧪</span> Лапароскопічна
                холецистектомія вимагає оцінки таких показників:
              </p>
              <ol className={styles.numberedList}>
                <li>
                  <span className={styles.emoji}>🩸</span> Група крові та
                  резус-фактор
                </li>
                <li>
                  <span className={styles.emoji}>🧫</span> Аналіз крові на
                  гепатит С, ВІЛ, сифіліс
                </li>
                <li>
                  <span className={styles.emoji}>💉</span> Загальний аналіз
                  крові та сечі
                </li>
                <li>
                  <span className={styles.emoji}>🍬</span> Глюкоза крові
                </li>
                <li>
                  <span className={styles.emoji}>🧬</span> Біохімічний аналіз
                  крові
                </li>
                <li>
                  <span className={styles.emoji}>🧾</span> Коагулограма
                </li>
                <li>
                  <span className={styles.emoji}>❤️</span> ЕКГ, огляд терапевта
                  та анестезіолога
                </li>
                <li>
                  <span className={styles.emoji}>🖥️</span> ФОГК, УЗД, ФГДС
                </li>
              </ol>
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <LaparoscopicGallery />
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>
            <span className={styles.emoji}>📝</span> Додаткові рекомендації:
          </h3>
          <p className={styles.text}>
            <span className={styles.emoji}>🥗</span>{' '}
            <strong>Обмежене харчування напередодні операції:</strong>
            <br />
            Останній прийом їжі — не пізніше 19:00
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🚿</span>{' '}
            <strong>Очисна клізма:</strong>
            <br />
            Рекомендується увечері перед операцією та за 1–1,5 години до неї
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>💊</span> <strong>Ліки:</strong>
            <br />
            Якщо ви приймаєте будь-які препарати — обов'язково узгодьте це з
            хірургом. Можливо, деякі з них потрібно буде скасувати за кілька
            днів до операції або в день втручання.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LaparoscopicCholecystectomy;
