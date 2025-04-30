'use client';
import styles from './Laparogernio.module.css';
import { GernioGallery } from './GernioGallery';
import { HiatalGallery } from './HiatalGallery';

interface LaparogernioProps {
  backgroundColor?: string;
}

export function Laparogernio({
  backgroundColor = '#f8f9fa',
}: LaparogernioProps) {
  return (
    <section className={styles.gernioSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>📌 Лапароскопічна герніотомія</h2>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🩺 Лапароскопічна герніопластика</h3>
          <p className={styles.text}>
            <span className={styles.emoji}>🔹</span> Лапароскопічна
            герніопластика — це сучасний, малоінвазивний метод усунення гриж.
          </p>
          <ul className={styles.checkList}>
            <li>
              <span className={styles.emoji}>✅</span> Не потребує великих
              розрізів
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Не залишає помітних
              рубців
            </li>
            <li>
              <span className={styles.emoji}>✅</span> Всі маніпуляції
              виконуються через невеликі проколи, в які вводяться
              мікроінструменти та лапароскоп – оптична трубка, яка дозволяє
              хірургу бачити область втручання.
            </li>
          </ul>
          <p className={styles.text}>
            <span className={styles.emoji}>🧠</span> Лапароскопічна
            герніопластика є ефективною альтернативою відкритій (ненатяжній)
            операції.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>
            📌 Показання до лапароскопічної герніотомії:
          </h3>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🦵</span> Стегнові грижі
            </li>
            <li>
              <span className={styles.emoji}>🤰</span> Грижі в області паху
            </li>
            <li>
              <span className={styles.emoji}>🫁</span> Грижі стравохідного
              отвору діафрагми
            </li>
            <li>
              <span className={styles.emoji}>🔸</span> Грижі спігелієвої лінії
            </li>
            <li>
              <span className={styles.emoji}>🧷</span> Пупкові грижі
            </li>
            <li>
              <span className={styles.emoji}>📏</span> Грижі білої лінії живота
            </li>
            <li>
              <span className={styles.emoji}>🩹</span> Післяопераційні грижі
            </li>
            <li>
              <span className={styles.emoji}>📉</span> Діастаз прямих м'язів
              живота
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>⚠️ Протипоказання:</h3>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>😷</span> Хронічні захворювання, що
              унеможливлюють інтубаційний наркоз
            </li>
            <li>
              <span className={styles.emoji}>🚨</span> Защемлені грижі
            </li>
            <li>
              <span className={styles.emoji}>⚖️</span> Великі післяопераційні
              грижі
            </li>
          </ul>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>✅ Переваги методу:</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>⏳</span> Короткий період
                  реабілітації
                </li>
                <li>
                  <span className={styles.emoji}>💊</span> Мінімальний
                  післяопераційний біль
                </li>
                <li>
                  <span className={styles.emoji}>🧵</span> Мінімальне ушкодження
                  тканин, шкіри та м'язів
                </li>
                <li>
                  <span className={styles.emoji}>🔬</span> Низький ризик
                  ускладнень (до 0,3%)
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>
                📋 Передопераційне обстеження:
              </h3>
              <ol className={styles.numberedList}>
                <li>
                  <span className={styles.emoji}>🩸</span> Група крові та
                  резус-фактор
                </li>
                <li>
                  <span className={styles.emoji}>🧫</span> Аналіз крові на
                  гепатит C, ВІЛ, сифіліс
                </li>
                <li>
                  <span className={styles.emoji}>💉</span> Загальні аналізи
                  крові та сечі
                </li>
                <li>
                  <span className={styles.emoji}>🍬</span> Глюкоза крові
                </li>
                <li>
                  <span className={styles.emoji}>🧬</span> Біохімічний аналіз
                </li>
                <li>
                  <span className={styles.emoji}>🧾</span> Коагулограма
                </li>
                <li>
                  <span className={styles.emoji}>❤️</span> ЕКГ, огляд терапевта
                  та анестезіолога
                </li>
                <li>
                  <span className={styles.emoji}>🖥️</span> ФОГК
                </li>
                <li>
                  <span className={styles.emoji}>📄</span> Висновок терапевта
                </li>
                <li>
                  <span className={styles.emoji}>👨‍⚕️</span> Передопераційний
                  огляд анестезіолога
                </li>
              </ol>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>📌 Додаткові рекомендації:</h3>
              <h4 className={styles.listTitle}>🥗 Харчування:</h4>
              <ul className={styles.bulletList}>
                <li>Останній прийом їжі — до 19:00 напередодні</li>
                <li>
                  За 2–3 дні виключити продукти, що викликають газоутворення
                </li>
                <li>
                  <span className={styles.emoji}>🚿</span> Очисна клізма — за
                  потреби ввечері та за 1–1,5 години до операції
                </li>
              </ul>
              <h4 className={styles.listTitle}>💊 Медикаменти:</h4>
              <ul className={styles.bulletList}>
                <li>
                  Якщо ви приймаєте препарати — обов'язково узгодьте з хірургом,
                  можливо, їх доведеться припинити тимчасово
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <GernioGallery />
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🔍 Як проводиться операція?</h3>
          <p className={styles.text}>
            Після огляду та діагностики хірург визначає тип грижі й обирає метод
            втручання:
          </p>
          <h4 className={styles.listTitle}>
            🔧 Види лапароскопічної герніопластики:
          </h4>
          <ul className={styles.bulletList}>
            <li>
              <strong>TAPP (трансабдомінальна передчеревна)</strong> –
              встановлення сітки через розріз очеревини
            </li>
            <li>
              <strong>TEP (тотальна екстраперитонеальна)</strong> – втручання в
              передчеревному просторі без розтину очеревини
            </li>
          </ul>
          <p className={styles.text}>
            <span className={styles.emoji}>⚠️</span> Метод складніший, але
            знижує ризик ускладнень
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🔹</span> Під час операції робляться
            проколи до 10 мм, вводиться лапароскоп та подається вуглекислий газ
            для огляду.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🧵</span> Сітчастий імплант
            (алопротез) накладається на грижові ворота, не викликає алергій та
            добре приживається.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>♻️ Реабілітація</h3>
          <p className={styles.text}>
            <span className={styles.emoji}>🏃‍♂️</span> Вже через 2 тижні більшість
            пацієнтів повертаються до звичного життя.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>👨‍⚕️</span> Операції проводяться
            досвідченими хірургами в умовах сучасного стаціонару з використанням
            передових технологій та матеріалів — для максимально швидкого
            відновлення та найкращого результату.
          </p>
        </div>

        <h2 className={styles.mainTitle}>
          🫀 Грижа стравохідного отвору діафрагми (хіатальна грижа)
        </h2>

        <div className={styles.contentBlock}>
          <p className={styles.text}>
            Грижа стравохідного отвору діафрагми — це патологія
            шлунково-кишкового тракту, за якої верхня частина шлунка потрапляє у
            грудну порожнину через отвір у діафрагмі. Найчастіше це відбувається
            через ослаблення нижнього стравохідного сфінктера, що спричиняє
            закид вмісту шлунка в стравохід (рефлюкс).
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🔍</span> Виділяють два типи:
          </p>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🧬</span> Вроджена (нетипова форма)
            </li>
            <li>
              <span className={styles.emoji}>🧪</span> Набута (найпоширеніша)
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>❗ Причини виникнення</h3>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>⚠️</span> Підвищений
              внутрішньочеревний тиск (травми, вагітність, пухлини)
            </li>
            <li>
              <span className={styles.emoji}>🔁</span> Порушення перистальтики
              стравоходу
            </li>
            <li>
              <span className={styles.emoji}>🩺</span> Інші хвороби ШКТ
              (виразка, панкреатит, холецистит)
            </li>
            <li>
              <span className={styles.emoji}>👶</span> Вроджені аномалії
            </li>
          </ul>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>📌 Основні симптоми</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>🔥</span> Печія, особливо після
                  їжі
                </li>
                <li>
                  <span className={styles.emoji}>❤️</span> Біль у грудній клітці
                  або серці після їжі чи фізичних навантажень
                </li>
                <li>
                  <span className={styles.emoji}>😮‍💨</span> Відрижка повітрям або
                  з кислим/гірким присмаком
                </li>
                <li>
                  <span className={styles.emoji}>🥴</span> Труднощі при ковтанні
                </li>
                <li>
                  <span className={styles.emoji}>🧱</span> Відчуття тяжкості чи
                  переповнення шлунка
                </li>
                <li>
                  <span className={styles.emoji}>🩸</span> Блювота з домішками
                  крові або темні калові маси (при ускладненнях)
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>🔬 Діагностика</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>📹</span> Гастроскопія — який
                  показує можливість наявності грижі
                </li>
                <li>
                  <span className={styles.emoji}>🩻</span> Рентген з контрастом
                  (сульфат барію) - підтверджує наявність грижі
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subTitle}>💊 Передопераційне лікування</h3>
              <ul className={styles.bulletList}>
                <li>
                  <span className={styles.emoji}>📉</span> Медикаменти для
                  зменшення кислотності шлунка
                </li>
                <li>
                  <span className={styles.emoji}>🍽</span> Спеціальне харчування
                  (дробне, без кави, пряного, алкоголю)
                </li>
                <li>
                  <span className={styles.emoji}>🚭</span> Відмова від куріння
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <HiatalGallery />
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>🔧 Хірургічне лікування</h3>
          <p className={styles.text}>
            <span className={styles.emoji}>✔️</span> Лапароскопічна
            фундоплікація або
            <br />
            <span className={styles.emoji}>✔️</span> Торакоскопія
          </p>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.emoji}>🔸</span> Операція триває: 90–120
              хв
            </li>
            <li>
              <span className={styles.emoji}>🔸</span> Анестезія: загальна
            </li>
            <li>
              <span className={styles.emoji}>🔸</span> Госпіталізація: 1–2 дні
            </li>
          </ul>
          <p className={styles.text}>
            <span className={styles.emoji}>🔬</span> Через міліметрові проколи
            вводяться інструменти та відеокамера. Частина стінки шлунка
            формується у "муфту", яка ущільнює стравохідний отвір у діафрагмі та
            відновлює функцію сфінктера.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>♻️ Післяопераційний період</h3>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.emoji}>🏥</span> Стаціонар: 1–2 доби
            </li>
            <li>
              <span className={styles.emoji}>🏡</span> Виписка з детальними
              рекомендаціями
            </li>
            <li>
              <span className={styles.emoji}>📆</span> Дотримання режиму та
              прийом препаратів — протягом 1 місяця
            </li>
          </ul>
          <p className={styles.text}>
            Грамотно проведене лапароскопічне втручання дозволяє повністю
            усунути рефлюкс, повернути комфорт життя та запобігти ускладненням у
            майбутньому.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Laparogernio;
