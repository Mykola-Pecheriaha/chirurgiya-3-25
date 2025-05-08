'use client';

import { useState } from 'react';
import styles from './CoccyxCyst.module.css';
import { CoccyxCystGallery } from './CoccyxCystGallery';
import { TreatmentCoccyxCystGallery } from './TreatmentCoccyxCystGallery';

interface CoccyxCystProps {
  backgroundColor?: string;
}

export function CoccyxCyst({ backgroundColor = '#ffffff' }: CoccyxCystProps) {
  const [isExpandedCauses, setIsExpandedCauses] = useState(false);
  const [isExpandedTreatment, setIsExpandedTreatment] = useState(false);

  const toggleCausesExpand = () => {
    setIsExpandedCauses(!isExpandedCauses);
  };

  const toggleTreatmentExpand = () => {
    setIsExpandedTreatment(!isExpandedTreatment);
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Кіста куприка</h2>

        <div className={styles.introSection}>
          <p className={styles.introText}>
            Кіста куприка (пілонідальна кіста) — це вроджена патологія
            ембріонального розвитку, яка виглядає як вузький епітеліальний канал
            довжиною 2–3 см, розташований у міжсідничній складці. На поверхні
            шкіри видно декілька дрібних отворів, через які може виходити вміст
            кісти.
          </p>

          <div className={styles.infoBlock}>
            <h3 className={styles.subTitle}>🔬 Як виникає запалення?</h3>
            <p>Всередині цього каналу можуть накопичуватися:</p>
            <ul className={styles.bulletList}>
              <li>волосяні фолікули,</li>
              <li>секрет сальних та потових залоз,</li>
              <li>рідше — фрагменти зубів (при ембріональній аномалії).</li>
            </ul>
            <p>
              Через застій цього вмісту створюються умови для розмноження
              бактерій, що призводить до нагноєння. Гній проникає в підшкірну
              жирову клітковину, утворюючи абсцес, який може самостійно
              прорватися, формуючи свищ.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.subTitle}>🔄 Перебіг хвороби</h3>
            <p>
              Захворювання має хвилеподібний характер — періоди ремісії
              змінюються загостреннями із запаленням, болем та виділеннями.
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.subTitle}>⚠️ Причини та фактори ризику</h3>
            <p>
              {isExpandedCauses
                ? 'До розвитку або загострення кісти куприка сприяють:'
                : 'До розвитку або загострення кісти куприка сприяють:'.substring(
                    0,
                    100
                  ) + '...'}
            </p>
            {!isExpandedCauses && (
              <button
                className={styles.expandButton}
                onClick={toggleCausesExpand}
              >
                Розгорнути
              </button>
            )}

            {isExpandedCauses && (
              <>
                <ul className={styles.coloredList}>
                  <li>🔸 Недотримання гігієни</li>
                  <li>🔸 Рясне оволосіння міжсідничної ділянки</li>
                  <li>🔸 Часті мікротравми</li>
                  <li>🔸 Переохолодження або перегрів</li>
                  <li>🔸 Сидячий спосіб життя</li>
                  <li>🔸 Ожиріння, гормональні збої</li>
                  <li>🔸 Носіння тісної білизни</li>
                  <li>🔸 Вростання волосся у шкіру</li>
                </ul>

                <h3 className={styles.subTitle}>🩺 Симптоми кісти куприка</h3>
                <p>На ранніх стадіях пацієнт може відчувати:</p>
                <ul className={styles.coloredList}>
                  <li>🔹 біль під час сидіння;</li>
                  <li>🔹 наявність стороннього тіла в нижній частині спини;</li>
                  <li>
                    🔹 припухлість або ущільнення в крижово-куприковій ділянці.
                  </li>
                </ul>

                <p>При активному запаленні з'являються такі ознаки:</p>
                <ul className={styles.coloredList}>
                  <li>
                    🔹 Свербіж, почервоніння, дискомфорт у ділянці куприка
                  </li>
                  <li>
                    🔹 Біль у крижово-куприковій зоні, особливо при сидінні
                  </li>
                  <li>🔹 Виділення гною з отвору в міжсідничній складці</li>
                  <li>🔹 Пальповане ущільнення чи припухлість у цій зоні</li>
                  <li>
                    🔹 Можливе підвищення температури та загальна слабкість
                  </li>
                </ul>

                <p>
                  📍 У стані "спокою" кіста нагадує маленький отвір або воронку
                  на шкірі — на відстані до 10 см від ануса.
                </p>

                <button
                  className={styles.expandButton}
                  onClick={toggleCausesExpand}
                >
                  Згорнути
                </button>
              </>
            )}
          </div>
          <div className={styles.galleryColumn}>
            <CoccyxCystGallery />
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.fullWidthSection}>
          <h3 className={styles.subTitle}>🛠 Лікування кісти куприка</h3>
          <p>
            Методи лікування залежать від стадії захворювання — чи є запалення,
            свищ, гнійник, чи кіста перебуває в «спокійному» стані.
          </p>
          <p>
            Залежно від форми та тривалості перебігу хвороби застосовується як
            консервативне (медикаментозне), так і хірургічне лікування.
          </p>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.subTitle}>
              🧴 1. Консервативне лікування (на початкових стадіях):
            </h3>
            <p>
              {isExpandedTreatment
                ? ''
                : 'Консервативне лікування включає антибактеріальну терапію, місцеве лікування та фізіотерапію...'}
            </p>
            {!isExpandedTreatment && (
              <button
                className={styles.expandButton}
                onClick={toggleTreatmentExpand}
              >
                Розгорнути
              </button>
            )}

            {isExpandedTreatment && (
              <>
                <ul className={styles.coloredList}>
                  <li>
                    📌 Антибактеріальна терапія — для зменшення запалення;
                  </li>
                  <li>
                    📌 Місцеве лікування — антисептичні обробки, мазі
                    (іхтіолова, левомеколь тощо);
                  </li>
                  <li>
                    📌 Фізіотерапія — для покращення кровообігу і прискорення
                    загоєння.
                  </li>
                </ul>
                <p>
                  ⚠️ Консервативне лікування лише тимчасово усуває симптоми. Щоб
                  позбутися проблеми назавжди — потрібне хірургічне втручання.
                </p>

                <h3 className={styles.subTitle}>🔪 2. Хірургічне лікування</h3>
                <p>
                  🔻 Операція є основним методом лікування, особливо при
                  наявності гною або хронічного свища.
                </p>
                <p>Мета — повністю видалити кісту разом із усіма ходами.</p>
                <p>Популярні методи:</p>
                <ul className={styles.coloredList}>
                  <li>
                    Класична операція — повне висічення зшиванням рани або
                    залишенням її відкритою для самостійного загоєння;
                  </li>
                  <li>
                    Лазерна вапоризація — менш травматична, з коротшим періодом
                    реабілітації;
                  </li>
                  <li>
                    Пластичні методики — застосовуються при великих або
                    повторних кістаx (флап-пластика тощо).
                  </li>
                </ul>

                <p>🏥 Післяопераційний період:</p>
                <ul className={styles.coloredList}>
                  <li>обробка шва або рани;</li>
                  <li>обмеження фізичного навантаження;</li>
                  <li>сидіння дозволяється лише після загоєння;</li>
                  <li>регулярні перев'язки;</li>
                  <li>дотримання гігієни та рекомендацій лікаря.</li>
                </ul>

                <button
                  className={styles.expandButton}
                  onClick={toggleTreatmentExpand}
                >
                  Згорнути
                </button>
              </>
            )}
          </div>
          <div className={styles.galleryColumn}>
            <TreatmentCoccyxCystGallery />
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.fullWidthSection}>
          <h3 className={styles.subTitle}>✅ Профілактика</h3>
          <p>Щоб уникнути рецидивів або попередити розвиток кісти:</p>
          <ul className={styles.coloredList}>
            <li>🧼 Дотримуйтеся ретельної гігієни міжсідничної ділянки;</li>
            <li>
              ✂️ Регулярно видаляйте зайве волосся (за потреби — лазерна
              епіляція);
            </li>
            <li>🪑 Уникайте тривалого сидіння без перерв;</li>
            <li>🧊 Не допускайте переохолодження куприкової ділянки;</li>
            <li>⚖️ Контролюйте вагу і гормональний фон;</li>
            <li>👖 Уникайте носіння тісної білизни та синтетичних тканин;</li>
            <li>
              🏃 Ведіть активний спосіб життя — рух покращує кровообіг і зменшує
              ризик запалення.
            </li>
          </ul>
          <p>
            🩺 Пам'ятайте: чим раніше звернетеся до лікаря — тим простішим буде
            лікування. Кіста куприка — це не тільки естетичний дефект, а й
            серйозне джерело хронічного інфекційного процесу.
          </p>
        </div>
      </div>
    </div>
  );
}
