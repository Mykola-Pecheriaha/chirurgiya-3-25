import type React from 'react';
import Image from 'next/image';
import styles from './ExpertiseBanner.module.css';

interface ExpertiseBannerProps {
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ExpertiseBanner: React.FC<ExpertiseBannerProps> = ({
  backgroundColor = '#f8f9fa',
  imageUrl = '/images/profession/proff2.bmp',
  imageAlt = 'Команда хірургів',
}) => {
  return (
    <div className={styles.bannerWrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Хірургія, де професіоналізм поєднується з турботою
        </h2>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.text}>
              Відділення хірургії — це поєднання передових технологій і досвіду.
              Наші хірурги — висококваліфіковані фахівці, які дбають про ваше
              здоровя та гарантовано забезпечують найкращий результат.
            </p>
          </div>

          <div className={styles.imageSection}>
            <Image
              src={imageUrl || '/placeholder.svg'}
              alt={imageAlt}
              width={500}
              height={350}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseBanner;
