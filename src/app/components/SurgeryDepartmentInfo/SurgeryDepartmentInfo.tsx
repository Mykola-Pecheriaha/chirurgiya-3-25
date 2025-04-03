import type React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import { galleryImages } from '@/data/gallery-images';
import styles from './SurgeryDepartmentInfo.module.css';

interface SurgeryDepartmentInfoProps {
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  accentColor?: string;
}

const SurgeryDepartmentInfo: React.FC<SurgeryDepartmentInfoProps> = ({
  backgroundColor = '#f8f9fa',
  textColor = '#333333',
  headingColor = '#1eaaf1',
  accentColor = '#7b68ee',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title} style={{ color: headingColor }}>
          Чому обирають нас?
        </h2>

        <div className={styles.content} style={{ color: textColor }}>
          <p className={styles.paragraph}>
            Хірургічне відділення поєднує сучасні методи лікування з
            багаторічним досвідом, накопиченим за понад 130 років. Ми цінуємо
            традиції, але водночас усвідомлюємо, що медицина постійно
            розвивається. Саме тому впроваджуємо передові технології та
            вдосконалюємо свої навички, щоб забезпечити максимально ефективну
            допомогу пацієнтам.
          </p>
          <p className={styles.paragraph}>
            Завдяки оновленому хірургічному відділенню ми створюємо комфортні
            умови для лікування, використовуючи новітнє медичне обладнання. Ми
            розуміємо, що здоровя – найвища цінність, а тому пропонуємо
            індивідуальний підхід до кожного пацієнта.
          </p>

          <div className={styles.benefitsSection}>
            <h3
              className={styles.benefitsTitle}
              style={{ color: headingColor }}
            >
              Обирайте нас, якщо вам потрібно:
            </h3>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span
                  className={styles.checkmark}
                  style={{ color: accentColor }}
                >
                  ✓
                </span>
                Планове або невідкладне хірургічне втручання
              </li>
              <li className={styles.benefitItem}>
                <span
                  className={styles.checkmark}
                  style={{ color: accentColor }}
                >
                  ✓
                </span>
                Консультація досвідченого фахівця
              </li>
              <li className={styles.benefitItem}>
                <span
                  className={styles.checkmark}
                  style={{ color: accentColor }}
                >
                  ✓
                </span>
                Отримання другої думки щодо діагнозу чи призначеного лікування
              </li>
              <li className={styles.benefitItem}>
                <span
                  className={styles.checkmark}
                  style={{ color: accentColor }}
                >
                  ✓
                </span>
                Розгорнута інформація про хід лікування та реабілітацію
              </li>
              <li className={styles.benefitItem}>
                <span
                  className={styles.checkmark}
                  style={{ color: accentColor }}
                >
                  ✓
                </span>
                Ознайомлення з новітніми методиками лікування та сучасними
                препаратами
              </li>
              <li className={styles.benefitItem}>
                <span
                  className={styles.checkmark}
                  style={{ color: accentColor }}
                >
                  ✓
                </span>
                Професійні рекомендації перед операцією
              </li>
            </ul>
          </div>

          <div className={styles.conclusion}>
            <span className={styles.sparkle} style={{ color: accentColor }}>
              ✨
            </span>{' '}
            Ми тут, щоб подбати про ваше здоровя!
          </div>
        </div>

        <div className={styles.gallerySection}>
          <ImageGallery images={galleryImages} />
        </div>
      </div>
    </div>
  );
};

export default SurgeryDepartmentInfo;
