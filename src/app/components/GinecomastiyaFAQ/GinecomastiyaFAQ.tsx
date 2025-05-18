'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GalleryGinecomastiyaFAQ from './GalleryGinecomastiyaFAQ';
import styles from './GinecomastiyaFAQ.module.css';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  images: string[];
}

interface GinecomastiyaFAQProps {
  backgroundColor?: string;
}

const GinecomastiyaFAQ: React.FC<GinecomastiyaFAQProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Скільки триває операція з видалення гінекомастії',
      answer:
        'Хірургічне втручання займає до 1 години залежно від обсягу. Використовується інгаляційний наркоз на Севофлурані. Він забезпечує комфортний вхід у медикаментозний сон та вихід без галюцинацій.\n\nЛіпосакція проводиться під місцевою анестезією (пацієнт свідомий) і займає 30-40 хвилин. За кілька годин пацієнт може їхати додому із рекомендаціями від фахівця. Госпіталізація не потрібна.',
      images: [
        '/images/GinecomastiyaFAQ/photoFAQ1.jpg',
        '/images/GinecomastiyaFAQ/photoFAQ2 .jpg',
      ],
    },
    {
      question: 'Чи залишаються шрами після операції?',
      answer:
        'При справжній гінекомастії розріз здійснюється по краю ареоли, що робить шрам практично непомітним після загоєння. Через кілька місяців він повністю зливається з кольором шкіри соска.\n\nПри хибній гінекомастії, коли проводиться ліпосакція, залишаються лише невеликі проколи (2-3 мм), які швидко загоюються і не залишають помітних слідів.',
      images: [
        '/images/GinecomastiyaFAQ/ginecomas20.jpg',
        '/images/GinecomastiyaFAQ/ginecomas24.jpg',
      ],
    },
    {
      question: 'Який період реабілітації після операції?',
      answer:
        'Після хірургічного втручання пацієнт проводить у стаціонарі одну добу під наглядом медичного персоналу. Можливий дискомфорт в області грудей легко усувається знеболюючими препаратами.\n\nПротягом 2-3 тижнів рекомендується носити компресійну білизну. Фізичні навантаження та спорт можна відновити через 4 тижні після операції. Повне відновлення відбувається протягом 1-2 місяців.',
      images: [
        '/images/GinecomastiyaFAQ/ginecomas22.jpg',
        '/images/GinecomastiyaFAQ/ginecomas12.jpg',
      ],
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Поширені запитання</h1>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.question}
                onClick={() => toggleItem(index)}
              >
                <h2>{item.question}</h2>
                {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedIndex === index && (
                <div className={styles.answer}>
                  <div className={styles.answerText}>
                    {item.answer.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className={styles.answerGallery}>
                    <GalleryGinecomastiyaFAQ
                      images={item.images}
                      galleryId={`faq-gallery-${index}`}
                    />
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
    </div>
  );
};

export default GinecomastiyaFAQ;
