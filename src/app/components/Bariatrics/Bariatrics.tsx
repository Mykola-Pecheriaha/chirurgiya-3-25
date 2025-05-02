'use client';
import styles from './Bariatrics.module.css';
import Image from 'next/image';
import { BariatricsGallery } from './BariatricsGallery';

interface BariatricsProps {
  backgroundColor?: string;
}

export function Bariatrics({ backgroundColor = '#f8f9fa' }: BariatricsProps) {
  return (
    <section className={styles.bariatricsSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Перша секція: дві колонки */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h2 className={styles.mainTitle}>Баріатрія.</h2>
            <div className={styles.benefitsList}>
              <p className={styles.introText}>Баріатрія — це...</p>
              <ul className={styles.bulletList}>
                <li>Стійкий результат</li>
                <li>Зменшення апетиту</li>
                <li>Поліпшення самопочуття</li>
                <li>Зниження ризику діабету, гіпертонії</li>
                <li>Повернення до активності</li>
              </ul>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/bariatrics/bariatrics2-removebg-preview.png"
                alt="Баріатрична хірургія"
                width={600}
                height={400}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        {/* Друга секція: повна ширина */}
        <div className={styles.fullWidthSection}>
          <p className={styles.descriptionText}>
            Баріатрія — це хірургічне лікування{' '}
            <span className={styles.highlight}>ожиріння</span>, коли дієти та
            спорт <span className={styles.highlight}>не допомагають</span>. Вона
            заключається в зменшенні обʼєму шлунку або виключенні певної частини
            ШКТ з процесу травлення. Внаслідок цього людина починає споживати
            менше їжі, отже знижується кількість кілокалорій та відбувається
            зменшення маси тіла
          </p>
        </div>

        {/* Третя секція: дві колонки */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.subTitle}>
              Види баріатричних операцій, що проводяться в нашій клініці
            </h3>
            <ul className={styles.proceduresList}>
              <li>рукавну резекцію (sleeve-резекцію);</li>
              <li>мінігастрошунтування (Mini Gastric Bypass);</li>
              <li>гастрошунтування;</li>
              <li>операцію Sadi (біліопанкреатичне шунтування);</li>
              <li>установку внутрішньошлункового балона.</li>
            </ul>
          </div>
          <div className={styles.galleryColumn}>
            <BariatricsGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bariatrics;
