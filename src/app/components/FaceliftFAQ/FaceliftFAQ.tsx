'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FaceliftFAQ.module.css';

interface FaceliftFAQProps {
  backgroundColor?: string;
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  images: string[];
}

const FaceliftFAQ: React.FC<FaceliftFAQProps> = ({
  backgroundColor = '#f8f4ff',
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: 'Як проводиться підтяжка обличчя та шиї?',
      answer: (
        <>
          <h3 className={styles.answerTitle}>
            <span role="img" aria-label="Doctor">
              🧑‍⚕️
            </span>{' '}
            Підготовка до підтяжки обличчя та шиї
          </h3>
          <p>
            Перший етап — консультація з пластичним хірургом Світланою Работенко
            у клініці Vidnova (Львів). Фахівець приймає пацієнтів з усієї
            України.
          </p>
          <p>На індивідуальній зустрічі лікар:</p>
          <ul className={styles.bulletList}>
            <li>
              <span role="img" aria-label="Document">
                🧾
              </span>{' '}
              докладно розповість про можливі варіанти пластики овалу обличчя
            </li>
            <li>
              <span role="img" aria-label="Clipboard">
                📋
              </span>{' '}
              допоможе підібрати найвідповіднішу методику — з урахуванням:
              <ul className={styles.nestedList}>
                <li>якості шкіри (товщина, пружність, еластичність)</li>
                <li>зони втручання</li>
                <li>типу хірургічного розрізу</li>
              </ul>
            </li>
          </ul>

          <h4 className={styles.subTitle}>
            <span role="img" aria-label="Speech">
              💬
            </span>{' '}
            Консультація включає:
          </h4>
          <ul className={styles.bulletList}>
            <li>
              <span role="img" aria-label="Handshake">
                🤝
              </span>{' '}
              Обговорення побажань пацієнта та очікуваного результату
            </li>
            <li>
              <span role="img" aria-label="Camera">
                📸
              </span>{' '}
              Перегляд прикладів "до / після" на основі схожих випадків
            </li>
            <li>
              <span role="img" aria-label="Crystal Ball">
                🔮
              </span>{' '}
              Прогнозування майбутнього вигляду обличчя
            </li>
          </ul>

          <h4 className={styles.subTitle}>
            <span role="img" aria-label="Test Tube">
              🧪
            </span>{' '}
            Передопераційна підготовка
          </h4>
          <p>
            Перед хірургічним втручанням лікар призначає комплексне обстеження,
            яке проводиться на базі клініки Vidnova — лише за кілька годин.
          </p>
          <p>
            На основі медичних даних та анатомічних особливостей пацієнта
            обирається найоптимальніший метод підтяжки, що відповідає
            поставленим цілям.
          </p>

          <h4 className={styles.subTitle}>
            <span role="img" aria-label="Hospital Bed">
              🛌
            </span>{' '}
            Хірургічне втручання
          </h4>
          <ul className={styles.bulletList}>
            <li>Проводиться під загальною анестезією</li>
            <li>Застосовується сучасний, безпечний інгаляційний наркоз</li>
            <li>Тривалість операції — до 3 годин</li>
          </ul>
        </>
      ),
      images: [
        '/images/FaceliftFAQ/faceliftFAQ4.jpg',
        '/images/FaceliftFAQ/faceliftFAQ6.jpg',
        '/images/FaceliftFAQ/faceliftFAQ7.jpg',
      ],
    },
    {
      question: 'Як довго зберігається результат після підтяжки обличчя?',
      answer: (
        <>
          <p>
            Стійкість результату після хірургічної підтяжки може зберігатися до
            15–20 років — усе залежить від індивідуальних факторів.
          </p>
          <h4 className={styles.subTitle}>
            <span role="img" aria-label="Pin">
              📌
            </span>{' '}
            На тривалість ефекту впливають:
          </h4>
          <ul className={styles.bulletList}>
            <li>
              <span role="img" aria-label="DNA">
                🧬
              </span>{' '}
              Вік пацієнта
            </li>
            <li>
              <span role="img" aria-label="Herb">
                🌿
              </span>{' '}
              Стан шкіри до операції (еластичність, тонус)
            </li>
            <li>
              <span role="img" aria-label="Cigarette">
                🚬
              </span>{' '}
              Шкідливі звички (куріння, алкоголь)
            </li>
            <li>
              <span role="img" aria-label="Stethoscope">
                🩺
              </span>{' '}
              Дотримання рекомендацій хірурга у післяопераційний період
            </li>
          </ul>
          <p>
            <span role="img" aria-label="Repeat">
              🔄
            </span>{' '}
            Повторна підтяжка може бути актуальною лише через 15–20 років — за
            потреби та за бажанням пацієнта.
          </p>
        </>
      ),
      images: [
        '/images/FaceliftFAQ/faceliftFAQ.jpg',

        '/images/FaceliftFAQ/faceliftFAQ3.jpg',
      ],
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImagesLoaded = async () => {
      const loadStatuses = await Promise.all(
        faqItems.flatMap((item) =>
          item.images.map((src) =>
            fetch(src, { method: 'HEAD' })
              .then((res) => res.ok)
              .catch(() => false)
          )
        )
      );

      setImagesLoaded(loadStatuses);
    };

    checkImagesLoaded();
  }, []);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getSafeImageSrc = (src: string, index: number) => {
    const flatIndex = faqItems
      .flatMap((_, i) => faqItems[i].images.map((_, j) => ({ i, j })))
      .findIndex(({ i, j }) => faqItems[i].images[j] === src);

    if (imagesLoaded[flatIndex]) {
      return src;
    }

    // Fallback to placeholder
    return `/placeholder.svg?height=400&width=300&query=facelift procedure image ${index + 1}`;
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>🧴 Поширені запитання</h2>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.question} ${expandedIndex === index ? styles.active : ''}`}
                onClick={() => toggleItem(index)}
              >
                <h3>{item.question}</h3>
                <div className={styles.icon}>
                  {expandedIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </div>

              {expandedIndex === index && (
                <div className={styles.answer}>
                  <div className={styles.answerText}>{item.answer}</div>
                  <div className={styles.answerImages}>
                    {item.images.map((src, imgIndex) => (
                      <div key={imgIndex} className={styles.imageContainer}>
                        <Image
                          src={
                            getSafeImageSrc(src, imgIndex) || '/placeholder.svg'
                          }
                          alt={`Ілюстрація до відповіді ${index + 1}.${imgIndex + 1}`}
                          width={300}
                          height={200}
                          className={styles.answerImage}
                        />
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

export default FaceliftFAQ;
