'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './SkintumorsDetails.module.css';
import { SkintumorsGallery } from './SkintumorsGallery';

interface SkintumorsDetailsProps {
  backgroundColor?: string;
}

export function SkintumorsDetails({
  backgroundColor = '#f8f9fa',
}: SkintumorsDetailsProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    nevus: false,
    papilloma: false,
    atheroma: false,
    hemangioma: false,
    lipoma: false,
    fibroma: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const tumorSections = [
    {
      id: 'nevus',
      title: 'НЕВУС',
      previewText:
        'новоутворення доброякісного характеру, що виникає на шкірі у вигляді пігментації...',
      fullText:
        "новоутворення доброякісного характеру, що виникає на шкірі у вигляді пігментації. Рекомендовано видаляти їх, якщо вони локалізовані у незручних місцях на тілі, або у разі загрози переродження у злоякісне новоутворення. Родимки та невуси можуть бути у людини з самого народження або виникнути пізніше в дитячому чи дорослому віці. Особливо схильні до цього власники надмірно білої шкіри, яка погано засмагає і схильна до виникнення сонячних опіків. Саме тоді з'являються множинні та атипові родимки (родимки неправильної форми, неоднорідні за кольором, що супроводжуються сверблячкою, печінням). Сімейний анамнез частіше за все фіксує, що в родині є випадки розвитку передракових захворювань шкіри, меланоми.",
      imageSrc: '/images/skintumors/dpkUlcer.jpg',
      imageAlt: 'Невус (родимка)',
    },
    {
      id: 'papilloma',
      title: 'ПАПІЛОМА',
      previewText:
        'Доброякісне пухлиноподібне новоутворення на шкірі або на слизовій оболонці...',
      fullText:
        'Доброякісне пухлиноподібне новоутворення на шкірі або на слизовій оболонці. Основна причина виникнення цих пухлин – вірус папіломи. Ці новоутворення відрізняються зовнішньою різноманітністю за формою і розміром, наростами. Забарвлення може бути світло-, сіро- чи темно-коричневим. Хоча бородавки та папіломи дуже схожі, головна їхня відмінність, полягає в тому, що бородавки частіше знаходяться на обличчі, пальцях рук, ліктях і підошвах. Папіломи частіше розміщуються на шиї, спині, грудях, пахвах, а також на статевих органах.',
      imageSrc: '/images/skintumors/papiloma.jpg',
      imageAlt: 'Папілома',
    },
    {
      id: 'atheroma',
      title: 'АТЕРОМА',
      previewText:
        'Eпітеліальна кіста – це доброякісне новоутворення сальної залози...',
      fullText:
        "Eпітеліальна кіста – це доброякісне новоутворення сальної залози, яке виникає в результаті її закупорки. Атероми та ліпоми (жировики) виникають на ділянках шкіри з великою кількістю сальних залоз в результаті їхньої закупорки. Вони мають вигляд великого прища, не болять, м'які на дотик і, крім неестетичного вигляду, можуть нічим не турбувати пацієнта. Видаляють їх лише хірургічно, разом з капсулою – інакше можливі рецидиви.",
      imageSrc: '/images/skintumors/teroma.jpg',
      imageAlt: 'Атерома',
    },
    {
      id: 'hemangioma',
      title: 'ГЕМАНГІОМА',
      previewText: 'Це пухлинне судинне утворення належить до доброякісних...',
      fullText:
        "Це пухлинне судинне утворення належить до доброякісних. Являє собою пляму яскраво-червоного кольору, яка трохи виступає над поверхнею шкіри. При натисканні воно блідніє, але дуже швидко відновлює колір, форму та об'єм. Розвиток гемангіоми може викликати локальними кровотечі, що і сприяє її розростанню.",
      imageSrc: '/images/skintumors/gemangioma.jpg',
      imageAlt: 'Гемангіома',
    },
    {
      id: 'lipoma',
      title: 'ЛІПОМА',
      previewText:
        'Доброякісна жирова пухлина. Це новоутворення, яке формується з жирового прошарку...',
      fullText:
        "Доброякісна жирова пухлина. Це новоутворення, яке формується з жирового прошарку, тому його друга назва – «жировик». Це часточка жирової тканини, яка легко рухається при дотику і зазвичай не викликає болю. Ліпоми можуть з'являтися де завгодно на тілі, але найчастіше вони з'являються на спині, тулубі (тулубі), руках, плечах і шиї.",
      imageSrc: '/images/skintumors/lipoma.jpg',
      imageAlt: 'Ліпома',
    },
    {
      id: 'fibroma',
      title: 'ФІБРОМА',
      previewText: 'доброякісна пухлина з волокнистої сполучної тканини...',
      fullText:
        "доброякісна пухлина з волокнистої сполучної тканини. Часто поєднується з розростанням інших тканин – зокрема м'язової (фіброміома), судинної (ангіофіброма), залізистої (фіброаденома). Дуже часто її діагностують у молодому віці, переважно у жіночої статі. Вона може бути різного кольору : від сірого до чорного. Поверхня зазвичай гладка, зростає повільно.",
      imageSrc: '/images/skintumors/dpkUlcer.jpg',
      imageAlt: 'Фіброма',
    },
  ];

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        <h1 className={styles.mainTitle}>Пухлини шкіри</h1>

        {/* Перша частина - секції з пухлинами */}
        {tumorSections.map((section) => (
          <div key={section.id} className={styles.tumorSection}>
            <div className={styles.tumorContent}>
              <div className={styles.textColumn}>
                <h3 className={styles.tumorTitle}>{section.title}</h3>
                {!expandedSections[section.id] ? (
                  <p>
                    {section.previewText}
                    <button
                      className={styles.expandButton}
                      onClick={() => toggleSection(section.id)}
                    >
                      розгорнути
                    </button>
                  </p>
                ) : (
                  <div>
                    <p className={styles.fullText}>{section.fullText}</p>
                    <button
                      className={styles.collapseButton}
                      onClick={() => toggleSection(section.id)}
                    >
                      згорнути
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.imageColumn}>
                <div className={styles.tumorImageContainer}>
                  <Image
                    src={section.imageSrc || '/placeholder.svg'}
                    alt={section.imageAlt}
                    width={300}
                    height={200}
                    className={styles.tumorImage}
                  />
                </div>
              </div>
            </div>
            <div className={styles.divider}></div>
          </div>
        ))}

        {/* Друга частина - інформація та галерея */}
        <div className={styles.infoSection}>
          <div className={styles.contentRow}>
            <div className={styles.textColumn}>
              <div className={styles.warningSection}>
                <h3 className={styles.warningTitle}>
                  Симптоми, які вимагають негайного звернення до лікаря:
                </h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    швидке збільшення новоутворення;
                  </li>
                  <li className={styles.listItem}>
                    випадіння волосся з його поверхні;
                  </li>
                  <li className={styles.listItem}>
                    зміна кольору, кровоточивість, зміна консистенції;
                  </li>
                  <li className={styles.listItem}>
                    зменшення, зміна форми або розмитий контур;
                  </li>
                  <li className={styles.listItem}>
                    поява запалення, свербежу, тріщин.
                  </li>
                </ul>
              </div>

              <div className={styles.preventionSection}>
                <h3 className={styles.preventionTitle}>
                  Профілактичні рекомендації:
                </h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Уникайте тривалого перебування на сонці.
                  </li>
                  <li className={styles.listItem}>
                    Своєчасно звертайтеся до лікаря.
                  </li>
                  <li className={styles.listItem}>
                    Регулярно проходьте діагностику за допомогою дерматоскопа.
                  </li>
                </ul>
              </div>

              <div className={styles.dermatoscopySection}>
                <h3 className={styles.dermatoscopyTitle}>
                  Цифрова дерматоскопія
                </h3>
                <p>
                  Метод, що дає можливість детально розглянути новоутворення під
                  великим збільшенням. Дає змогу оцінити:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>пігментацію;</li>
                  <li className={styles.listItem}>будову епідермісу;</li>
                  <li className={styles.listItem}>
                    межу між дермою та епідермісом;
                  </li>
                  <li className={styles.listItem}>сосочковий шар.</li>
                </ul>
                <p>
                  <span className={styles.highlight}>
                    🔹 Зображення виводиться на екран комп'ютера для точнішої
                    діагностики.
                  </span>
                </p>
              </div>
            </div>

            <div className={styles.galleryColumn}>
              <SkintumorsGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
