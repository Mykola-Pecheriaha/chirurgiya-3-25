'use client';
import { useState } from 'react';
import styles from '../shared/ProcedureComponent.module.css';
import { ClippingGallery } from '../../components/EndoscopicClipping/ClippingGallery';
import { SimpleButton } from '../../components/ui/simple-button';

interface EndoscopicClippingProps {
  backgroundColor?: string;
}

export function EndoscopicClipping({
  backgroundColor = '#f8f9fa',
}: EndoscopicClippingProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.procedureSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок та вступ */}
        <h2 className={styles.mainTitle}>
          🛠️ Ендоскопічне кліпування / Зупинка кровотечі
        </h2>
        <div className={styles.contentBlock}>
          <p className={styles.text}>
            Ендоскопічне кліпування (ендокліпування) — це сучасний,
            високоефективний метод механічної зупинки кровотечі 🩸 в органах
            шлунково-кишкового тракту.
          </p>
          <p className={styles.text}>
            🔍 Метод полягає у точковому накладанні спеціальної металевої кліпси
            🧷 безпосередньо в місці кровотечі, найчастіше — на фоні виразкового
            дефекту слизової.
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
                    <h3 className={styles.subTitle}>📌 Як це працює?</h3>
                    <p className={styles.text}>
                      Через інструментальний канал ендоскопа лікар проводить
                      кліпатор, за допомогою якого накладається кліпса, що
                      надійно фіксується в ділянці кровотечі 🛡️. Такий підхід
                      дозволяє швидко та безпечно зупинити крововтрату навіть у
                      складних клінічних ситуаціях.
                    </p>
                    <p className={styles.text}>
                      Ендоскопічне зупинення кровотечі при ФГДС методом
                      аргонно-плазменної коагуляції.
                    </p>

                    <h3 className={styles.subTitle}>
                      ✅ Метод ендокліпування застосовуються:
                    </h3>
                    <ul className={styles.bulletList}>
                      <li>При шлунково-кишкових кровотечах;</li>
                      <li>Для зупинки кровотечі з виразок;</li>
                      <li>У випадках пошкодження судин слизової оболонки.</li>
                    </ul>

                    <h3 className={styles.subTitle}>
                      🩺 Процедура проводиться під контролем ендоскопа, що
                      дозволяє:
                    </h3>
                    <ul className={styles.bulletList}>
                      <li>Точно візуалізувати місце кровотечі;</li>
                      <li>
                        Оцінити ефективність зупинки крові в реальному часі;
                      </li>
                      <li>
                        Забезпечити мінімальне втручання і швидке відновлення
                        пацієнта 💪.
                      </li>
                      <li>
                        Метод аргонно-плазменної коагуляції застосовується на
                        рівні з попереднім.
                      </li>
                    </ul>
                    <p className={styles.text}>
                      Вибір метода зупинки кровотечі вирішує ендоскопіст при
                      огляді джерела геморрагії.
                    </p>
                  </>
                ) : (
                  // Обмежений текст (100 знаків)
                  <p className={styles.text}>
                    📌 Як це працює?
                    <br />
                    Через інструментальний канал ендоскопа лікар проводить
                    кліпатор...
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
            <ClippingGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EndoscopicClipping;
