'use client';
import styles from './LaparoscopyDiagnostic.module.css';
import { LaparoscopyGallery } from './LaparoscopyGallery';

interface LaparoscopyDiagnosticProps {
  backgroundColor?: string;
}

export function LaparoscopyDiagnostic({
  backgroundColor = '#f8f9fa',
}: LaparoscopyDiagnosticProps) {
  // Зображення для галереї - визначаємо тільки тут
  const galleryImages = [
    {
      src: '/images/laparoscopyDiagnostic/laparoscopyDiagnostic6.jpg',
      alt: 'Діагностична лапароскопія процедура',
      width: 800,
      height: 600,
      title: 'Діагностична лапароскопія',
    },
    {
      src: '/images/laparoscopyDiagnostic/laparoscopyDiagnostic10.jpg',
      alt: 'Лапароскопічна операція',
      width: 800,
      height: 600,
      title: 'Процес лапароскопічної операції',
    },
    {
      src: '/images/laparoscopyDiagnostic/laparoscopyDiagnostic1.jpg',
      alt: 'Лапароскопічне обладнання',
      width: 800,
      height: 600,
      title: 'Сучасне лапароскопічне обладнання',
    },

    {
      src: '/images/laparoscopyDiagnostic/laparoscopyDiagnostic5.jpg',
      alt: 'Результати лапароскопії',
      width: 800,
      height: 600,
      title: 'Результати діагностичної лапароскопії',
    },
  ];

  return (
    <section className={styles.laparoscopySection} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>📌 Діагностична лапароскопія?</h2>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🩺 Лапароскопія</h3>
          <p className={styles.text}>
            Лапароскопія — сучасний хірургічний метод огляду черевної порожнини
            та таза з метою інтраопераційної діагностики складних клінічних
            випадків. Це метод медичної діагностики із використанням елементів
            оперативного втручання та оптичних приладів.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🔬 Діагностична лапароскопія</h3>
          <p className={styles.text}>
            Діагностична лапароскопія — це інвазивний метод дослідження. Її
            призначають, коли інші, неінвазивні методи виявилися недостатньо
            інформативними, і необхідно візуально оцінити стан органів або взяти
            біопсію.
          </p>

          <div className={styles.indicationsBlock}>
            <h4 className={styles.listTitle}>📝 Показання до проведення:</h4>
            <ul className={styles.bulletList}>
              <li>
                <span className={styles.emoji}>🤕</span> болі в животі
                незрозумілого характеру;
              </li>
              <li>
                <span className={styles.emoji}>💧</span> скупчення рідини в
                черевній порожнині;
              </li>
              <li>
                <span className={styles.emoji}>❗</span> підозра на апендицит;
              </li>
              <li>
                <span className={styles.emoji}>⚕️</span> уточнення діагнозу в
                гінекології та урології.
              </li>
            </ul>
          </div>

          <p className={styles.infoText}>
            <span className={styles.emoji}>ℹ️</span> Оскільки це інвазивне
            втручання, перед процедурою обов'язково проводиться обстеження.
          </p>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                🛡️ Підготовка до діагностичної лапароскопії
              </h3>
              <p className={styles.text}>
                Оскільки процедура відбувається під загальним наркозом,
                необхідно:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>📋</span> здати аналізи та
                  пройти обстеження за призначенням лікаря;
                </li>
                <li>
                  <span className={styles.emoji}>🥗</span> за кілька днів
                  перейти на полегшену дієту;
                </li>
                <li>
                  <span className={styles.emoji}>🚫</span> утриматися від їжі
                  ввечері напередодні операції;
                </li>
                <li>
                  <span className={styles.emoji}>🚿</span> у день операції не
                  їсти й не пити, зробити очисну клізму.
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                ⚙️ Як проходить діагностична лапароскопія
              </h3>
              <ol className={styles.numberedList}>
                <li>
                  <span className={styles.emoji}>🛏️</span> Пацієнта укладають на
                  операційний стіл та вводять анестезію.
                </li>
                <li>
                  <span className={styles.emoji}>✂️</span> Лікар виконує прокол
                  в області пупка та вводить лапароскоп.
                </li>
                <li>
                  <span className={styles.emoji}>💨</span> Через прокол подають
                  вуглекислий газ для підняття стінки живота та покращення
                  огляду.
                </li>
                <li>
                  <span className={styles.emoji}>🎥</span> Хірург оглядає
                  внутрішні органи за допомогою мікрокамери.
                </li>
                <li>
                  <span className={styles.emoji}>🛠️</span> У разі потреби
                  виконуються додаткові проколи для усунення виявленої
                  патології.
                </li>
              </ol>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                ♻️ Відновлення після діагностичної лапароскопії
              </h3>
              <p className={styles.text}>
                Після втручання пацієнт перебуває під наглядом у стаціонарі
                протягом 1–2 днів. Після виписки рекомендується:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🏃‍♂️</span> обмежити фізичні
                  навантаження на 2–3 тижні;
                </li>
                <li>
                  <span className={styles.emoji}>🚫</span> уникати лазень, саун
                  та басейнів;
                </li>
                <li>
                  <span className={styles.emoji}>🚿</span> замінити ванну на
                  душ.
                </li>
              </ul>
              <p className={styles.infoText}>
                <span className={styles.emoji}>📋</span> Докладні індивідуальні
                рекомендації можна отримати на консультації у нашого лікаря.
              </p>
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <LaparoscopyGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaparoscopyDiagnostic;
