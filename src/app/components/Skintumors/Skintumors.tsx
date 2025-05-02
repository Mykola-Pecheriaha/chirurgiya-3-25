'use client';
import styles from './Skintumors.module.css';
import Image from 'next/image';

interface SkintumorsProps {
  backgroundColor?: string;
}

export function Skintumors({ backgroundColor = '#f8f9fa' }: SkintumorsProps) {
  return (
    <section className={styles.skintumorsSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Перша секція: дві колонки */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h2 className={styles.mainTitle}>
              Доброякісні пухлини м'ягких тканей тулуба та кінцівок.
            </h2>
            <div className={styles.benefitsList}>
              <p className={styles.introText}>Доброякісні новоутворення ...</p>
              <ul className={styles.bulletList}>
                <li>новоутворення не проростає в сусідні тканини</li>
                <li>клітинні елементи не поширюються за межі пухлини</li>
                <li>формуються по принципу капсули</li>
                <li>повільно зростає</li>
                <li>збільшується рівномірно</li>
              </ul>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/skintumors/resultbreast5-removebg-preview.png"
                alt="Доброякісні пухлини м'ягких тканей"
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
            Доброякісні утворення не становлять загрози для життя, проте іноді
            під впливом негативних чинників можуть перероджуватись у злоякісні
            пухлини.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skintumors;
