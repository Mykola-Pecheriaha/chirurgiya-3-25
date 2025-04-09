'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import styles from './BreastProblem.module.css';

interface BreastProblemProps {
  backgroundColor?: string;
}

interface ProblemSection {
  id: string;
  title: string;
  problem: string;
  solution: string;
  images: { src: string; alt: string }[];
}

const BreastProblem: React.FC<BreastProblemProps> = ({
  backgroundColor = '#f0f7ff',
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  const problemSections: ProblemSection[] = [
    {
      id: 'small-breasts',
      title: 'Маленькі груди від природи',
      problem:
        'Маленькі груди можуть бути джерелом дискомфорту для багатьох жінок. Це може впливати на самооцінку та впевненість у собі. Крім того, деякі жінки відчувають труднощі при виборі одягу або купальників.',
      solution:
        'Збільшення грудей за допомогою імплантів може допомогти досягти бажаного розміру та форми. Сучасні методи дозволяють створити природний вигляд та відчуття. Ми підбираємо оптимальний розмір та форму імплантів, враховуючи індивідуальні особливості тіла та побажання пацієнтки. На сьогоднішній день спільнотою пластичних хірургів заборонено проводити збільшення грудей методом інєкції "різних" наповнювачів. Використовуються тільки імпланти з "оболочками"',
      images: [
        {
          src: '/images/breast-problem/breast-gipoplasiya3.jpg',
          alt: 'Маленькі груди - проблема',
        },
        {
          src: '/images/breast-problem/breast-gipoplasiya4.jpg',
          alt: 'Збільшення грудей - результат',
        },
      ],
    },
    {
      id: 'asymmetry',
      title: 'Асиметричність форми',
      problem:
        'Асиметрія грудей - це поширена проблема, яка може бути помітною або незначною. Вона може виникнути через генетичні фактори, гормональні зміни або в результаті попередніх операцій. Асиметрія може викликати дискомфорт при носінні бюстгальтерів та одягу. Крайня форма асеметрії грудей, це синдром Поланда - різке зменшення однієї груді, або її відсутність.',
      solution:
        'Корекція асиметрії може включати збільшення меншої груді, зменшення більшої, або комбінацію обох підходів для досягнення симетрії. Ми використовуємо індивідуальний підхід, який може включати використання імплантів різного розміру, ліпофілінг або підтяжку грудей для досягнення оптимального результату.',
      images: [
        {
          src: '/images/breast-problem/breast-gipoplasiya5.jpg',
          alt: 'Асиметрія грудей - проблема',
        },
        {
          src: '/images/breast-problem/breast-gipoplasiya7.jpg',
          alt: 'Корекція асиметрії - результат',
        },
      ],
    },
    {
      id: 'tubular',
      title: 'Тубулярні груди (у формі конуса)',
      problem:
        'Тубулярні груди характеризуються вузькою основою та видовженою формою. Ця проблема виникає через недостатній розвиток тканин грудей під час статевого дозрівання. Тубулярні груди можуть бути джерелом значного психологічного дискомфорту.',
      solution:
        'Корекція тубулярних грудей зазвичай включає розширення основи груді та покращення її форми. Ми використовуємо комплексний підхід, який може включати розширення тканин, встановлення імплантів та, за необхідності, корекцію ареоли. Результатом є більш природна та пропорційна форма грудей.',
      images: [
        {
          src: '/images/breast-problem/breast-gipoplasiya9.jpg',
          alt: 'Тубулярні груди - проблема',
        },
        {
          src: '/images/breast-problem/breast-gipoplasiya10.jpg',
          alt: 'Корекція тубулярних грудей - результат',
        },
      ],
    },
    {
      id: 'empty-sack',
      title: 'Синдром «пустого мішка»',
      problem:
        "Цей стан часто виникає після вагітності, годування груддю або значної втрати ваги. Груди втрачають об'єм та пружність, шкіра стає надлишковою, а форма грудей змінюється. Це може призвести до втрати впевненості у собі та незадоволення своїм зовнішнім виглядом.",
      solution:
        "Підтяжка грудей (мастопексія) з або без імплантів може відновити об'єм та покращити форму грудей. Ми видаляємо надлишкову шкіру, піднімаємо тканини грудей та, за необхідності, встановлюємо імпланти для додаткового об'єму. Результатом є більш молодий та підтягнутий вигляд грудей.",
      images: [
        {
          src: '/images/breast-problem/breast-gipoplasiya11.jpg',
          alt: 'Синдром пустого мішка - проблема',
        },
        {
          src: '/images/breast-problem/breast-gipoplasiya12.jpg',
          alt: 'Підтяжка грудей - результат',
        },
      ],
    },
    {
      id: 'sagging',
      title:
        'Зменшення або обвисання грудей після годування чи вагітності, втрата ваги',
      problem:
        "Після вагітності, годування груддю або значної втрати ваги груди можуть втратити об'єм та пружність. Шкіра розтягується, а тканини грудей опускаються, що призводить до обвисання. Це може викликати не тільки естетичний дискомфорт, але й фізичні незручності.",
      solution:
        "Мастопексія (підтяжка грудей) з можливим збільшенням може відновити молодіжний вигляд грудей. Ми видаляємо надлишкову шкіру, піднімаємо та формуємо тканини грудей. За бажанням пацієнтки, можемо встановити імпланти для додаткового об'єму. Результатом є підтягнуті, пружні груди з покращеною формою та розташуванням.",
      images: [
        {
          src: '/images/breast-problem/breast-gipoplasiya14.jpg',
          alt: 'Обвисання грудей - проблема',
        },
        {
          src: '/images/breast-problem/breast-gipoplasiya13.jpg',
          alt: 'Підтяжка грудей - результат',
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Скарги на розміри і форми молочних залоз
        </h2>

        <div className={styles.accordionContainer}>
          {problemSections.map((section) => (
            <div key={section.id} className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => toggleSection(section.id)}
              >
                <h3 className={styles.accordionTitle}>{section.title}</h3>
                <span
                  className={`${styles.accordionArrow} ${openSection === section.id ? styles.arrowUp : ''}`}
                >
                  &#9662;
                </span>
              </div>

              {openSection === section.id && (
                <div className={styles.accordionContent}>
                  <div className={styles.textColumn}>
                    <div className={styles.problemSection}>
                      <h4 className={styles.sectionSubtitle}>Проблема:</h4>
                      <p className={styles.sectionText}>{section.problem}</p>
                    </div>

                    <div className={styles.solutionSection}>
                      <h4 className={styles.sectionSubtitle}>Вирішення:</h4>
                      <p className={styles.sectionText}>{section.solution}</p>
                    </div>
                  </div>

                  <div className={styles.imageColumn}>
                    {section.images.map((image, index) => (
                      <div key={index} className={styles.imageWrapper}>
                        <Image
                          src={image.src || '/placeholder.svg'}
                          alt={image.alt}
                          width={300}
                          height={200}
                          className={styles.image}
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(image.alt)}`;
                          }}
                        />
                        <p className={styles.imageCaption}>{image.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreastProblem;
