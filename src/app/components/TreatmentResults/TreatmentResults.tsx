// components/TreatmentResults/TreatmentResults.tsx
import React from 'react';
import BeforeAfterSlider from '@/app/components/BeforeAfterSlider';
import styles from './TreatmentResults.module.css';

interface TreatmentResultsProps {
  backgroundColor?: string;
}

const TreatmentResults: React.FC<TreatmentResultsProps> = ({
  backgroundColor = '#ffffff',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Результати лікування</h2>

        <div className={styles.content}>
          <h3 className={styles.sectionTitle}>Лікування варикозу</h3>
          <p className={styles.description}>
            Малоінвазивні методи лікування варикозу дозволяють досягти відмінних
            результатів без великих розрізів та тривалого періоду відновлення.
            Перетягніть повзунок, щоб побачити результати до і після процедури.
          </p>

          <BeforeAfterSlider
            beforeImage="/images/results/varicos3.jpg"
            afterImage="/images/results/varicos4.jpg"
            beforeAlt="Варикоз до лікування"
            afterAlt="Результат після лікування варикозу"
            height={550}
          />

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Лікування варикозу</h3>
            <p className={styles.description}>Також лікування варикозу</p>

            <BeforeAfterSlider
              beforeImage="/images/results/varicos5.jpg"
              afterImage="/images/results/varicos6.jpg"
              beforeAlt="Традиційна холецистектомія"
              afterAlt="Лапароскопічна холецистектомія"
              height={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentResults;
