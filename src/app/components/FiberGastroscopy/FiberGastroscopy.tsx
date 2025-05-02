'use client';
import { useState } from 'react';
import styles from '../shared/ProcedureComponent.module.css';
import { GastroGallery } from './GastroGallery';
import { SimpleButton } from '../../components/ui/simple-button';

interface FiberGastroscopyProps {
  backgroundColor?: string;
}

export function FiberGastroscopy({
  backgroundColor = '#f8f9fa',
}: FiberGastroscopyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.procedureSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок та вступ */}
        <h2 className={styles.mainTitle}>
          🩺 Фіброезофагогастродуоденоскопія (ФЕГДС)
        </h2>
        <div className={styles.contentBlock}>
          <p className={styles.text}>
            ФЕГДС — це сучасне ендоскопічне дослідження верхніх відділів
            шлунково-кишкового тракту 🧬, яке дозволяє оцінити стан стравоходу,
            шлунка та дванадцятипалої кишки. Під час процедури лікар може не
            лише виявити патології, а й виконати біопсію 🧫 — взяття зразка
            слизової оболонки для подальшого аналізу.
          </p>
        </div>

        {/* Двоколонковий розділ: текст і галерея */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <div
                className={`${styles.collapsibleText} ${isExpanded ? styles.expanded : ''}`}
              >
                {isExpanded ? (
                  // Повний текст
                  <>
                    <h3 className={styles.subTitle}>
                      📌 Показання до проведення ФЕГДС
                    </h3>
                    <p className={styles.text}>
                      Процедура рекомендована при підозрі на:
                    </p>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>🔥</span> Запальні
                        процеси або новоутворення верхніх відділів ШКТ
                      </li>
                      <li>
                        <span className={styles.emoji}>❗</span> Виразкову
                        хворобу шлунка чи дванадцятипалої кишки
                      </li>
                      <li>
                        <span className={styles.emoji}>🩸</span> Кровотечі у
                        верхніх відділах травного тракту
                      </li>
                    </ul>

                    <h3 className={styles.subTitle}>
                      📝 Як підготуватися до ФЕГДС?
                    </h3>
                    <p className={styles.text}>
                      Правильна підготовка{' '}
                      <span className={styles.emoji}>🔍</span> — запорука
                      точного та інформативного обстеження:
                    </p>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>🍽️</span> Останній прийом
                        їжі – за 8 годин до процедури
                      </li>
                    </ul>
                    <p className={styles.text}>
                      Заборонено їсти, пити, палити{' '}
                      <span className={styles.emoji}>🚭</span> чи приймати ліки{' '}
                      <span className={styles.emoji}>💊</span>.
                    </p>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>🚬</span> Чому не можна
                        курити?
                      </li>
                    </ul>
                    <p className={styles.text}>
                      Куріння сприяє накопиченню слизу, що може викликати
                      блювотний рефлекс <span className={styles.emoji}>🤢</span>{' '}
                      під час процедури.
                    </p>

                    <h3 className={styles.subTitle}>
                      🛏️ Як проходить процедура?
                    </h3>
                    <p className={styles.text}>
                      У Клініці ФЕГДС проводиться під короткочасним
                      внутрішньовенним наркозом (седацією){' '}
                      <span className={styles.emoji}>💉</span>, що гарантує
                      комфорт <span className={styles.emoji}>😌</span> і
                      відсутність болю.
                    </p>

                    <h3 className={styles.subTitle}>⏳ Після процедури</h3>
                    <p className={styles.text}>
                      Протягом 30 хвилин пацієнт перебуває під наглядом{' '}
                      <span className={styles.emoji}>👨‍⚕️👩‍⚕️</span> медичного
                      персоналу. Після цього можна поступово повертатись до
                      звичного режиму <span className={styles.emoji}>🏠</span>{' '}
                      за рекомендацією лікаря.
                    </p>
                  </>
                ) : (
                  // Обмежений текст (100 знаків)
                  <p className={styles.text}>
                    📌 Показання до проведення ФЕГДС
                    <br />
                    Процедура рекомендована при підозрі на запальні процеси або
                    новоутворення...
                  </p>
                )}
              </div>

              <SimpleButton
                onClick={toggleExpand}
                variant="outline"
                className={styles.expandButton}
              >
                {isExpanded ? 'Згорнути' : 'Розгорнути'}
              </SimpleButton>
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <GastroGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FiberGastroscopy;
