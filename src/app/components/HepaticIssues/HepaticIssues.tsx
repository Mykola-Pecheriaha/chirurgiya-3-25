'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './HepaticIssues.module.css';

interface HepaticIssuesProps {
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  fontSize?: {
    paragraph: string;
    heading2: string;
    heading4: string;
    listItem: string;
  };
  imageUrl?: string;
  imageAlt?: string;
  secondImageUrl?: string;
  secondImageAlt?: string;
  thirdImageUrl?: string;
  thirdImageAlt?: string;
  fourthImageUrl?: string;
  fourthImageAlt?: string;
  fifthImageUrl?: string;
  fifthImageAlt?: string;
}

const HepaticIssues: React.FC<HepaticIssuesProps> = ({
  backgroundColor = '#f8f9fa',
  textColor = '#333333',
  headingColor = '#1eaaf1',
  fontSize = {
    paragraph: '1.3rem',
    heading2: '2.5rem',
    heading4: '1.5rem',
    listItem: '1.3rem',
  },
  imageUrl = '/images/liver/liver1.jpg',
  imageAlt = 'Хвороби печінки',
  secondImageUrl = '/images/liver/liver2.jpg',
  secondImageAlt = 'Симптоми захворювань печінки',
  thirdImageUrl = '/images/liver/liver3.jpg',
  thirdImageAlt = 'Лікування захворювань печінки',
  fourthImageUrl = '/images/liver/liver4.jpg',
  fourthImageAlt = 'Діагностика захворювань печінки',
  fifthImageUrl = '/images/liver/liver7.jpg',
  fifthImageAlt = 'Профілактика захворювань печінки',
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
          Хвороби печінки
        </h2>

        <div className={styles.introText}>
          <p style={textStyle}>
            <strong>Печінка</strong> –{' '}
            <strong>
              життєво важливий орган, який виконує безліч функцій у нашому
              організмі.
            </strong>{' '}
            Вона відповідає за очищення крові, метаболізм, вироблення білків і
            збереження поживних речовин. Тому будь-які її захворювання можуть
            призвести до серйозних порушень усього організму.
          </p>
          <p style={textStyle}>
            Хірургічні патології печінки часто вимагають оперативного втручання.
            Якщо лікування розпочато вчасно, функції органу можна майже повністю
            відновити, що значно покращує якість життя пацієнта. Однак, у разі
            запущених станів хвороба може мати критичні наслідки, аж до
            летального кінця.
          </p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <p style={textStyle}>
              <strong>Кіста на печінці</strong> — доброякісна пухлина у вигляді
              капсули, наповненої прозорою або жовтуватою рідиною.
            </p>

            <h4 style={heading4Style}>Види кіст печінки</h4>
            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                <strong>Істинними</strong> — вроджені, формуються через
                патологічні зміни жовчних проток під час внутрішньоутробного
                розвитку. До них відносяться кістофіброз, полікістоз і солітарні
                кісти. Їхня внутрішня поверхня складається з клітин епітелію.
              </li>
              <li style={listItemStyle}>
                <strong>Хибними</strong> — зявляються в результаті травм, різних
                запальних захворювань, внутрішня поверхня вистелена фіброзними
                тканинами.
              </li>
              <li style={listItemStyle}>
                <strong>Паразитарними</strong> — виникають у результаті
                протозойного інфікування або глистової інвазії. Бувають
                ехінококовими та альвеококовими.
              </li>
              <li style={listItemStyle}>
                <strong>Непаразитарними</strong> — виникають з безлічі різних
                причин, включаючи травми і прийом гормональних препаратів, в
                більшості випадків виявляються випадково.
              </li>
            </ul>

            <h4 style={heading4Style}>
              Симптоми, які свідчать про наявність кісти печінки
            </h4>
            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                Симптоми наявності кисти печінки досить загальні і різноманітні.
                Настороження про захворювання печінки може викликати такий
                симптом як жовтушність.
              </li>
              <li style={listItemStyle}>
                При появи любих даже незначних ознаків погіршення самопочуття,
                яке наможа пояснити, слід звернутися до{' '}
                <strong className={styles.emphasis}>ЛІКАРЯ</strong>. Як правело
                при звернення до лікаря хворому призначається УЗД. Киста дость
                гарно видно при цьому дослідженні. Далі сперціаліст дообстежує
                пацієнта. КТ. МРТ. і вирішується подальша тактика лікування.
              </li>
            </ul>

            <h4 style={heading4Style}>Які ускладнення дає кіста в печінці</h4>
            <ul className={styles.bulletList}>
              <li style={listItemStyle}>
                Субкапсулярні кісти невеликого розміру не становлять небезпеки
                для здоровя і не викликають дискомфорту, проте зі збільшенням
                їхнього розміру ризик неприємних наслідків зростає в рази. Серед
                можливих ускладнень:
              </li>
              <li style={listItemStyle}>
                холецистит, що супроводжується зниженням працездатності,
                слабкістю, задишкою, сонливістю і втратою апетиту;
              </li>
              <li style={listItemStyle}>
                здавлювання шлунка і кишечника та, як наслідок, порушення
                травлення, ниркові і печінкові кольки;
              </li>
              <li style={listItemStyle}>
                запалення жовчовивідних шляхів і механічна жовтяниця;
              </li>
              <li style={listItemStyle}>
                запалення і нагноєння кісти з її подальшим розривом (перитоніт);
              </li>
              <li style={listItemStyle}>
                внутрішні кровотечі та крововиливи в стінку печінки;
              </li>
              <li style={listItemStyle}>перекрут новоутворення;</li>
              <li style={listItemStyle}>переродження в злоякісну пухлину;</li>
              <li style={listItemStyle}>
                зараження організму гельмінтами при розриві паразитарної кісти і
                поширенні паразитів у сусідні органи;
              </li>
              <li style={listItemStyle}>летальний результат.</li>
            </ul>

            <h4 style={heading4Style}>
              Розпізнати розвиток ускладнень можна за такими симптомами:
            </h4>
            <ul className={styles.bulletList}>
              <li style={listItemStyle}>гострий біль у правому підреберї;</li>
              <li style={listItemStyle}>
                підвищення температури тіла, що супроводжується слабкістю та
                ознобом;
              </li>
              <li style={listItemStyle}>порушення сну та апетиту;</li>
              <li style={listItemStyle}>забарвлення сечі в темний колір;</li>
              <li style={listItemStyle}>пожовтіння шкіри й очних склер;</li>
              <li style={listItemStyle}>блювота і нудота;</li>
              <li style={listItemStyle}>значне збільшення печінки.</li>
            </ul>
            <p style={textStyle}>
              {' '}
              Піся встановлення діагнозу
              <strong>лікарем буде визначено </strong> –{' '}
              <strong>про метод і обєм оперативного втручання.</strong>
            </p>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.stickyImagesContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={imageUrl || '/placeholder.svg'}
                  alt={imageAlt}
                  width={400}
                  height={300}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src =
                      '/placeholder.svg?height=300&width=400&text=Хвороби+печінки';
                  }}
                />
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={secondImageUrl || '/placeholder.svg'}
                  alt={secondImageAlt}
                  width={400}
                  height={300}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src =
                      '/placeholder.svg?height=300&width=400&text=Симптоми';
                  }}
                />
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={thirdImageUrl || '/placeholder.svg'}
                  alt={thirdImageAlt}
                  width={400}
                  height={300}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src =
                      '/placeholder.svg?height=300&width=400&text=Лікування';
                  }}
                />
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={fourthImageUrl || '/placeholder.svg'}
                  alt={fourthImageAlt}
                  width={400}
                  height={300}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src =
                      '/placeholder.svg?height=300&width=400&text=Діагностика';
                  }}
                />
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={fifthImageUrl || '/placeholder.svg'}
                  alt={fifthImageAlt}
                  width={400}
                  height={300}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src =
                      '/placeholder.svg?height=300&width=400&text=Профілактика';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HepaticIssues;
