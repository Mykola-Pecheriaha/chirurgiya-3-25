'use client';

import type React from 'react';
import Image from 'next/image';
import styles from './ColonSurgery.module.css';

interface ColonSurgeryProps {
  backgroundColor?: string;
}

const ColonSurgery: React.FC<ColonSurgeryProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  // Масив зображень для правої колонки
  const images = [
    {
      url: '/placeholder.svg?height=300&width=400&text=Товстий+кишечник',
      alt: 'Товстий кишечник',
    },
    {
      url: '/placeholder.svg?height=300&width=400&text=Колоректальний+рак',
      alt: 'Колоректальний рак',
    },
    {
      url: '/placeholder.svg?height=300&width=400&text=Лапароскопічна+операція',
      alt: 'Лапароскопічна операція',
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Захворювань товстого кишечника</h2>

        <div className={styles.contentSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.sectionTitle}>
              Основних захворювань товстого кишечника, які потребують
              хірургічного лікування
            </h3>

            <ul className={styles.bulletList}>
              <li>
                <strong>Гостра товстокишкова непрохідність</strong> (пухлинна,
                заворот кишки)
              </li>
              <li>
                <strong>Рак товстого кишечника</strong> (колоректальний рак)
              </li>
              <li>
                <strong>Запальні захворювання кишечника</strong> (виразковий
                коліт, хвороба Крона – при ускладненнях)
              </li>
              <li>
                <strong>Дивертикулярна хвороба</strong> (дивертикуліт із
                перфорацією, абсцесом, кровотечею)
              </li>
              <li>
                <strong>Токсичний мегаколон</strong> (ускладнення виразкового
                коліту)
              </li>
              <li>
                <strong>Поліпи товстого кишечника</strong> (при ризику
                малігнізації)
              </li>
              <li>
                <strong>Заворот сигмоподібної кишки</strong>
              </li>
              <li>
                <strong>Травми товстого кишечника</strong>
              </li>
              <li>
                <strong>Геморой у важких стадіях</strong> (при тромбозі або
                сильній кровотечі)
              </li>
              <li>
                <strong>Анальні тріщини та свищі</strong> (у складних випадках)
              </li>
            </ul>

            <h3 className={styles.sectionTitle}>
              Гострі ургентні стани (вимагають термінової операції)
            </h3>

            <ul className={styles.bulletList}>
              <li>
                <strong>Гостра товстокишкова непрохідність</strong> (пухлинна,
                заворот кишки)
              </li>
              <li>
                <strong>Токсичний мегаколон</strong> (ускладнення виразкового
                коліту)
              </li>
              <li>
                <strong>Дивертикуліт із ускладненнями</strong> (перфорація,
                абсцес, кровотеча)
              </li>
              <li>
                <strong>Заворот сигмоподібної кишки</strong>
              </li>
              <li>
                <strong>Перфорація товстого кишечника</strong> (наприклад, при
                пухлинах чи травмах)
              </li>
              <li>
                <strong>Травми товстого кишечника</strong>
              </li>
              <li>
                <strong>Гострий тромбоз судин кишечника</strong> (інфаркт кишки)
              </li>
              <li>
                <strong>Гнійні перитонеальні процеси</strong> через проривні
                ускладнення
              </li>
            </ul>

            <h3 className={styles.sectionTitle}>
              Планові хірургічні втручання
            </h3>

            <ul className={styles.bulletList}>
              <li>
                <strong>Рак товстого кишечника</strong> (колоректальний рак)
              </li>
              <li>
                <strong>Поліпи товстого кишечника</strong> (при ризику
                переродження в рак)
              </li>
              <li>
                <strong>Хронічна форма виразкового коліту</strong> (якщо
                медикаментозна терапія неефективна)
              </li>
              <li>
                <strong>Дивертикулярна хвороба</strong> (планова операція після
                гострого епізоду)
              </li>
              <li>
                <strong>Важкі форми геморою</strong> (тромбоз, часті кровотечі)
              </li>
              <li>
                <strong>Хронічні анальні свищі та тріщини</strong>
              </li>
              <li>
                <strong>Планові реконструктивні операції</strong> після
                хірургічного лікування гострих станів
              </li>
            </ul>

            <p className={styles.note}>
              Тут також є{' '}
              <span className={styles.highlight}>
                &ldquo;Умовно ургентні стани&rdquo;
              </span>{' '}
              — це ситуації, коли пацієнта можна підготувати до операції
              впродовж кількох днів, але зволікати не можна (наприклад,
              непрохідність пухлинного характеру).
            </p>

            <h3 className={styles.sectionTitle}>
              Ургентні операції (термінові втручання)
            </h3>

            <ul className={styles.bulletList}>
              <li>
                <strong>Колостомія</strong> – при перфорації товстої кишки,
                непрохідності або тяжкому дивертикуліті.
              </li>
              <li>
                <strong>Гартманова операція</strong> – видалення ураженої
                ділянки товстої кишки із виведенням колостоми (при перфораціях,
                пухлинах, перитоніті).
              </li>
              <li>
                <strong>Лапароскопічна резекція товстого кишечника</strong> –
                якщо можливо виконати мінімально інвазивно.
              </li>
              <li>
                <strong>
                  Заворот сигмоподібної кишки: деторсія та фіксація
                </strong>{' '}
                – у разі загрози повторного завороту.
              </li>
              <li>
                <strong>Дренування абсцесів та перитоніту</strong> – при
                ускладненнях (перфоративний дивертикуліт, гнійний перитоніт).
              </li>
            </ul>

            <h3 className={styles.sectionTitle}>
              Планові операції (відкладені, але необхідні втручання)
            </h3>

            <ul className={styles.bulletList}>
              <li>
                <strong>Лапароскопічна колектомія</strong> – при колоректальному
                раку.
              </li>
              <li>
                <strong>Пряма колоноскопічна резекція</strong> – при поліпах із
                високим ризиком малігнізації.
              </li>
              <li>
                <strong>Субтотальна колектомія</strong> – при важкому
                виразковому коліті.
              </li>
              <li>
                <strong>Проктоколектомія з ілеоанальним анастомозом</strong> –
                при сімейному аденоматозному поліпозі.
              </li>
              <li>
                <strong>Операція Лонго (степлерна гемороїдектомія)</strong> –
                при внутрішньому геморої III–IV ступеня.
              </li>
              <li>
                <strong>Фістулектомія або фістулотомія</strong> – при хронічних
                анальних свищах.
              </li>
              <li>
                <strong>Реконструктивні операції (закриття колостоми)</strong> –
                після операції Гартмана.
              </li>
            </ul>

            <h3 className={styles.sectionTitle}>Сучасні тенденції:</h3>

            <ul className={styles.checkList}>
              <li>
                <span className={styles.checkmark}>✅</span>{' '}
                <strong>Лапароскопічні операції</strong> (менш травматичні,
                швидше відновлення) використовуються навіть при пухлинах та
                гострих станах.
              </li>
              <li>
                <span className={styles.checkmark}>✅</span>{' '}
                <strong>Роботизована хірургія (Da Vinci)</strong> поступово
                впроваджується для резекції пухлин. (нажаль у нас не виконуються
                із за відсутності апарата)
              </li>
              <li>
                <span className={styles.checkmark}>✅</span>{' '}
                <strong>Ендоскопічні втручання</strong> (поліпектомія,
                ендоскопічна резекція слизової) допомагають уникнути відкритої
                операції.
              </li>
            </ul>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.stickyImagesContainer}>
              {images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <Image
                    src={image.url || '/placeholder.svg'}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                  <p className={styles.imageCaption}>{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColonSurgery;
