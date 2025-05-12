'use client';

import { useState } from 'react';
import styles from './OperatingSterility.module.css';
import { OperatingSterilityGallery } from './OperatingSterilityGallery';

interface OperatingSterilityProps {
  backgroundColor?: string;
}

export function OperatingSterility({
  backgroundColor = '#f8f9fa',
}: OperatingSterilityProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ backgroundColor }} className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Стерильність – вимога №1</h2>

        <div className={styles.contentContainer}>
          <div className={styles.textColumn}>
            <div
              className={styles.textContainer}
              style={{ maxHeight: isExpanded ? '2000px' : '150px' }}
            >
              <div className={styles.textContent}>
                <div className={styles.textSection}>
                  <div className={styles.sectionTitle}>
                    <span className={styles.icon}>🔹</span>
                    <span>Операційний блок — зона безпеки та стерильності</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <p>
                      Операційний блок оснащений відповідно до{' '}
                      <span className={styles.highlight}>
                        всіх сучасних стандартів
                      </span>{' '}
                      безпеки та стерильності.
                    </p>
                    <div className={styles.listItem}>
                      Щоденне чітке планування оперативних втручань дозволяє
                      грамотно організувати потоки пацієнтів так, щоб вони{' '}
                      <span className={styles.highlight}>
                        практично не перетиналися між собою
                      </span>
                      .
                    </div>
                    <div className={styles.listItem}>
                      Це є надзвичайно важливою умовою для{' '}
                      <span className={styles.highlight}>
                        високого рівня інфекційного контролю та стерильності
                      </span>
                      .
                    </div>
                  </div>
                </div>

                <div className={styles.textSection}>
                  <div className={styles.sectionTitle}>
                    <span className={`${styles.icon} ${styles.accessIcon}`}>
                      ®
                    </span>
                    <span>Доступ — лише для персоналу</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <div className={styles.listItem}>
                      У доступ до операційної мають{' '}
                      <span className={styles.highlight}>
                        виключно співробітники
                      </span>
                      , які{' '}
                      <span className={styles.highlight}>
                        безпосередньо задіяні
                      </span>{' '}
                      в оперативному процесі: операційна та анестезіологічна
                      бригади.
                    </div>
                    <div className={styles.listItem}>
                      Всі вони перебувають у{' '}
                      <span className={styles.highlight}>
                        спеціальному стерильному одязі
                      </span>
                      , що відповідає чинним вимогам асептики та антисептики.
                    </div>
                  </div>
                </div>

                <div className={styles.textSection}>
                  <div className={styles.sectionTitle}>
                    <span className={`${styles.icon} ${styles.warningIcon}`}>
                      ⚠️
                    </span>
                    <span>У разі ургентних чи септичних втручань</span>
                  </div>
                  <div className={styles.sectionContent}>
                    <div className={styles.listItem}>
                      Для проведення ургентних (невідкладних) та септичних
                      операцій передбачено{' '}
                      <span className={styles.highlight}>
                        окремі операційні зали
                      </span>
                      , які функціонують автономно від асептичного операційного
                      блоку.
                    </div>
                    <div className={styles.listItem}>
                      Такий підхід гарантує{' '}
                      <span className={styles.highlight}>
                        максимально безпечні умови
                      </span>{' '}
                      для планових та пластичних операцій,
                    </div>
                    <div className={styles.listItem}>
                      зводячи до{' '}
                      <span className={styles.highlight}>
                        мінімуму ризики перехресного інфікування
                      </span>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className={styles.expandButton} onClick={toggleExpand}>
              {isExpanded ? 'Згорнути' : 'Розгорнути'}
              <span>{isExpanded ? '▲' : '▼'}</span>
            </button>
          </div>

          <div className={styles.galleryColumn}>
            <OperatingSterilityGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
