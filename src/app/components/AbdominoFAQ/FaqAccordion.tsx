'use client';

import type React from 'react';
import { useState } from 'react';
import styles from './FaqAccordion.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className={styles.question}>{item.question}</span>
            <span className={styles.icon}>
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          <div
            className={styles.accordionContent}
            style={{
              maxHeight: activeIndex === index ? '1000px' : '0',
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <div className={styles.answer}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
