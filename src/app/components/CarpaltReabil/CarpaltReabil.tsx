'use client';

import type React from 'react';
import styles from './CarpaltReabil.module.css';
import CarpalReabilGallery from './CarpalReabilGallery';
import CarpalResultGallery from './CarpalResultGallery';
import Link from 'next/link';

interface CarpaltReabilProps {
  backgroundColor?: string;
}

const CarpaltReabil: React.FC<CarpaltReabilProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        {/* Перший сегмент - Відновлення після операції */}
        <div className={styles.segment}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h2 className={styles.segmentTitle}>
                Відновлення після операції
              </h2>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>
                  🔹 Одразу після втручання вам порекомендують:
                </h3>
                <ul className={styles.bulletList}>
                  <li>Піднімати руку вище рівня серця, щоб зменшити набряк.</li>
                  <li>Рухати пальцями, щоб запобігти скутості суглобів.</li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>
                  Що очікувати після операції:
                </h3>
                <ul className={styles.bulletList}>
                  <li>
                    Легкий або помірний біль, набряк і скутість — це нормальні
                    реакції.
                  </li>
                  <li>
                    Біль у долоні може зберігатися від кількох тижнів до кількох
                    місяців.
                  </li>
                  <li>
                    Сила стискання та щипання зазвичай відновлюється через 2–3
                    місяці, але в складніших випадках — до 6–12 місяців.
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>Додаткові рекомендації:</h3>
                <ul className={styles.bulletList}>
                  <li>
                    Можливо, доведеться носити шину або бандаж упродовж кількох
                    тижнів.
                  </li>
                  <li>
                    Вам буде дозволено виконувати легкі повсякденні дії досить
                    швидко — у терміни, узгоджені з вашим лікарем.
                  </li>
                </ul>
              </div>

              <p className={styles.conclusion}>
                Терпіння та регулярне спостереження допоможуть вам повернутися
                до звичного ритму життя максимально комфортно та безпечно.
              </p>
            </div>

            <div className={styles.galleryContainer}>
              <CarpalReabilGallery />
            </div>
          </div>
        </div>

        {/* Розділювач між сегментами */}
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
        </div>

        {/* Другий сегмент - Результати лікування */}
        <div className={styles.segment}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h2 className={styles.segmentTitle}>✅ Результати лікування</h2>

              <p className={styles.introText}>
                🔹 У більшості пацієнтів після хірургічного втручання
                спостерігається суттєве покращення симптомів синдрому
                зап'ястного каналу.
              </p>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>⏳ Важливо пам'ятати:</h3>
                <ul className={styles.bulletList}>
                  <li>
                    Повне одужання може бути поступовим і тривати до 1 року.
                  </li>
                  <li>
                    Якщо біль і слабкість не зникають протягом 2 місяців, лікар
                    може направити вас до терапевта кисті для пришвидшення
                    відновлення.
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>
                  Фактори, що можуть уповільнити одужання:
                </h3>
                <ul className={styles.bulletList}>
                  <li>Важкий або занедбаний синдром зап'ястного каналу.</li>
                  <li>
                    Супутні захворювання: артрит, тендиніт або інші проблеми, що
                    викликають біль і скутість у руці чи зап'ясті.
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.subTitle}>
                  Рецидив синдрому — рідкісний, але можливий.
                </h3>
                <p>
                  У таких випадках може знадобитися додаткове лікування або
                  повторне хірургічне втручання.
                </p>
              </div>
            </div>

            <div className={styles.galleryContainer}>
              <CarpalResultGallery />
            </div>
          </div>
        </div>

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам
            детальну консультацію.
          </p>
          <Link href="/about-doctor/contacts">
            <button className={styles.contactButton}>
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarpaltReabil;
