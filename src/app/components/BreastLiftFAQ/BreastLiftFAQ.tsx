'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import styles from './BreastLiftFAQ.module.css';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface BreastLiftFAQProps {
  backgroundColor?: string;
}

interface FAQItem {
  id: string;
  title: string;
  content: string;
  images: string[];
}

const BreastLiftFAQ: React.FC<BreastLiftFAQProps> = ({
  backgroundColor = '#f0f7ff',
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqItems: FAQItem[] = [
    {
      id: 'operation-duration',
      title: '🔹 Скільки триває операція з підтяжки грудей',
      content: `Підтяжка молочних залоз проводиться під загальною анестезією. У клініці застосовується якісний та безпечний інгаляційний наркоз на Севофлурані. Він забезпечує планомірне занурення у медикаментозний сон, а також легкий та комфортний вихід без галюцинацій.
      Тривалість операції – від 1,5 до 3 годин (залежно від застосовуваної методики).`,
      images: ['/images/BreastLiftFAQ/BreastLiftFAQ1.jpg'],
    },
    {
      id: 'rehabilitation',
      title: '🔹 Реабілітація після підтяжки грудей',
      content: `Після операції пацієнтка обов'язково перебуває у стаціонарі протягом доби. Потім із рекомендаціями від фахівця вона їде додому.
      Додатковий догляд за рубцями не вимагається. Також для прискорення загоєння рубців застосовується спеціальний медичний клей для шкіри. Ми отримуємо високі естетичні результати – через 1 місяць рубець виглядає, як через 6-8 місяців.
      Слід носити компресійну білизну, що фіксує положення грудей, 2-4 тижні.
      Період реабілітації триває 2-3 тижні. Рекомендується обмеження фізичного навантаження, відвідування саун, бань басейнів до 2-х місяців.`,
      images: ['/images/BreastLiftFAQ/removalInfo9.jpg'],
    },
    {
      id: 'correction-problems',
      title: 'Які проблеми вирішує корекція сосків та корекція ареол',
      content: `Хірургічна корекція соска проводиться у таких випадках:
      • Гіпертрофія. Непропорційно великі соски виглядають неестетично і спричиняють дискомфорт.
      • Мегареоли (надто велика пігментована частина). У нормі діаметр ареоли становить 2,5-4 см. При перевищенні цього діаметра (більше 5 см) потрібна корекція за естетичними ознаками. Хірургічне зменшення ареоли є частиною операцій з підтяжки та зменшення грудей.
      • Асиметрія. Часте явище після вагітності та грудного вигодовування. Якщо асиметрія у розмірі правого та лівого сосково-ареолярного комплексу досягає 2-х разів, то жінка має показання для звернення до пластичного хірурга.`,
      images: ['/images/BreastLiftFAQ/BreastLiftFAQ4.jpg'],
    },
    {
      id: 'areola-rehabilitation',
      title: '· Реабілітація після корекції ареоли',
      content: `Якщо операція проводилася амбулаторно під місцевою анестезією, пацієнт може через 1,5 години залишити клініку. За умови використання загального наркозу пацієнт виписується наступної доби після втручання.
      
      Період реабілітації комфортний, пацієнтка не випадає із соціального життя. Рекомендується обмежити активне фізичне навантаження на 4-6 тижнів. Протягом цього терміну небажано відвідувати лазні, сауни, пляжі та басейни.
      
      Рубці через місяць виглядають естетично, вони приймають колір шкіри і схожі на невелику «котячу подряпину».`,
      images: ['/images/BreastLiftFAQ/BreastLiftFAQ7.jpg'],
    },
    {
      id: 'operation-time',
      title: '· Скільки триває операція',
      content: `Тривалість залежить від обсягу: найчастіше займається час від 30 хвилин до 1 години. На індивідуальній зустрічі хірург обговорює це питання.`,
      images: ['/images/BreastLiftFAQ/BreastLiftFAQ8.jpg'],
    },
  ];

  // Функція для перевірки доступності зображення
  const checkImageAvailability = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = window.Image
        ? new window.Image()
        : document.createElement('img');
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };

  return (
    <section className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Поширені запитання при підтяжці грудей і корекції ареоли та соска
        </h2>

        <div className={styles.faqContainer}>
          {faqItems.map((item) => (
            <div key={item.id} className={styles.faqItem}>
              <button
                className={styles.faqHeader}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span className={styles.faqTitle}>{item.title}</span>
                <ChevronDown
                  className={`${styles.icon} ${openItem === item.id ? styles.iconRotated : ''}`}
                />
              </button>

              {openItem === item.id && (
                <div className={styles.faqContent}>
                  <div className={styles.textContent}>
                    {item.content.split('\n').map((paragraph, idx) => (
                      <p key={idx} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className={styles.imagesContainer}>
                    {item.images.map((src, idx) => (
                      <div key={idx} className={styles.imageWrapper}>
                        <Image
                          src={src || '/placeholder.svg'}
                          alt={`Ілюстрація до ${item.title}`}
                          width={200}
                          height={300}
                          className={styles.image}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам
            детальну консультацію.
          </p>
          <Link href="/about-doctor/contacts">
            <button className={styles.contactButton}>
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BreastLiftFAQ;
