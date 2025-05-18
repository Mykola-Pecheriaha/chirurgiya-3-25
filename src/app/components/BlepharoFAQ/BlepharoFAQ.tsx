import Image from 'next/image';
import styles from './BlepharoFAQ.module.css';
import { FaqAccordion } from './FaqAccordion';
import Link from 'next/link';

interface BlepharoFAQProps {
  backgroundColor?: string;
}

export default function BlepharoFAQ({
  backgroundColor = '#f8f9fa',
}: BlepharoFAQProps) {
  // Дані для FAQ
  const faqItems = [
    {
      id: 1,
      question: 'Час проведення операції?',
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.textContent}>
            <p>
              Тривалість блефаропластики залежить від обсягу втручання та
              індивідуальних особливостей пацієнта.
            </p>
            <p className={styles.highlight}>
              📍 Орієнтовна тривалість процедур:
            </p>
            <ul>
              <li>Верхні повіки – приблизно 30 хвилин</li>
              <li>Нижні повіки – близько 40 хвилин</li>
              <li>Транскон'юнктивальна пластика – лише 15 хвилин</li>
            </ul>
            <p className={styles.highlight}>
              🌀 Якщо виконується кругова блефаропластика (комплексне втручання
              на верхніх і нижніх повіках), процедура триває 1–1,5 години.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/blepharoFAQ/blepharoplastyPreparatio28.jpg"
                alt="Блефаропластика верхніх повік"
                width={300}
                height={200}
                className={styles.faqImage}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/blepharoFAQ/blepharoplastyPreparatio31.jpg"
                alt="Блефаропластика нижніх повік"
                width={300}
                height={200}
                className={styles.faqImage}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/blepharoFAQ/blepharoplastyPreparatio30.jpg"
                alt="Кругова блефаропластика"
                width={300}
                height={200}
                className={styles.faqImage}
              />
            </div>
          </div>
        </div>
      ),
      images: [
        '/images/blepharoFAQ/blepharoplastyPreparatio28.jpg',
        '/images/blepharoFAQ/blepharoplastyPreparatio31.jpg',
        '/images/blepharoFAQ/blepharoplastyPreparatio30.jpg',
      ],
    },
    {
      id: 2,
      question: '🧊 Реабілітація та відновлення після підтяжки повік',
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.textContent}>
            <p className={styles.highlight}>
              ✅ Одразу після операції на очі накладаються охолоджені гелеві
              подушечки, що допомагають зменшити набряклість.
            </p>
            <p className={styles.highlight}>
              🕐 У клініці пацієнт перебуває під наглядом медичного персоналу
              приблизно 1 годину, після чого вирушає додому з усіма необхідними
              рекомендаціями.
            </p>
            <p className={styles.highlight}>
              💧 Після блефаропластики можуть виникати:
            </p>
            <ul>
              <li>почервоніння очей</li>
              <li>печіння</li>
              <li>свербіж</li>
              <li>підвищена сльозогінність</li>
            </ul>
            <p className={styles.highlight}>
              💊 Для полегшення симптомів призначаються протизапальні очні
              краплі.
            </p>

            <p className={styles.highlight}>
              🚫 Обмеження у відновлювальний період:
            </p>
            <ul>
              <li>тимчасова відмова від фізичних навантажень</li>
              <li>уникнення сонця та засмаги на відкритому повітрі</li>
              <li>виключення саун, лазень та тренувань на 2 тижні</li>
            </ul>

            <p className={styles.highlight}>⏳ Період відновлення:</p>
            <ul>
              <li>Післяопераційне відновлення триває 10–14 днів</li>
              <li>До звичного ритму роботи можна повернутися через 14 днів</li>
              <li>Кінцевий результат буде помітним через 1 місяць</li>
              <li>Ефект – довгостроковий та стабільний</li>
            </ul>

            <p className={styles.highlight}>
              ✨ Транскон'юнктивальна блефаропластика забезпечує:
            </p>
            <ul>
              <li>відновлення за 3 дні</li>
              <li>відсутність синців і набряків</li>
            </ul>

            <p className={styles.highlight}>
              🔁 Повторна корекція, за потреби, можлива не раніше ніж через
              10–15 років, залежно від індивідуальних особливостей.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/blepharoFAQ/blepharoplastyPreparatio26.jpg"
                alt="Відновлення після блефаропластики"
                width={300}
                height={200}
                className={styles.faqImage}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/blepharoFAQ/blepharoplastyPreparatio32.jpg"
                alt="Догляд після операції"
                width={300}
                height={200}
                className={styles.faqImage}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/blepharoFAQ/blepharoplastyPreparatio33.jpg"
                alt="Результати блефаропластики"
                width={300}
                height={200}
                className={styles.faqImage}
              />
            </div>
          </div>
        </div>
      ),
      images: [
        '/images/blepharoFAQ/blepharoplastyPreparatio26.jpg',
        '/images/blepharoFAQ/blepharoplastyPreparatio32.jpg',
        '/images/blepharoFAQ/blepharoplastyPreparatio33.jpg',
      ],
    },
  ];

  return (
    <section className={styles.blepharoFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>🧴Поширені запитання</h2>

        <div className={styles.faqContainer}>
          {faqItems.map((item) => (
            <FaqAccordion
              key={item.id}
              question={item.question}
              answer={item.answer}
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
}
