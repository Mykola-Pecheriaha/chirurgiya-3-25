'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './LaparoscopicSurgery.module.css';
import laparoscopicImage from './laparoscopic-surgery.jpg';

interface LaparoscopicSurgeryProps {
  backgroundColor?: string;
}

const LaparoscopicSurgery: React.FC<LaparoscopicSurgeryProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Верхня секція з двома колонками */}
        <div className={styles.topSection}>
          {/* Ліва колонка з текстом */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Лапароскопічна хірургія</h2>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span className={styles.diamond}>🔹</span> Мінімальні розрізи та
                швидке відновлення
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.diamond}>🔹</span> Зменшення болю після
                операції
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.diamond}>🔹</span> Менший ризик
                ускладнень
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.diamond}>🔹</span> Коротший перебування
                в стаціонарі
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.diamond}>🔹</span> Низька ймовірність
                утворення рубців
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.diamond}>🔹</span> Швидке повернення до
                активного життя
              </li>
            </ul>
          </div>

          {/* Права колонка з зображенням */}
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/mininvasiveSurgery/mininvasiveSurgery10.jpg"
                alt="Лапароскопічна хірургія"
                width={500}
                height={350}
                className={styles.surgeryImage}
                priority
              />
            </div>
          </div>
        </div>
        {/* Нижня секція з описом */}

        <div className={styles.bottomSection}>
          <h3 className={styles.subtitlePurple}>👨‍⚕️ Що таке лапароскопія?</h3>
          <p className={styles.description}>
            Лапароскопічна операція — це сучасний малотравматичний метод
            хірургічного лікування, який виконується через невеликі проколи в
            тілі. Через ці проколи вводяться тонкі довгі інструменти та
            мініатюрна телекамера, що дозволяє лікарю бачити все всередині
            організму.
          </p>

          <h4 className={styles.sectionTitle}>
            🔍 Які операції виконуються методом лапароскопії?
          </h4>
          <ul className={styles.operationsList}>
            <li className={styles.operationItem}>
              🫀 Видалення жовчного міхура
            </li>

            <li className={styles.operationItem}>
              🥚 Операції на печінці та селезінці
            </li>
            <li className={styles.operationItem}>🩺 Операції на кишкивнику</li>
            <li className={styles.operationItem}>
              🧷 Лікування гриж та інших патологій
            </li>
          </ul>

          <h4 className={styles.sectionTitle}>💉 Анестезія</h4>
          <p className={styles.description}>
            Процедура виконується під загальним наркозом, що забезпечує комфорт
            пацієнта під час операції.
          </p>

          <h4 className={styles.sectionTitle}>
            🎯 Як проходить видалення органів або тканин?
          </h4>
          <p className={styles.description}>
            Уражені органи або їх частини обережно витягуються через маленький
            косметичний розріз в області пупка.
          </p>

          <h4 className={styles.sectionTitle}>🧵 Шви та відновлення</h4>
          <p className={styles.description}>
            На місцях проколів накладаються поодинокі шви. Завдяки мінімальній
            травматизації шкіри шви майже непомітні після загоєння.
          </p>

          <h4 className={styles.sectionTitle}>💪 Переваги лапароскопії</h4>
          <ul className={styles.advantagesList}>
            <li className={styles.advantageItem}>Мінімальні рубці</li>
            <li className={styles.advantageItem}>Швидке загоєння</li>
            <li className={styles.advantageItem}>
              Зменшення болю після операції
            </li>
            <li className={styles.advantageItem}>
              Коротший термін перебування в клініці
            </li>
            <li className={styles.advantageItem}>
              Швидке повернення до звичного способу життя
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LaparoscopicSurgery;
