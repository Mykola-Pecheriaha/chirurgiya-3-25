'use client';

import { useState } from 'react';
import styles from './Varicose.module.css';
import { VaricoseGallery } from './VaricoseGallery';
import { SymptomsVaricoseGallery } from './SymptomsVaricoseGallery';
import { SurgeryVaricoseGallery } from './SurgeryVaricoseGallery';

interface VaricoseProps {
  backgroundColor?: string;
}

export function Varicose({ backgroundColor = '#f5f8fa' }: VaricoseProps) {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    causes: false,
    symptoms: false,
    stages: false,
    treatment: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionContainer}>
          <div className={styles.textSection}>
            <h3 className={styles.sectionTitle}>
              🧬 Причини розвитку варикозу:
            </h3>
            <div className={styles.expandableText}>
              {expandedSections.causes ? (
                <div className={styles.textContent}>
                  <ul className={styles.bulletList}>
                    <li className={styles.bulletItem}>
                      Пошкодження клапанного апарату вен — головна причина
                    </li>
                    <li className={styles.bulletItem}>Вагітність</li>
                    <li className={styles.bulletItem}>Спадковість</li>
                    <li className={styles.bulletItem}>
                      Малорухливий спосіб життя
                    </li>
                    <li className={styles.bulletItem}>Ожиріння</li>
                    <li className={styles.bulletItem}>
                      Підвищений внутрішньочеревний тиск
                    </li>
                    <li className={styles.bulletItem}>Вік</li>
                    <li className={styles.bulletItem}>Тромбози</li>
                    <li className={styles.bulletItem}>
                      Плоскостопість, вальгусна деформація
                    </li>
                  </ul>
                </div>
              ) : (
                <div className={styles.textContent}>
                  <ul className={styles.bulletList}>
                    <li className={styles.bulletItem}>
                      Пошкодження клапанного апарату вен — головна причина
                    </li>
                    <li className={styles.bulletItem}>Вагітність</li>
                    <li className={styles.bulletItem}>Спадковість</li>
                  </ul>
                </div>
              )}
              <button
                className={styles.expandButton}
                onClick={() => toggleSection('causes')}
              >
                {expandedSections.causes ? 'Згорнути' : 'Розгорнути'}
              </button>
            </div>

            <h3 className={styles.sectionTitle}>
              😣 Симптоми, які не варто ігнорувати:
            </h3>
            <div className={styles.expandableText}>
              {expandedSections.symptoms ? (
                <div className={styles.textContent}>
                  <ul className={styles.bulletList}>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Біль тупого характеру
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Відчуття розпирання в ногах
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Набряки та відчуття «важкості»
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Помітні розширені вени
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Свербіж, печіння, «мурашки»
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Синдром неспокійних ніг 🛌
                    </li>
                  </ul>
                  <p className={styles.warningText}>
                    ❗Якщо не звернути увагу на симптоми та не розпочати
                    лікування, хвороба може призвести до серйозних ускладнень.
                  </p>
                </div>
              ) : (
                <div className={styles.textContent}>
                  <ul className={styles.bulletList}>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Біль тупого характеру
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Відчуття розпирання в ногах
                    </li>
                  </ul>
                </div>
              )}
              <button
                className={styles.expandButton}
                onClick={() => toggleSection('symptoms')}
              >
                {expandedSections.symptoms ? 'Згорнути' : 'Розгорнути'}
              </button>
            </div>
          </div>
          <div className={styles.gallerySection}>
            <VaricoseGallery />
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.sectionContainer}>
          <div className={styles.textSection}>
            <h3 className={styles.sectionTitle}>
              🩺 Стадії варикозної хвороби (класифікація CEAP):
            </h3>
            <div className={styles.expandableText}>
              {expandedSections.stages ? (
                <div className={styles.textContent}>
                  <table className={styles.stageTable}>
                    <thead>
                      <tr>
                        <th>Стадія</th>
                        <th>Опис</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>С0</td>
                        <td>Біль, важкість, свербіж — без зовнішніх проявів</td>
                      </tr>
                      <tr>
                        <td>С1</td>
                        <td>Поява судинних зірочок та ретикулярних вен</td>
                      </tr>
                      <tr>
                        <td>С2</td>
                        <td>Видимі варикозно розширені вени</td>
                      </tr>
                      <tr>
                        <td>С3</td>
                        <td>З'являється набряк</td>
                      </tr>
                      <tr>
                        <td>С4</td>
                        <td>Зміни шкіри (пігментація, екзема)</td>
                      </tr>
                      <tr>
                        <td>С5</td>
                        <td>Заживлені виразки</td>
                      </tr>
                      <tr>
                        <td>С6</td>
                        <td>Відкриті трофічні виразки ⚠️</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className={styles.warningText}>⚠️ Ускладнення</p>
                  <p>
                    🩸 Найнебезпечніше — утворення тромбів. Наявність варикозу
                    збільшує ризик тромбозу у 20 разів.
                  </p>
                </div>
              ) : (
                <div className={styles.textContent}>
                  <table className={styles.stageTable}>
                    <thead>
                      <tr>
                        <th>Стадія</th>
                        <th>Опис</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>С0</td>
                        <td>Біль, важкість, свербіж — без зовнішніх проявів</td>
                      </tr>
                      <tr>
                        <td>С1</td>
                        <td>Поява судинних зірочок та ретикулярних вен</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              <button
                className={styles.expandButton}
                onClick={() => toggleSection('stages')}
              >
                {expandedSections.stages ? 'Згорнути' : 'Розгорнути'}
              </button>
            </div>
          </div>
          <div className={styles.gallerySection}>
            <SymptomsVaricoseGallery />
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.fullWidthSection}>
          <p className={styles.fullWidthText}>
            💡 Чому важливо лікувати варикоз: Лікування має не лише медичні, але
            й естетичні показання. Особливо це турбує жінок, які хочуть
            повернути ногам красу 👠 🔔 Не відкладайте звернення до лікаря —
            сучасна флебологія дозволяє лікувати варикоз швидко, ефективно та
            безболісно.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.sectionContainer}>
          <div className={styles.textSection}>
            <h3 className={styles.sectionTitle}>
              💡 Сучасні методи лікування:
            </h3>
            <div className={styles.expandableText}>
              {expandedSections.treatment ? (
                <div className={styles.textContent}>
                  <p>Сучасні методи лікування включають:</p>
                  <ul className={styles.bulletList}>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Склеротерапія
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Лазерне лікування
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Мінімально інвазивна хірургія
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Компресійна терапія
                    </li>
                  </ul>

                  <h4 className={styles.sectionTitle}>
                    🩻 Лікування внутрішнього варикозу
                  </h4>
                  <p>
                    Сучасна медицина при внутрішньому варикозному розширенні вен
                    найчастіше використовує малоінвазивні методи або хірургічне
                    видалення уражених вен.
                  </p>
                  <p className={styles.warningText}>
                    ❗Однак варто пам'ятати: такі процедури усувають лише
                    наслідки, а не причину захворювання.
                  </p>

                  <h4 className={styles.sectionTitle}>
                    ⚠️ Чому важливий комплексний підхід?
                  </h4>
                  <ul className={styles.bulletList}>
                    <li className={styles.bulletItem}>
                      Існує ризик рецидиву, якщо не відновити нормальний
                      венозний кровотік.
                    </li>
                    <li className={styles.bulletItem}>
                      Лише комплексна стратегія лікування зменшує ймовірність
                      повторного розвитку варикозу.
                    </li>
                  </ul>

                  <h4 className={styles.sectionTitle}>
                    🛠️ Найпоширеніші методи лікування:
                  </h4>
                  <p className={styles.importantText}>
                    💉 Склеротерапія / пінна склеротерапія
                  </p>
                  <p>
                    У вену вводиться склерозант, що «запечатує» її зсередини.
                  </p>

                  <p className={styles.importantText}>🔦 Лазерне лікування</p>
                  <p>
                    Лазерний промінь нагріває стінки вени, змушуючи її
                    закритися.
                  </p>

                  <p className={styles.importantText}>
                    ✂️ Перев'язка та видалення вен
                  </p>
                  <p>Уражені судини видаляються хірургічним шляхом.</p>
                </div>
              ) : (
                <div className={styles.textContent}>
                  <p>Сучасні методи лікування включають:</p>
                  <ul className={styles.bulletList}>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Склеротерапія
                    </li>
                    <li
                      className={`${styles.bulletItem} ${styles.bulletItemBlue}`}
                    >
                      Лазерне лікування
                    </li>
                  </ul>
                </div>
              )}
              <button
                className={styles.expandButton}
                onClick={() => toggleSection('treatment')}
              >
                {expandedSections.treatment ? 'Згорнути' : 'Розгорнути'}
              </button>
            </div>
          </div>
          <div className={styles.gallerySection}>
            <SurgeryVaricoseGallery />
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.fullWidthSection}>
          <h3 className={styles.sectionTitle}>
            Індивідуальний підхід до кожного пацієнта
          </h3>
          <p className={styles.fullWidthText}>
            Наші хірурги підбирають оптимальний метод лікування, виходячи зі
            стадії захворювання, симптомів і загального стану здоров'я. Ми
            пропонуємо декілька варіантів терапії з детальним поясненням переваг
            і ризиків кожного — щоб ви могли зробити усвідомлений вибір.
          </p>
        </div>
      </div>
    </div>
  );
}
