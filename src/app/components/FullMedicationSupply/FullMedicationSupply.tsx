import type React from 'react';
import Image from 'next/image';
import styles from './FullMedicationSupply.module.css';

interface FullMedicationSupplyProps {
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const FullMedicationSupply: React.FC<FullMedicationSupplyProps> = ({
  backgroundColor = '#f0f7ff',
  imageUrl = '/images/fullMedicationSupply/medicament1.bmp',
  imageAlt = 'Медикаментозне забезпечення',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Тому що у нас повне медикаментозне забезпечення
        </h2>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.text}>
              Ми забезпечуємо повний спектр необхідних медикаментів для
              безпечного та ефективного лікування. Контроль якості та своєчасне
              забезпечення — наш пріоритет.
            </p>
          </div>

          <div className={styles.imageSection}>
            <Image
              src={imageUrl || '/placeholder.svg'}
              alt={imageAlt}
              width={600}
              height={400}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMedicationSupply;
