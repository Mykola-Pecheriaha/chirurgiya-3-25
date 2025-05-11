import Image from 'next/image';
import styles from './Flegmon.module.css';
import { FlegmonGallery } from './FlegmonGallery';

interface FlegmonProps {
  backgroundColor?: string;
}

export function Flegmon({ backgroundColor = '#f8f9fa' }: FlegmonProps) {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        {/* Верхня секція */}
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>Флегмона</h2>
            <p className={styles.subtitle}>Розпізнання і фахове лікування</p>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                Без капсули, і без кордонів
              </li>
              <li className={styles.benefitItem}>Поширюється по тканинах</li>
              <li className={styles.benefitItem}>Часто потребує операції</li>
            </ul>
          </div>
          <div className={styles.rightContent}>
            <Image
              src="/images/flegmon/flegmon-removebg-preview.png"
              alt="Флегмона"
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
        </div>

        {/* Секція на всю ширину */}
        <div className={styles.fullWidthSection}>
          <p className={styles.description}>
            Флегмона — це гострий гнійний процес, який не має чітких меж і
            поширюється по жировій тканині, уражаючи м'язи, фасції та навіть
            внутрішні органи. Її небезпека полягає у стрімкому розвитку та
            високому ризику важких ускладнень.
          </p>
          <h3 className={styles.sectionTitle}>Що викликає флегмону?</h3>
          <ul className={styles.causesList}>
            <li className={styles.causeItem}>
              Найчастіше — бактерії (стрептокок групи А, золотистий стафілокок)
            </li>
            <li className={styles.causeItem}>
              Інфекція проникає через мікротравми: подряпини, укуси, порізи
            </li>
            <li className={styles.causeItem}>
              Можливе ускладнення після стоматологічних процедур
            </li>
            <li className={styles.causeItem}>
              Ризик підвищується при ослабленому імунітеті
            </li>
          </ul>
        </div>

        {/* Розділена секція 2/3 і 1/3 */}
        <div className={styles.splitSection}>
          <div className={styles.splitLeft}>
            <ul className={styles.symptomsList}>
              <li className={styles.symptomItem}>Почервоніння та набряк</li>
              <li className={styles.symptomItem}>
                Місцеве підвищення температури
              </li>
              <li className={styles.symptomItem}>
                Різкий біль у зоні ураження
              </li>
              <li className={styles.symptomItem}>
                Гарячка, слабкість, головний біль
              </li>
              <li className={styles.symptomItem}>Збільшення лімфовузлів</li>
            </ul>
          </div>
          <div className={styles.splitRight}>
            <FlegmonGallery />
          </div>
        </div>

        {/* Нижня секція на всю ширину */}
        <div className={styles.warning}>
          Флегмона шиї, стоп, кистей чи внутрішніх органів — потребує негайної
          медичної допомоги через небезпечну анатомічну локалізацію та швидке
          поширення.
        </div>
      </div>
    </div>
  );
}
