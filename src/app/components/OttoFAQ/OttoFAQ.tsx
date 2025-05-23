import type React from 'react';
import styles from './OttoFAQ.module.css';
import FaqAccordion from './FaqAccordion';
import Link from 'next/link';

interface OttoFAQProps {
  backgroundColor?: string;
}

const OttoFAQ: React.FC<OttoFAQProps> = ({ backgroundColor = '#f8f9fa' }) => {
  // Дані для FAQ
  const faqItems = [
    {
      question: ' Які проблеми вирішує пластика вух?',
      answer: (
        <>
          <p>
            Отопластика — це естетична хірургічна процедура, спрямована на
            усунення вроджених або набутих дефектів вушних раковин.
          </p>
          <p>Вона дозволяє:</p>
          <ul>
            <li>🔹 виправити клаповухість;</li>
            <li>🔹 змінити форму мочки або відновити її цілісність;</li>
            <li>
              🔹 реконструювати природній рельєф вуха у випадках
              післятравматичних деформацій.
            </li>
          </ul>
        </>
      ),
      additionalInfo: (
        <>
          <h4> З якого віку можна робити отопластику?</h4>
          <p>
            Операція доступна пацієнтам будь-якого віку, однак у дітей вона
            потребує особливого підходу.
          </p>
          <p> Рекомендований вік — від 6 років, адже:</p>
          <ul>
            <li>✔️ до цього моменту завершене формування вушної раковини;</li>
            <li>✔️ можна чітко оцінити ступінь клаповухості.</li>
          </ul>
          <div className={styles.importantNote}>
            <p>🧠 Важливо:</p>
            <p>
              Дитина повинна усвідомлювати суть змін і прагнути покращити
              зовнішність. Лише тоді процес пройде спокійно, без психологічного
              стресу.
            </p>
          </div>
        </>
      ),
      images: [
        { src: '/images/ottoFAQ/ottoFAQ.jpg', alt: 'Клаповухість до корекції' },
        {
          src: '/images/ottoFAQ/ottoFAQ1.jpg',
          alt: 'Процес корекції вушної раковини',
        },
        {
          src: '/images/ottoFAQ/ottoFAQ3.jpg',
          alt: 'Результат після отопластики',
        },
      ],
    },
    {
      question: ' Як проходить операція з отопластики (пластики вух)?',
      answer: (
        <>
          <p>
            ✅ Найчастіше отопластика виконується під місцевою анестезією —
            амбулаторно, без потреби у госпіталізації. Уже через 1 годину після
            втручання пацієнт може їхати додому з індивідуальними
            рекомендаціями.
          </p>
          <p>
            За бажанням пацієнта можливе проведення операції під загальним
            наркозом.
          </p>
          <p>
            У клініці стандартно застосовується інгаляційний наркоз (відомий як
            «газовий»).
          </p>
          <h4> Хід операції:</h4>
          <ul>
            <li>
              🔹 Пластичний хірург формує правильне положення хряща, при
              необхідності видаляючи його частину;
            </li>
            <li>
              🔹 Вушна раковина фіксується у новій позиції за допомогою
              внутрішніх швів та спеціального косметичного шва;
            </li>
            <li>
              🔹 Післяопераційний рубець — малопомітний, розташований позаду
              вуха, повністю прихований та з часом набуває кольору шкіри.
            </li>
          </ul>
          <p>
            📌 Операція проходить максимально делікатно, з естетичним
            результатом та мінімальними слідами втручання.
          </p>
        </>
      ),
      additionalInfo: null,
      images: [
        { src: '/images/ottoFAQ/ottoFAQ9.jpg', alt: 'Підготовка до операції' },
        {
          src: '/images/ottoFAQ/ottoFAQ4.jpg',
          alt: 'Процес хірургічного втручання',
        },
        { src: '/images/ottoFAQ/ottoFAQ6.jpg', alt: 'Накладання швів' },
      ],
    },
    {
      question: ' Скільки триває операція з пластики вух?',
      answer: (
        <>
          <p>
            🔹 Завдяки використанню сучасних хірургічних методик, операція
            займає всього 30–40 хвилин.
          </p>
          <p>
            🔹 Тривалість може варіюватися в залежності від індивідуальних
            анатомічних особливостей пацієнта.
          </p>
        </>
      ),
      additionalInfo: null,
      images: [{ src: '/images/ottoFAQ/ottoFAQ14.jpg', alt: 'Операційна' }],
    },
  ];

  return (
    <section className={styles.ottoFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>🧐 Поширені запитання</h2>
        <div className={styles.faqContainer}>
          {faqItems.map((item, index) => (
            <FaqAccordion
              key={index}
              question={item.question}
              answer={item.answer}
              additionalInfo={item.additionalInfo}
              images={item.images}
            />
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

export default OttoFAQ;
