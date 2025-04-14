'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './MastopexyInfo.module.css';
import { ChevronDown } from 'lucide-react';

interface MastopexyInfoProps {
  backgroundColor?: string;
}

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  images: string[];
}

const mastopexySections: AccordionItem[] = [
  {
    id: 'periareolar',
    title: '🔹 Періареолярна мастопексія',
    content:
      'Рекомендується пацієнткам із мінімальним птозом, коли сосок розташований на рівні підгрудної складки. Це одна з найделікатніших методик.\nРозріз виконується по краю ареоли. Видаляється надлишок шкіри, тканини залози перерозподіляються, а ареола переноситься вище та зменшується у розмірі.\nПісляопераційний рубець має довжину 3–4 см і легко маскується завдяки природному відтінку тканин.',
    images: [
      '/images/mastopexy/breast-preparation12.jpg',
      '/images/mastopexy/breast-preparation15.jpg',
    ],
  },
  {
    id: 'vertical',
    title: '🔹 Вертикальна мастопексія',
    content:
      'Оптимальний варіант для пацієнток із помірним птозом, коли сосок знаходиться на 1–3 см нижче інфрамамарної складки, але не досягає нижнього полюса залози.\nРозріз проходить навколо ареоли та вертикально вниз, дозволяючи значно покращити форму грудей.',
    images: [
      '/images/mastopexy/breast-preparation13.jpg',
      '/images/mastopexy/breast-preparation16.jpg',
    ],
  },
  {
    id: 'anchor',
    title: '🔹 Т-подібна (якорна) мастопексія',
    content:
      'Застосовується у випадках вираженого птозу — коли сосок опускається нижче підгрудної складки більш ніж на 3 см і "дивиться" вниз.\nМетодика включає вертикальний розріз, поєднаний з додатковим розрізом у складці під молочною залозою у формі перевернутої літери "Т".',
    images: [
      '/images/mastopexy/breast-preparation14.jpg',
      '/images/mastopexy/breast37.bmp',
    ],
  },
];

const correctionSections: AccordionItem[] = [
  {
    id: 'areola',
    title: '🔸 Зменшення ареоли',
    content:
      'Соски неправильної форми, занадто великі або втягнуті можуть засмучувати багатьох жінок. Спроби приховати недолік призводять до погіршення якості особистого життя, зниження самооцінки. Деформації ареоли і сосків бувають вродженими і набутими, але переважну більшість з них можна виправити.Полягає у видаленні надлишків пігментованої шкіри. Розріз виконується на межі темної та світлої шкіри, а тканини ушиваються внутрішнім косметичним швом. Це дозволяє зменшити ареолу та надати грудям естетичного вигляду.',
    images: [
      '/images/mastopexy/breast29.bmp',
      '/images/mastopexy/breast-preparation18.jpg',
    ],
  },
  {
    id: 'nipple',
    title: '🔸 Зменшення сосків',
    content:
      'Здійснюється шляхом видалення надлишку шкіри зі "стебла" соска без ушкодження молочних проток. У деяких випадках виконується часткове клиновидне висічення для досягнення симетрії.',
    images: ['/images/mastopexy/breast-preparation19.jpg'],
  },
];

// Функція для перевірки доступності зображення
const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

export default function MastopexyInfo({
  backgroundColor = '#f0f7ff',
}: MastopexyInfoProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openCorrectionSection, setOpenCorrectionSection] = useState<
    string | null
  >(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const toggleCorrectionSection = (id: string) => {
    setOpenCorrectionSection(openCorrectionSection === id ? null : id);
  };

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Підтяжки грудей та корекції сосково-ареолярної ділянки -{' '}
          <span className={styles.highlight}>особливості проведення</span>
        </h2>

        <p className={styles.introText}>
          Методика проведення операції залежить від ступеня опущення молочних
          залоз (птозу). Існує кілька варіантів мастопексії, які підбираються
          індивідуально:
        </p>

        <div className={styles.accordionContainer}>
          {mastopexySections.map((section) => (
            <div key={section.id} className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => toggleSection(section.id)}
              >
                <h3 className={styles.accordionTitle}>{section.title}</h3>
                <ChevronDown
                  className={`${styles.accordionIcon} ${openSection === section.id ? styles.rotated : ''}`}
                  size={24}
                />
              </div>

              {openSection === section.id && (
                <div className={styles.accordionContent}>
                  <div className={styles.textContent}>
                    {section.content.split('\n').map((paragraph, idx) => (
                      <p key={idx} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className={styles.imagesContainer}>
                    {section.images.map((image, idx) => (
                      <div key={idx} className={styles.imageWrapper}>
                        <Image
                          src={image || '/placeholder.svg'}
                          alt={`${section.title} зображення ${idx + 1}`}
                          width={300}
                          height={200}
                          className={styles.image}
                          onError={(e) => {
                            // Використовуємо плейсхолдер, якщо зображення недоступне
                            e.currentTarget.src = `/placeholder.svg?height=200&width=300&text=Зображення ${idx + 1}`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.infoText}>
            <span className={styles.infoIcon}>👉</span> У деяких випадках хірург
            може рекомендувати поєднання підтяжки з{' '}
            <strong>установкою імплантатів</strong> для досягнення wow-ефекту.
            Імплантати виступають своєрідним внутрішнім каркасом, який утримує
            бюст у природному положенні та додає об'єму.
          </p>
          <p className={styles.infoText}>
            Метод остаточно підбирається хірургом, з урахуванням анатомічних
            особливостей та побажань пацієнтки.
          </p>
        </div>

        <div className={styles.sectionDivider}></div>

        <h3 className={styles.subTitle}>
          Корекція сосків та ареоли: як проходить операція
        </h3>
        <p className={styles.introText}>
          Процедура зменшення сосків або зміни форми ареоли проводиться
          амбулаторно під місцевою анестезією. Остаточна методика визначається
          під час первинної консультації з урахуванням індивідуальних факторів,
          зокрема планування грудного вигодовування.
        </p>

        <div className={styles.accordionContainer}>
          {correctionSections.map((section) => (
            <div key={section.id} className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => toggleCorrectionSection(section.id)}
              >
                <h3 className={styles.accordionTitle}>{section.title}</h3>
                <ChevronDown
                  className={`${styles.accordionIcon} ${openCorrectionSection === section.id ? styles.rotated : ''}`}
                  size={24}
                />
              </div>

              {openCorrectionSection === section.id && (
                <div className={styles.accordionContent}>
                  <div className={styles.textContent}>
                    {section.content.split('\n').map((paragraph, idx) => (
                      <p key={idx} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className={styles.imagesContainer}>
                    {section.images.map((image, idx) => (
                      <div key={idx} className={styles.imageWrapper}>
                        <Image
                          src={image || '/placeholder.svg'}
                          alt={`${section.title} зображення ${idx + 1}`}
                          width={300}
                          height={200}
                          className={styles.image}
                          onError={(e) => {
                            // Використовуємо плейсхолдер, якщо зображення недоступне
                            e.currentTarget.src = `/placeholder.svg?height=200&width=300&text=Зображення ${idx + 1}`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.timeInfo}>
          <span className={styles.timeIcon}>🕒</span> Уже через 1,5 години після
          втручання пацієнтка може повертатися додому з чіткими рекомендаціями
          від хірурга. Госпіталізація не потрібна.
        </div>
      </div>
    </div>
  );
}
