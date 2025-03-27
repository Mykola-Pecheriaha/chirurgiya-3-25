import type React from 'react';
import Image from 'next/image';
import styles from './ModernEquipment.module.css';

interface ModernEquipmentProps {
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ModernEquipment: React.FC<ModernEquipmentProps> = ({
  backgroundColor = '#f9f9f9',
  imageUrl = '/images/modernEquipment/equipment.bmp',
  imageAlt = 'Сучасне медичне обладнання',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>У нас сучасне обладнання</h2>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.text}>
              Сучасне обладнання — запорука точності та безпеки. Ми
              використовуємо передові технології, щоб забезпечити найкращі
              результати лікування та комфорт для наших пацієнтів.
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

export default ModernEquipment;
