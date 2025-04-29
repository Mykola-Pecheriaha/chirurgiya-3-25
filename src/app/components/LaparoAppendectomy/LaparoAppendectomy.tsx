'use client';
import styles from './LaparoAppendectomy.module.css';
import { AppendectGallery } from './AppendectGallery';

interface LaparoAppendectomyProps {
  backgroundColor?: string;
}

export function LaparoAppendectomy({
  backgroundColor = '#f8f9fa',
}: LaparoAppendectomyProps) {
  return (
    <section className={styles.appendectomySection} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>📌 Лапароскопічна апендектомія</h2>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🩺 Апендицит — загальні відомості</h3>
          <p className={styles.text}>
            Апендицит — це запалення червоподібного відростка (апендикса), яке
            може протікати:
          </p>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🔥</span> у гострій формі
              (найчастіше),
            </li>
            <li>
              <span className={styles.emoji}>♻️</span> або в хронічній (рідше).
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>❗ Основні симптоми апендициту:</h3>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🔪</span> Гострий біль у правій
              нижній частині живота, що посилюється при русі, кашлі або чханні
            </li>
            <li>
              <span className={styles.emoji}>💥</span> Напруга м'язів живота
            </li>
            <li>
              <span className={styles.emoji}>🎈</span> Здуття черевної стінки
            </li>
            <li>
              <span className={styles.emoji}>⚖️</span> Диспепсичні розлади:
              <ul className={styles.nestedList}>
                <li>одноразова діарея</li>
                <li>згодом — затримка газів та випорожнень</li>
              </ul>
            </li>
            <li>
              <span className={styles.emoji}>🤢</span> Нудота та блювання
            </li>
            <li>
              <span className={styles.emoji}>👅</span> Відчуття сухості в роті
            </li>
            <li>
              <span className={styles.emoji}>😴</span> Загальна слабкість,
              нездужання
            </li>
            <li>
              <span className={styles.emoji}>🌡️</span> Підвищення температури
              (частіше до 37–37,5 °C)
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>⚠️ Можливі ускладнення</h3>
          <p className={styles.text}>
            Без своєчасного лікування апендицит може призвести до тяжких
            наслідків:
          </p>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🦠</span> Перитоніт
            </li>
            <li>
              <span className={styles.emoji}>💉</span> Абсцеси
            </li>
            <li>
              <span className={styles.emoji}>🧊</span> Апендикулярний інфільтрат
            </li>
            <li>
              <span className={styles.emoji}>⚰️</span> Летальний кінець (у
              виняткових випадках)
            </li>
          </ul>
          <p className={styles.text}>
            <span className={styles.emoji}>🔍</span> Найефективнішим методом
            лікування є хірургічне видалення апендикса — апендектомія.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🔧 Лапароскопічна апендектомія</h3>
          <p className={styles.text}>
            Це сучасна малоінвазивна процедура, яка виконується за допомогою
            спеціального ендоскопічного обладнання та має багато переваг:
          </p>

          <h4 className={styles.listTitle}>🧾 Показання до операції:</h4>
          <p className={styles.text}>
            <span className={styles.emoji}>👨‍⚕️</span> Такі ж, як і для
            традиційної апендектомії.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>📌</span> Застосовується при:
          </p>
          <ul className={styles.bulletList}>
            <li>катаральному</li>
            <li>флегмонозному</li>
            <li>гангренозному апендициті</li>
            <li>ускладнених формах</li>
          </ul>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>🛌 Анестезія та підготовка:</h3>
              <p className={styles.text}>
                <span className={styles.emoji}>💉</span> Операція проводиться
                під загальним знеболенням, тому вимагає ретельної
                передопераційної підготовки.
              </p>
              <p className={styles.text}>
                <span className={styles.emoji}>⚠️</span> Не рекомендується
                виконувати лапароскопію при:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🚫</span> Термінальних станах
                </li>
                <li>
                  <span className={styles.emoji}>🚫</span> Порушеннях згортання
                  крові
                </li>
                <li>
                  <span className={styles.emoji}>🚫</span> Декомпенсованих
                  хворобах життєво важливих органів
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                📋 Необхідні аналізи перед операцією:
              </h3>
              <p className={styles.text}>
                <span className={styles.emoji}>🧪</span> Лапароскопічна
                апендектомія вимагає оцінки таких показників:
              </p>
              <ol className={styles.numberedList}>
                <li>
                  <span className={styles.emoji}>🩸</span> Група крові та
                  резус-фактор
                </li>
                <li>
                  <span className={styles.emoji}>🧪</span> Загальний аналіз
                  крові
                </li>
                <li>
                  <span className={styles.emoji}>🧪</span> Загальни аналіз сечі
                </li>
                <li>
                  <span className={styles.emoji}>🧪</span> Біохімічний аналіз
                  крові
                </li>
                <li>
                  <span className={styles.emoji}>🧪</span> Коагулограмма
                </li>

                <li>
                  <span className={styles.emoji}>💓</span> ЕКГ
                </li>
              </ol>

              <h4 className={styles.listTitle}>🔬 Підготовка до операції</h4>
              <p className={styles.text}>
                <span className={styles.emoji}>🕐</span> Гострий апендицит — це
                ургентна ситуація.
              </p>
              <p className={styles.text}>
                Отже, підготовка має бути максимально швидкою:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>💬</span> Огляд анестезіолога
                </li>
                <li>
                  <span className={styles.emoji}>🩺</span> При потребі — огляд
                  терапевта
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>🔍 Як відбувається операція?</h3>
              <h4 className={styles.listTitle}>🛏️ Анестезія:</h4>
              <p className={styles.text}>
                Операція виконується під загальним наркозом.
              </p>
              <h4 className={styles.listTitle}>🔧 Хід втручання:</h4>
              <ul className={styles.bulletList}>
                <li>
                  Вводиться лапароскоп та інструменти через маленькі проколи 🪡
                </li>
                <li>Черевна порожнина наповнюється газом для кращого огляду</li>
                <li>Зображення передається на великий монітор 🎥</li>
              </ul>
              <h4 className={styles.listTitle}>
                🔍 Під час операції лікар може оглянути:
              </h4>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🏵</span> Печінку
                </li>
                <li>
                  <span className={styles.emoji}>🟡</span> Жовчний міхур
                </li>
                <li>
                  <span className={styles.emoji}>🧴</span> Сечовий міхур
                </li>
                <li>
                  <span className={styles.emoji}>🚺</span> Матку і придатки (у
                  жінок)
                </li>
                <li>
                  <span className={styles.emoji}>🌀</span> Тонкий кишечник
                </li>
                <li>
                  <span className={styles.emoji}>🧱</span> Ділянки товстої кишки
                </li>
              </ul>

              <h4 className={styles.listTitle}>🗂 Головна мета:</h4>
              <p className={styles.text}>
                <span className={styles.emoji}>📍</span> Визначити точне
                розташування апендикса та видалити його.
              </p>
              <p className={styles.text}>
                У разі гною або запалення — проводиться дренаж та обробка
                порожнини.
              </p>
              <p className={styles.text}>
                <span className={styles.emoji}>🔚</span> Наприкінці — проколи
                закриваються косметичними швами.
              </p>
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <AppendectGallery />
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🏥 Післяопераційний період</h3>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🛌</span> Пацієнт залишається у
              стаціонарі 1–2 дні під наглядом
            </li>
            <li>
              <span className={styles.emoji}>🏠</span> Потім виписується додому
            </li>
          </ul>

          <h3 className={styles.subTitle}>💪 Відновлення</h3>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>⏱</span> Повна працездатність
              зазвичай повертається через 1–2 тижні
            </li>
            <li>
              <span className={styles.emoji}>⌛</span> Точні терміни —
              індивідуальні
            </li>
            <li>
              <span className={styles.emoji}>📋</span> Успіх залежить від
              дотримання рекомендацій лікаря
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LaparoAppendectomy;
