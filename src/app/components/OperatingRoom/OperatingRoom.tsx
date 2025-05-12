import Image from 'next/image';
import styles from './OperatingRoom.module.css';

interface OperatingRoomProps {
  backgroundColor?: string;
}

export function OperatingRoom({
  backgroundColor = '#f8f9fa',
}: OperatingRoomProps) {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>Операційний блок</h2>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>®</span> Сучасний ремонт
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>®</span> Сучасне
                обладнання
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>®</span> Строгий
                інфекційний контроль
              </li>
            </ul>
          </div>
          <div className={styles.rightContent}>
            <Image
              src="/images/operating-room/26і-removebg-preview.png"
              alt="Операційний блок"
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.highlight}>
            Головна перевага нашої клініки та доповнення рук хірурга – сучасний,
            якісно оснащений операційний блок.
          </p>
          <p className={styles.description}>
            Операційний блок нашої клініки — це сучасно оснащене приміщення, яке
            відповідає всім сучасним медичним та санітарним вимогам. Він
            обладнаний передовою апаратурою, що забезпечує високий рівень
            безпеки, стерильності та комфорту під час проведення операцій
            будь-якої складності.
          </p>
        </div>
      </div>
    </div>
  );
}
