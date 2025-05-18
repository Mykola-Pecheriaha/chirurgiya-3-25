'use client';
import styles from './CarpalDetails.module.css';
import { CarpalDetailsGallery } from './CarpalDetailsGallery';
import { CausesGallery } from './CausesGallery';
import { SymptomsGallery } from './SymptomsGallery';
import { TestsGallery } from './TestsGallery';

interface CarpalDetailsProps {
  backgroundColor?: string;
}

export function CarpalDetails({
  backgroundColor = '#f8f9fa',
}: CarpalDetailsProps) {
  return (
    <section className={styles.carpalSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Синдром зап'ястного каналу</h1>

        {/* Основна інформація */}
        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <p className={styles.text}>
              Синдром зап'ястного каналу — це стан, при якому серединний нерв,
              що проходить через вузький прохід у зап'ясті, стискається,
              викликаючи оніміння, слабкість і біль у руці та пальцях. Це один
              із найпоширеніших нервових розладів, особливо серед людей, чия
              робота пов'язана з повторюваними рухами рук.
            </p>
          </div>
          <div className={styles.galleryColumn}>
            <CarpalDetailsGallery />
          </div>
        </div>

        {/* Перший сегмент */}
        <div className={styles.segment}>
          <h2 className={styles.segmentTitle}>
            Причини здавлення серединного нерва
          </h2>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                Більшість випадків синдрому зап'ястного каналу спричинені
                поєднанням кількох факторів:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Повторювані рухи рук</strong> — часте виконання одних
                  і тих самих дій (наприклад, приготування їжі, прасування,
                  робота на комп'ютері) може спричинити подразнення сухожиль і
                  набряк.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Незручне положення руки та зап'ястя</strong> —
                  екстремальні чи тривалі згинання можуть збільшити тиск у
                  каналі.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Вагітність</strong> — гормональні зміни можуть
                  спричинити набряк тканин.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Спадковість</strong> — анатомічні особливості
                  зап'ястного каналу можуть передаватися генетично.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Захворювання</strong> — діабет, ревматоїдний артрит,
                  проблеми з щитоподібною залозою можуть бути супутніми
                  причинами.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Травми та мікротравми</strong> — переломи або постійне
                  мікронавантаження зап'ястя.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Професійні фактори</strong> — робота за комп'ютером,
                  малярство, механіка, кулінарія тощо.
                </li>
              </ul>
            </div>
            <div className={styles.galleryColumn}>
              <CausesGallery />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Другий сегмент */}
        <div className={styles.segment}>
          <h2 className={styles.segmentTitle}>
            Симптоми синдрому зап'ястного каналу
          </h2>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <h3 className={styles.subTitle}>Вони можуть включати:</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Оніміння, поколювання, печіння та біль</strong> —
                  зазвичай у великому пальці, вказівному, середньому та частково
                  безіменному пальцях.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Оніміння або поколювання долоні.</strong>
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Раптові відчуття ударів</strong> — біль або
                  поколювання, що віддає у великий палець і пальці.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Відчуття набряку</strong> — дискомфорт або припухлість
                  у ділянці зап'ястя.
                </li>
                <li>
                  <span className={styles.emoji}>↗</span>{' '}
                  <strong>Біль, що поширюється вгору</strong> — поколювання або
                  біль можуть підніматися до передпліччя.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Слабкість та незграбність</strong> — важко виконувати
                  дрібну моторику (застібнути ґудзик, взяти голку тощо).
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Падіння предметів</strong> — через знижену чутливість
                  або м'язову слабкість у руці.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>
                    Слабке зчеплення або труднощі з носінням сумок
                  </strong>{' '}
                  — одна з найпоширеніших скарг.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Атрофія м'яза під великим пальцем</strong> — у
                  тривалих або занедбаних випадках.
                </li>
              </ul>

              <h3 className={styles.subTitle}>⏳ Як проявляються симптоми?</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>
                    У більшості випадків симптоми починаються поступово
                  </strong>{' '}
                  — з'являються і зникають, але з часом можуть ставати частішими
                  й тривалішими.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Нічні симптоми</strong> — дуже поширене явище. Під час
                  сну, коли руки зігнуті в зап'ястях, пацієнти можуть
                  прокидатися від болю або оніміння.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Денні симптоми</strong> — часто виникають при
                  тривалому утриманні предметів (телефон, книга, кермо),
                  особливо якщо зап'ястя зігнуте вперед або назад.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Полегшення симптомів</strong> — багато пацієнтів
                  відзначають, що струшування рук або розминання тимчасово
                  зменшує неприємні відчуття.
                </li>
              </ul>
            </div>
            <div className={styles.galleryColumn}>
              <SymptomsGallery />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Третій сегмент */}
        <div className={styles.segment}>
          <h2 className={styles.segmentTitle}>Іспити та тести</h2>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                Під час медичного огляду лікар може виявити:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Оніміння долоні</strong>, великого, вказівного,
                  середнього пальців і сторони великого пальця безіменного (у
                  різних людей зона оніміння може відрізнятися).
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Слабкий хват руки.</strong>
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Симптом Тінеля</strong> — постукування по серединному
                  нерву на зап'ясті викликає біль або поколювання, що віддає в
                  пальці.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Тест Фалена</strong> — при повному згинанні зап'ястя
                  вперед протягом 60 секунд з'являються поколювання, оніміння
                  або слабкість.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Проблеми з визначенням двох точок на пальцях</strong>{' '}
                  — порушення чутливості.
                </li>
              </ul>

              <h3 className={styles.subTitle}>
                🧪 Додаткові тести та аналізи:
              </h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Рентген зап'ястя</strong> — допомагає виключити інші
                  стани, наприклад, артрит.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Електроміографія (ЕМГ)</strong> — перевіряє стан
                  м'язів і нервів, що їх контролюють.
                </li>
                <li>
                  <span className={styles.emoji}></span>{' '}
                  <strong>Тест на швидкість нервової провідності</strong> —
                  показує, як швидко електричні імпульси проходять по нерву.
                </li>
              </ul>
            </div>
            <div className={styles.galleryColumn}>
              <TestsGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarpalDetails;
