'use client';
import { useState } from 'react';
import styles from '../shared/ProcedureComponent.module.css';
import { PapilloGallery } from './PapilloGallery';
import { SimpleButton } from '../../components/ui/simple-button';

interface EndoscopicPapillosphincterotomyProps {
  backgroundColor?: string;
}

export function EndoscopicPapillosphincterotomy({
  backgroundColor = '#f8f9fa',
}: EndoscopicPapillosphincterotomyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.procedureSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок та вступ */}
        <h2 className={styles.mainTitle}>
          🩺 Ендоскопічна папілосфінктеротомія
        </h2>
        <div className={styles.contentBlock}>
          <p className={styles.text}>
            Ендоскопічна папілосфінктеротомія — це малотравматичне хірургічне
            втручання для усунення патологій великого дуоденального сосочка
            (ВДС) при папілостенозі та видалення каменів із жовчних проток при
            холедохолітіазі.
          </p>
          <h3 className={styles.subTitle}>📌 Загальна інформація</h3>
          <p className={styles.text}>
            Це сучасна альтернатива традиційній або лапароскопічній
            холедохолітотомії.
          </p>
          <p className={styles.text}>Переваги процедури:</p>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>✅</span> Мала інвазивність;
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Можливість ефективного
              видалення каменів;
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Усунення першопричини —
              патології ВДС.
            </li>
          </ul>
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
                      🧪 Підготовка до процедури
                    </h3>
                    <p className={styles.text}>
                      Перед процедурою пацієнт проходить обстеження:
                    </p>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>🩸</span> Загальний
                        аналіз крові (включаючи тромбоцити);
                      </li>
                      <li>
                        <span className={styles.emoji}>⏱️</span> Протромбіновий
                        індекс;
                      </li>
                      <li>
                        <span className={styles.emoji}>🍬</span> Рівень глюкози;
                      </li>
                      <li>
                        <span className={styles.emoji}>🧬</span> Визначення
                        групи крові та резус-фактора;
                      </li>
                      <li>
                        <span className={styles.emoji}>🧫</span> Аналіз на
                        онкомаркери, ВІЛ;
                      </li>
                      <li>
                        <span className={styles.emoji}>🩺</span> Консультація
                        терапевта;
                      </li>
                      <li>
                        <span className={styles.emoji}>🖥️</span> УЗД органів
                        черевної порожнини.
                      </li>
                    </ul>

                    <h3 className={styles.subTitle}>♻️ Реабілітація</h3>
                    <p className={styles.text}>
                      Якщо немає ускладнень, пацієнт може повернутися додому вже
                      через 24 години <span className={styles.emoji}>🕒</span>.
                    </p>
                    <p className={styles.text}>
                      <span className={styles.emoji}>📝</span> Обов'язково слід
                      дотримуватись рекомендацій лікаря.
                    </p>

                    <h3 className={styles.subTitle}>
                      🧾 Показання до процедури
                    </h3>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>💠</span> Камені в
                        жовчних протоках (холедохолітіаз);
                      </li>
                      <li>
                        <span className={styles.emoji}>🚫</span> Звуження ВДС
                        (папілостеноз);
                      </li>
                      <li>
                        <span className={styles.emoji}>⚠️</span> Доброякісні або
                        злоякісні новоутворення в області протоків.
                      </li>
                    </ul>

                    <p className={styles.text}>
                      Грамотно проведене лапароскопічне втручання дозволяє
                      повністю усунути рефлюкс, повернути комфорт життя та
                      запобігти ускладненням у майбутньому.
                    </p>

                    <p className={styles.text}>
                      <span className={styles.emoji}>🔔</span> Звертайтесь до
                      спеціаліста при будь-яких підозрах на проблеми з жовчними
                      протоками — сучасні методи лікування допоможуть уникнути
                      ускладнень і покращити якість життя{' '}
                      <span className={styles.emoji}>💙</span>
                    </p>
                  </>
                ) : (
                  // Обмежений текст (100 знаків)
                  <p className={styles.text}>
                    🧪 Підготовка до процедури
                    <br />
                    Перед процедурою пацієнт проходить обстеження...
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
            <PapilloGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EndoscopicPapillosphincterotomy;
