'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './BreastAugmentation.module.css';

interface BreastAugmentationProps {
  backgroundColor?: string;
}

const BreastAugmentation: React.FC<BreastAugmentationProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Збільшення грудей мамопластика</h2>

        <div className={styles.topSection}>
          <div className={styles.textColumn}>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitsItem}>
                <span className={styles.bulletPoint}>•</span>
                <span className={styles.benefitsText}>{"Бажаний об'єм"}</span>
              </li>
              <li className={styles.benefitsItem}>
                <span className={styles.bulletPoint}>•</span>
                <span className={styles.benefitsText}>Ідеальна форма</span>
              </li>
              <li className={styles.benefitsItem}>
                <span className={styles.bulletPoint}>•</span>
                <span className={styles.benefitsText}>Довічний результат</span>
              </li>
            </ul>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/breast-augmentalis/cartca5.jpg"
                alt="Збільшення грудей мамопластика"
                width={500}
                height={600}
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.src =
                    '/placeholder.svg?height=600&width=500&text=Збільшення+грудей';
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.fullWidthSection}>
          <p className={styles.fullWidthText}>
            {
              "Збільшення грудей (мамопластика) – це хірургічна процедура, яка дозволяє досягти бажаного об'єму та форми грудей за допомогою імплантатів. Сучасні технології та матеріали забезпечують природний вигляд і довготривалий результат."
            }
          </p>

          <p className={styles.fullWidthText}>
            {
              'Наші хірурги використовують індивідуальний підхід до кожної пацієнтки, враховуючи її анатомічні особливості, побажання та спосіб життя, щоб досягти найкращого естетичного результату. Процедура збільшення грудей проводиться з використанням найсучасніших імплантатів, які забезпечують природний вигляд і відчуття. Ми гарантуємо безпеку процедури та мінімальний період відновлення.'
            }
          </p>

          <p className={styles.fullWidthText}>
            {
              'Перед операцією проводиться детальна консультація, під час якої хірург разом з пацієнткою обирає оптимальний розмір, форму та тип імплантатів, а також обговорює всі деталі процедури та післяопераційного періоду. Наша мета – не лише покращити зовнішній вигляд, але й підвищити впевненість у собі та якість життя наших пацієнток.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastAugmentation;
