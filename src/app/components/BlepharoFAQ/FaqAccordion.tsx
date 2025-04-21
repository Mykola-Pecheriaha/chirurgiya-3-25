'use client';

import type React from 'react';
import { useState } from 'react';
import styles from './BlepharoFAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqAccordionProps {
  question: string;
  answer: React.ReactNode;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionButton}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className={styles.questionText}>{question}</span>
        <span className={styles.accordionIcon}>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>

      {isOpen && <div className={styles.accordionContent}>{answer}</div>}
    </div>
  );
};
