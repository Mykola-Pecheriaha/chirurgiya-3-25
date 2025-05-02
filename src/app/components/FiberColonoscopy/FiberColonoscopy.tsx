'use client';
import { useState } from 'react';
import styles from './FiberColonoscopy.module.css';
import { ColonoscopyGallery } from './ColonoscopyGallery';
import { SimpleButton } from '../ui/simple-button';

interface FiberColonoscopyProps {
  backgroundColor?: string;
}

export function FiberColonoscopy({
  backgroundColor = '#f8f9fa',
}: FiberColonoscopyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Функція для обмеження тексту
  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  return (
    <section className={styles.colonoscopySection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Заголовок та вступ */}
        <h2 className={styles.mainTitle}>🩺 Колоноскопія: що це таке?</h2>
        <div className={styles.contentBlock}>
          <p className={styles.text}>
            Колоноскопія — це методика обстеження товстої кишки, яка дозволяє
            лікарю оцінити стан її слизової оболонки. Проводиться за допомогою
            спеціального оптичного приладу — колоноскопа. Процедура не лише
            діагностична, а й терапевтична: можна зробити біопсію тканини або
            видалити поліп.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>📌</span> То чи потрібно робити
            колоноскопію? Кому вона показана? Який лікар її проводить?
            Розберімося разом.
          </p>
          <p className={styles.alertText}>
            <span className={styles.emoji}>🎯</span> Важливо: колоноскопія — це
            ключовий метод скринінгу раку товстої кишки. Регулярне проходження
            процедури може врятувати життя.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>📋 Показання до колоноскопії</h3>
          <p className={styles.text}>
            Якщо у вас спостерігаються хоча б один із симптомів нижче — час
            звернутися до лікаря:
          </p>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🩸</span> Домішки крові, слизу або
              гною в калі
            </li>
            <li>
              <span className={styles.emoji}>🔄</span> Хронічні запори або
              діарея
            </li>
            <li>
              <span className={styles.emoji}>🤕</span> Болі в животі (область
              товстої кишки)
            </li>
            <li>
              <span className={styles.emoji}>🌡️</span> Тривала температура без
              явної причини
            </li>
            <li>
              <span className={styles.emoji}>🧪</span> Анемія незрозумілого
              походження
            </li>
            <li>
              <span className={styles.emoji}>🧱</span> Відчуття стороннього тіла
              в кишківнику
            </li>
            <li>
              <span className={styles.emoji}>📈</span> Оцінка ефективності
              лікування
            </li>
          </ul>
        </div>

        {/* Двоколонковий розділ: 2/3 тексту і 1/3 галереї */}
        <div className={styles.twoThirdSection}>
          <div className={styles.textTwoThirds}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>⚠️ Протипоказання</h3>
              <div
                className={`${styles.collapsibleText} ${isExpanded ? styles.expanded : ''}`}
              >
                {isExpanded ? (
                  // Повний текст
                  <>
                    <p className={styles.text}>
                      Є випадки, коли колоноскопія не рекомендована:
                    </p>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>❤️</span>{' '}
                        Серцево-легенева недостатність
                      </li>
                      <li>
                        <span className={styles.emoji}>💥</span> Активне
                        запалення в черевній порожнині
                      </li>
                      <li>
                        <span className={styles.emoji}>📉</span> Гіпертонічна
                        хвороба з високим тиском
                      </li>
                      <li>
                        <span className={styles.emoji}>🩸</span> Проблеми зі
                        згортанням крові
                      </li>
                      <li>
                        <span className={styles.emoji}>🤰</span> Вагітність
                      </li>
                      <li>
                        <span className={styles.emoji}>🦠</span> Інфекції у
                        гострий період
                      </li>
                      <li>
                        <span className={styles.emoji}>🧠</span> Перенесений
                        нещодавно інфаркт або інсульт
                      </li>
                      <li>
                        <span className={styles.emoji}>⚙️</span> Аневризма
                        аорти, асцит, спайкова хвороба
                      </li>
                    </ul>
                    <p className={styles.text}>
                      <span className={styles.emoji}>🧑‍⚕️</span> Завжди
                      консультуйтеся з лікарем щодо індивідуальних ризиків.
                    </p>

                    <h3 className={styles.subTitle}>
                      💉 Яке знеболення застосовують?
                    </h3>
                    <ol className={styles.numberedList}>
                      <li>
                        <strong>Седація</strong>
                        <br />
                        <span className={styles.emoji}>😴</span> Медичний сон —
                        пацієнт у свідомості, але болю не відчуває.
                      </li>
                      <li>
                        <strong>Загальний наркоз</strong>
                        <br />
                        <span className={styles.emoji}>🛌</span> Повне
                        знеболення із ШВЛ. Проводиться в операційній під
                        контролем анестезіолога.
                      </li>
                    </ol>

                    <h3 className={styles.subTitle}>
                      🍽️ Підготовка до процедури
                    </h3>
                    <ul className={styles.bulletList}>
                      <li>
                        <span className={styles.emoji}>✅</span> Дієта за 3 дні
                        — без клітковини, капусти, бобових
                      </li>
                      <li>
                        <span className={styles.emoji}>🚫</span> Відмова від
                        алкоголю — за 3–4 дні
                      </li>
                      <li>
                        <span className={styles.emoji}>💊</span> Проносні засоби
                        — за призначенням лікаря
                      </li>
                      <li>
                        <span className={styles.emoji}>🚱</span> У день
                        процедури — не їсти і не пити (при наркозі)
                      </li>
                    </ul>

                    <h3 className={styles.subTitle}>
                      🔍 Що показує колоноскопія?
                    </h3>
                    <ul className={styles.bulletList}>
                      <li>
                        Оцінює стан слизової по всій довжині товстої кишки
                      </li>
                      <li>Можна зробити біопсію</li>
                      <li>Дозволяє видалити поліпи</li>
                      <li>Виявляє онкопатологію на ранній стадії</li>
                    </ul>
                  </>
                ) : (
                  // Обмежений текст (100 знаків)
                  <p className={styles.text}>
                    Є випадки, коли колоноскопія не рекомендована:
                    серцево-легенева недостатність, активне запалення...
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

          <div className={styles.galleryOneThird}>
            <ColonoscopyGallery />
          </div>
        </div>

        {/* Заключення */}
        <div className={styles.contentBlock}>
          <p className={styles.conclusionText}>
            <span className={styles.emoji}>🔚</span> Колоноскопія — це не
            страшно, якщо знати, чого очікувати. Це сучасний, безпечний і дієвий
            метод діагностики. Бережіть своє здоров'я!
          </p>
        </div>
      </div>
    </section>
  );
}

export default FiberColonoscopy;
