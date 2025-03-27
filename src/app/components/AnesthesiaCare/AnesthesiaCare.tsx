import type React from 'react';
import Image from 'next/image';
import styles from './AnesthesiaCare.module.css';

interface AnesthesiaCareProps {
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const AnesthesiaCare: React.FC<AnesthesiaCareProps> = ({
  backgroundColor = '#f5f8fc',
  imageUrl = '/images/modernEquipment/medicfmtnt2.bmp',
  imageAlt = 'Наркозне забезпечення',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          У нас сучасне і лагідне наркозне забезпечення
        </h2>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.text}>
              Сучасні методи анестезії забезпечують максимальний комфорт і
              безпеку для пацієнта. Ми використовуємо найкращі технології для
              мякого та контрольованого знеболення.
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

export default AnesthesiaCare;
