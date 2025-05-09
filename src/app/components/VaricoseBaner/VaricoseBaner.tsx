import Image from 'next/image';
import styles from './VaricoseBaner.module.css';

// Визначаємо типи для пропсів
interface VaricoseBanerProps {
  backgroundColor?: string;
}

export function VaricoseBaner({
  backgroundColor = '#f8f9fa',
}: VaricoseBanerProps) {
  return (
    <div className={styles.banerContainer} style={{ backgroundColor }}>
      <div className={styles.contentContainer}>
        {/* Заголовок вгорі по центру */}
        <h2 className={styles.mainTitle}>Варикозна хвороба</h2>

        {/* Верхня секція з двома колонками */}
        <div className={styles.topSection}>
          {/* Ліва колонка з текстом */}
          <div className={styles.leftContent}>
            <h3 className={styles.title}>Варикоз</h3>
            <p className={styles.subtitle}>Розпізнання і фахове лікування</p>

            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                Зникає венозна сітка та вузли
              </li>
              <li className={styles.benefitItem}>
                Ноги — без болю, набряків і втоми
              </li>
              <li className={styles.benefitItem}>
                Відновлюється легкість та естетика
              </li>
            </ul>
          </div>

          {/* Права колонка із зображенням */}
          <div className={styles.rightContent}>
            <Image
              src="/images/varicose/varicos-removebg-preview.png"
              alt="Варикозне розширення вен"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        {/* Нижня секція на всю ширину */}
        <div className={styles.bottomSection}>
          <h3 className={styles.warningTitle}>
            Варикоз вен нижніх кінцівок — не просто косметичний дефект
          </h3>

          <p className={styles.warningText}>
            Це підступне захворювання, яке часто роками розвивається без явних
            симптомів. Але зволікання з лікуванням може мати серйозні наслідки:
          </p>

          <ul className={styles.complicationsList}>
            <li className={styles.complicationItem}>Тромбофлебіт</li>
            <li className={styles.complicationItem}>Трофічні виразки</li>
            <li className={styles.complicationItem}>
              Розрив варикозних вузлів
            </li>
            <li className={styles.dangerItem}>
              Найнебезпечніше — тромбоз глибоких вен, який може призвести до
              тромбоемболії легеневої артерії і навіть смерті
            </li>
          </ul>

          <p className={styles.callToAction}>Варикоз потрібно лікувати!</p>

          <p className={styles.conclusion}>
            Чим раніше ви звернетеся — тим{' '}
            <span className={styles.highlight}>легше, швидше й безпечніше</span>{' '}
            буде позбутися хвороби.
          </p>
        </div>
      </div>
    </div>
  );
}
