'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './SurgicalDepartment.module.css';

interface SurgicalDepartmentProps {
  backgroundColor?: string;
}

const SurgicalDepartment: React.FC<SurgicalDepartmentProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Хірургічне відділення — сучасність, комфорт, безпека
            </h2>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                Досвідчений медичний персонал
              </li>
              <li className={styles.featureItem}>
                Монолітня команда професіоналів
              </li>
              <li className={styles.featureItem}>Капітально оновлене</li>
              <li className={styles.featureItem}>Комфортні палати</li>
              <li className={styles.featureItem}>Сучасна апаратура</li>
              <li className={styles.featureItem}>Нові меблі</li>
              <li className={styles.featureItem}>
                Високі стандарти стерильності та безпеки
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/surgical-department/surgdepartm29.jpg"
              alt="Хірургічне відділення"
              width={500}
              height={350}
              className={styles.departmentImage}
              priority
            />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.detailItem}>
            <span>
              <strong>Повна реконструкція</strong> — відділення нещодавно
              капітально відремонтовано, що дозволило створити сучасний,
              комфортний простір для пацієнтів і персоналу.
            </span>
          </div>
          <div className={styles.detailItem}>
            <span>
              <strong>Затишні палати</strong> — кожна палата облаштована з
              урахуванням потреб пацієнтів: нові меблі, якісне освітлення,
              кондиціонери, санвузли.
            </span>
          </div>
          <div className={styles.detailItem}>
            <span>
              <strong>Сучасне медичне обладнання</strong> — лише нова апаратура
              для ефективної діагностики та безпечного оперативного втручання.
            </span>
          </div>
          <div className={styles.detailItem}>
            <span>
              <strong>Комфорт і гігієна</strong> — використано новітні рішення
              для підтримання стерильності, безпеки та зручності перебування.
            </span>
          </div>
          <div className={styles.detailItem}>
            <span>
              <strong>Команда професіоналів</strong> — наші хірурги та медичний
              персонал — це люди з великим досвідом, що працюють із турботою та
              повагою до кожного пацієнта.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalDepartment;
