'use client';

import { useState } from 'react';
import { OperProfessionalGallery } from './OperProfessionalGallery';
import styles from './OperProfessional.module.css';

interface OperProfessionalProps {
  backgroundColor?: string;
}

export function OperProfessional({
  backgroundColor = '#f8f9fa',
}: OperProfessionalProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Професійна команда — вимога №3</h2>

        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <div
              className={`${styles.textContent} ${isExpanded ? styles.textExpanded : styles.textCollapsed}`}
            >
              <p className={styles.paragraph}>
                <span className={styles.icon}>👥</span>{' '}
                <strong>Професійна команда — вимога №3</strong>
              </p>

              <p className={styles.paragraph}>
                <span className={styles.icon}>✓</span> Успішне проведення
                операції залежить не лише від стерильності та сучасного
                обладнання, а й від{' '}
                <span className={styles.highlight}>
                  злагодженої роботи досвідченої команди
                </span>{' '}
                професіоналів.
              </p>

              <p className={styles.paragraph}>
                <span className={styles.icon}>👨‍⚕️</span> У нашій операційній
                працюють{' '}
                <span className={styles.highlight}>
                  висококваліфіковані хірурги, анестезіологи, операційні сестри
                </span>{' '}
                та інший медичний персонал, які мають{' '}
                <span className={styles.highlight}>багаторічний досвід</span> та
                постійно вдосконалюють свої знання, навчаючись сучасним
                методикам лікування.
              </p>

              <p className={styles.paragraph}>
                <span className={styles.icon}>✓</span> Ми дотримуємось принципу{' '}
                <span className={styles.highlight}>
                  індивідуального підходу до кожного пацієнта
                </span>
                , забезпечуючи{' '}
                <span className={styles.highlight}>максимальний комфорт</span>,
                підтримку та довіру на всіх етапах лікування.
              </p>
            </div>

            {!isExpanded && <div className={styles.fadeOverlay} />}

            <button
              className={styles.expandButton}
              onClick={toggleExpand}
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Згорнути' : 'Розгорнути'}
              <span
                className={`${styles.expandIcon} ${isExpanded ? styles.rotateIcon : ''}`}
              >
                ▼
              </span>
            </button>
          </div>

          <div className={styles.galleryContainer}>
            <OperProfessionalGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
