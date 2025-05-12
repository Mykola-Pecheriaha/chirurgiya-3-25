'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import styles from './OperModernEquipment.module.css';
import { OperModernGallery } from './OperModernGallery';

interface OperModernEquipmentProps {
  backgroundColor?: string;
}

export function OperModernEquipment({
  backgroundColor = '#f8f9fa',
}: OperModernEquipmentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textContentRef = useRef<HTMLDivElement>(null);
  const [showExpandButton, setShowExpandButton] = useState(true);

  useEffect(() => {
    // Перевіряємо, чи потрібна кнопка "розгорнути"
    if (textContentRef.current) {
      const { scrollHeight, clientHeight } = textContentRef.current;
      setShowExpandButton(scrollHeight > clientHeight);
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={styles.container}
      style={
        {
          backgroundColor,
          '--bg-color': backgroundColor,
        } as React.CSSProperties
      }
    >
      <h2 className={styles.title}>Сучасне обладнання — вимога №2</h2>

      <div className={styles.contentContainer}>
        <div className={styles.textColumn}>
          <div
            ref={textContentRef}
            className={`${styles.textContent} ${isExpanded ? styles.textContentExpanded : styles.textContentCollapsed}`}
          >
            <div className={styles.bulletPoint}>
              <span className={styles.bulletIcon}>🔹</span>
              <p className={styles.bulletText}>
                У нашій операційній використовуються{' '}
                <span className={styles.highlight}>
                  сучасні хірургічні системи та обладнання нового покоління
                </span>
                , які забезпечують{' '}
                <span className={styles.highlight}>
                  високу точність, мінімальну травматичність
                </span>{' '}
                та <span className={styles.highlight}>максимальну безпеку</span>{' '}
                для пацієнта.
              </p>
            </div>

            <div className={styles.bulletPoint}>
              <span className={styles.bulletIcon}>🔹</span>
              <p className={styles.bulletText}>
                Завдяки інноваційним технологіям ми маємо змогу проводити
                операції з найвищим рівнем контролю, а також ефективно
                відстежувати всі важливі показники пацієнта під час і після
                втручання.
              </p>
            </div>

            <div className={styles.bulletPoint}>
              <span className={styles.bulletIcon}>🔹</span>
              <p className={styles.bulletText}>
                Постійне оновлення технічної бази та регулярне обслуговування
                обладнання — це запорука{' '}
                <span className={styles.highlight}>
                  успішного результату кожного хірургічного втручання
                </span>
                .
              </p>
            </div>

            <div
              className={`${styles.fadeOverlay} ${isExpanded ? styles.fadeOverlayHidden : ''}`}
            ></div>
          </div>

          {showExpandButton && (
            <button className={styles.expandButton} onClick={toggleExpand}>
              {isExpanded ? 'Згорнути' : 'Розгорнути'}
              <span>{isExpanded ? '▲' : '▼'}</span>
            </button>
          )}
        </div>

        <div className={styles.galleryColumn}>
          <OperModernGallery />
        </div>
      </div>
    </div>
  );
}

export default OperModernEquipment;
