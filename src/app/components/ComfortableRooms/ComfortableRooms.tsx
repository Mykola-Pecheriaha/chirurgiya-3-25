import type React from 'react';
import Image from 'next/image';
import styles from './ComfortableRooms.module.css';

interface ComfortableRoomsProps {
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ComfortableRooms: React.FC<ComfortableRoomsProps> = ({
  backgroundColor = '#f5f8fc',
  imageUrl = '/images/comfortableRooms/terapі3.jpg',
  imageAlt = 'Комфортні палати',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>У нас комфортні палати</h2>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.text}>
              Комфортні та затишні палати створені для вашого спокою і швидкого
              відновлення. Сучасний дизайн, зручні умови та уважний персонал –
              все для вашого комфорту.
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

export default ComfortableRooms;
