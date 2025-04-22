'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './FaqAccordion.module.css';

interface FaqAccordionProps {
  question: string;
  answer: React.ReactNode;
  additionalInfo?: React.ReactNode | null;
  images: { src: string; alt: string }[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  question,
  answer,
  additionalInfo,
  images,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <div className={styles.questionContainer} onClick={toggleAccordion}>
        <h3 className={styles.question}>{question}</h3>
        <div className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className={styles.answerContainer}>
          <div className={styles.textContent}>
            <div className={styles.answer}>{answer}</div>
            {additionalInfo && (
              <div className={styles.additionalInfo}>{additionalInfo}</div>
            )}
          </div>

          <div className={styles.imagesContainer}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
