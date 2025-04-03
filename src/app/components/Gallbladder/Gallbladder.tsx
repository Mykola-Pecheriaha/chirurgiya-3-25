'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './Gallbladder.module.css';

interface GallbladderProps {
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  fontSize?: {
    paragraph: string;
    heading2: string;
    heading3: string;
    heading4: string;
    listItem: string;
  };
  images?: {
    url: string;
    alt: string;
  }[];
}

const Gallbladder: React.FC<GallbladderProps> = ({
  backgroundColor = '#f8f9fa',
  textColor = '#333333',
  headingColor = '#1eaaf1',
  fontSize = {
    paragraph: '1rem',
    heading2: '2.5rem',
    heading3: '1.8rem',
    heading4: '1.5rem',
    listItem: '1rem',
  },
  images = [
    {
      url: '/images/gallbladder/liver18.jpg',
      alt: 'Жовчевий міхур',
    },
    {
      url: '/images/liver17.jpg',
      alt: 'Печінкова коліка',
    },
    {
      url: '/images/liver23.jpg',
      alt: 'Печінкова коліка',
    },
    {
      url: '/images/gallbladder/uzdchol.jpg',
      alt: 'Хронічний холецистит',
    },
    {
      url: '/images/gallbladder/liver19.jpg',
      alt: 'Лапароскопічна холецистектомія',
    },
    {
      url: '/images/gallbladder/holetistectoml.jpg',
      alt: 'Ускладнення',
    },
    {
      url: '/images/gallbladder/liver22.jpg',
      alt: 'Холангіт',
    },
    {
      url: '/images/gallbladder/hfhslotomi.jpg',
      alt: 'Діагностика',
    },
    {
      url: '/images/gallbladder/liver20.jpg',
      alt: 'Лікування',
    },
    {
      url: '/images/gallbladder/liver12.jpg',
      alt: 'Реабілітація',
    },
  ],
}) => {
  // Стилі для тексту, які можна змінювати через props
  const textStyle = {
    color: textColor,
    fontSize: fontSize.paragraph,
  };

  const heading2Style = {
    color: headingColor,
    fontSize: fontSize.heading2,
  };

  const heading3Style = {
    color: headingColor,
    fontSize: fontSize.heading3,
  };

  const heading4Style = {
    color: headingColor,
    fontSize: fontSize.heading4,
  };

  const listItemStyle = {
    color: textColor,
    fontSize: fontSize.listItem,
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title} style={heading2Style}>
          Хвороби жовчевого міхура та жовчевивідних шляхів
        </h2>

        <div className={styles.introText}>
          <p style={textStyle}>
            Наявність конкрементів (у народі — «каміння») у жовчному міхурі
            тривалий час може не проявлятися жодними симптомами. Часто це стає
            випадковою знахідкою під час ультразвукового дослідження (УЗД)
            черевної порожнини, проведеного з іншої причини.
          </p>
          <p style={textStyle}>
            Однак захворювання може проявитися раптово у вигляді сильного болю в
            правому підреберї — так званої печінкової коліки. Вона виникає, коли
            конкременти зміщуються в шийку жовчного міхура та перекривають його
            вихід.
          </p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <p style={textStyle}>
              У більшості випадків утворення жовчних каменів повязане з
              особливостями способу життя пацієнта.
            </p>

            <h3 style={heading3Style}>Ризики підвищуються у людей, які:</h3>

            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                їдять багато жирної їжі, насиченої холестерином;
              </li>
              <li style={listItemStyle}>
                захоплюються виснажливими дієтами і голодуванням;
              </li>
              <li style={listItemStyle}>різко набирають або втрачають вагу;</li>
              <li style={listItemStyle}>мало рухаються;</li>
              <li style={listItemStyle}>
                страждають хворобами печінки, кишківника, цукровим діабетом;
              </li>
              <li style={listItemStyle}>зловживають алкоголем.</li>
            </ul>

            <h3 style={heading3Style}>Ознаки захворювання жовчевого міхура</h3>

            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                Виражена біль в правому підребіррі з поширенням на ввесь живі, а
                часом в праву лопатку і шию.
              </li>
              <li style={listItemStyle}>
                Біль буває настільки виражена, що у хворого може раптово
                знизитися тиск і втрата сідомості.
              </li>
              <li style={listItemStyle}>
                нудить, але блювота не приносить полегшенняя;
              </li>
              <li style={listItemStyle}>
                Згодом чоже бути підвищення температури тіла
              </li>
              <li style={listItemStyle}>
                Може бути і поява жовтушності шкіри і слизових
              </li>
            </ul>

            <h4 style={heading4Style}>Додаткові методи дослідження </h4>

            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                УЗД, яке дозволяє побачити вміст жовчного міхура і жовчних
                протоків, оцінити їх розмір і стан, стінок жовчного міхура;
              </li>
              <li style={listItemStyle}>
                лабораторні аналізи, які демонструють вміст холестерину і
                білірубіну в крові;
              </li>
              <li style={listItemStyle}>
                МРТ застосовується, коли треба більш детально дослідити стан
                жовчовивідних шляхів.
              </li>
            </ul>

            <li style={listItemStyle}>
              Часом у хворого виникаю періодичні болі і дискомфорт в правому
              підребіррі. Хворі самостійно приймають ліки і досить довго не
              звертаються до лікаря. Більша частина з них знають що мають каміня
              в жовчевому міхурі. Хвороба приймає хронічний характер
            </li>

            <h4 style={heading4Style}>Хронічний холецистит</h4>
            <p style={textStyle}>
              По мірі того, як хвороба прогресує, стінки міхура неминуче
              стоншуються, і орган може втратити свою функціональність. Також
              може спричинити серйозне ускладнення закупорка протоків,
              інфікування жовчного міхура і т. д. Тому необхідно вчасно
              звернутися за допомогою і провести хірургічне лікування в
              плановому режимі.
            </p>
            <p style={textStyle}>
              Часом у хворого виникаю періодичні болі і дискомфорт в правому
              підребіррі. Хворі самостійно приймають ліки і досить довго не
              звертаються до лікаря. Більша частина з них знають що мають каміня
              в жовчевому міхурі. Хвороба приймає хронічний характер - хронічний
              калькульозний холецистит..
            </p>
            <p style={textStyle}>
              При хронічному холециститі, крім названих вище симптомів, людина
              може відчувати біль у правому підреберї, що віддає в інші відділи
              живота, іноді навіть в серці, присмак гіркоти у роті, відрижку.
              Незалежно від того, як довго хворий носить каміння в жовчевому
              міхурі - Загострення хвороби і винекнення печінкової кольки може
              зявитися будь коли і як правило в самий непідходящий момент.
            </p>

            <h3 style={heading3Style}>Як лікувати?</h3>

            <h4 style={heading4Style}>Видалення жовчевого міхура</h4>
            <p style={textStyle}>
              <strong>Лапароскопічна холецистектомія</strong>
            </p>
            <p style={textStyle}>
              Золотим стандартом в лікуванні жовчнокамяної хвороби сьогодні є
              лапароскопічне (малоінвазивне) видалення жовчевого міхура. Сучасна
              лапароскопічна операція значно зменшує страждання пацієнта в
              післяопераційному періоді за рахунок відсутності розрізів
              передньої черевної стінки, коли доступ до хворого органу
              (жовчевого міхура) виконується за допомогою постановки портів (0,5
              - 10,0 мм),через які вводиться відіокамера та маніпулятори.
              Пацієнт через одну дві доби може бути виписаний на амбулаторне
              лікування. Операці дозволяє позбутися від хвороби назавжди.
            </p>

            <h4 style={heading4Style}>
              Додаткові позитиви малоішвазивної лапараскопічної холецистектомії
            </h4>
            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                Немає великих розрізів - що дозволяє знизити крововтрату і
                больовий ефект.
              </li>
              <li style={listItemStyle}>
                Зниження ризику помилки - всі маніпуляції проводяться під
                контролем відеокамери з багаторазовим збільшенням для більш
                прицинзійної техніки операції
              </li>
              <li style={listItemStyle}>
                Короткий термін реабілітації – виписатись зі стаціонару можна
                через 1-3 дні.
              </li>
              <li style={listItemStyle}>
                • Естетичність - після втручання не залишається грубих помітних
                шрамів. Сліди проколів майже не помічаються на тілі.
              </li>
              <li style={listItemStyle}>Профілактика післяопераційних гриж</li>
              <li style={listItemStyle}>
                Профілактика нагноєнь операційної рани
              </li>
              <li style={listItemStyle}>
                Профілактика утворення злук і злукової хвороби
              </li>
            </ul>

            <h4 style={heading4Style}>
              Ускладнення при довгому носінні конкрементів в жовчевому міхурі
            </h4>
            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                Водянка жовчевого міхура - це відключений жовчевий міхур з
                прозорою рідиною
              </li>
              <li style={listItemStyle}>
                Емпієма жовчевого міхура - жовчевий міхур у вигляді мішочка з
                гнійним вмістом
              </li>
              <li style={listItemStyle}>
                Жовтянниця - пожовтіння шкіри та слизових як наслідок закупорки
                протоків жовчевих протоків
              </li>
              <li style={listItemStyle}>
                Утворення нориць і кишкова непрохідність
              </li>
              <li style={listItemStyle}>
                Холангіт - запаленнч жовчевивідних протоків
              </li>
              <li style={listItemStyle}>Рак жовчевого міхура</li>
            </ul>

            <h4 style={heading4Style}>Холангіт</h4>
            <p style={textStyle}>
              Холангіт – гостре або хронічне запалення жовчовивідних протоків.
              Як внутрішньопечінкових, якими жовч збирається в жовчний міхур,
              так і позапечінкових, крізь які жовч надходить із міхура у
              дванадцятипалу кишку.
            </p>

            <h4 style={heading4Style}>Найпоширеніші причини холангіту:</h4>
            <p style={textStyle}>
              жовчнокамяна хвороба, коли конкременти перекривають шлях відтоку
              жовчі, виникає холестаз, у протоках підвищується тиск та
              розвивається запалення а згодом підєднується мікробний фактор;
            </p>

            <h4 style={heading4Style}>Діагностика холангіта</h4>
            <p style={textStyle}>
              Захворюваггя, особливо в гострому періоді протікає виражено і
              хворий як правило звертається до лікаря.
            </p>

            <h4 style={heading4Style}>Лікування холангіту</h4>
            <p style={textStyle}>
              Усунення причини - механічної закупорки жовчевивідних щляхів, один
              із основних етапів лікування
            </p>
            <p style={textStyle}>
              В нашій лікарні проводяться ендоскопічні операції (операції без
              розрізів), коли за допомогою спеціальних інстументів виконується
              механічне очищення жовчевивідних протоків. Далі приєднуються
              консервативні методи лікування у вигляді антибіотиків,
              протизапальних та спазмолітичних препаратів. Проводиться терапія
              по зняттю ітоксикації.
            </p>

            <h4 style={heading4Style}>Реабілітація</h4>
            <p style={textStyle}>
              Після усунення явищ холангіту, хворий передається для подальшого
              нагляду і лікуванню гастроентерологу.
            </p>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.stickyImagesContainer}>
              {images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <Image
                    src={image.url || '/placeholder.svg'}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className={styles.image}
                    onError={(e) => {
                      e.currentTarget.src =
                        '/placeholder.svg?height=200&width=300&text=Зображення';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallbladder;
