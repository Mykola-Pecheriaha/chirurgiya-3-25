'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImplantBreastRecoveryReabilit.module.css';

interface ImplantBreastRecoveryReabilitProps {
  backgroundColor?: string;
}

const ImplantBreastRecoveryReabilit: React.FC<
  ImplantBreastRecoveryReabilitProps
> = ({ backgroundColor = '#f0f7ff' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `Вже наступного дня після операції пацієнтка повертається додому з детальними рекомендаціями щодо догляду та відновлення.
У перші дні можливі незначні дискомфортні відчуття: загальна слабкість, набряклість, тиск у ділянці грудної клітки, поява синців. Ці симптоми є нормальними та швидко зникають завдяки призначеним знеболювальним препаратам.
Шви не потребують зняття — ми використовуємо сучасні саморозсмоктувальні нитки та спеціальний медичний клей, що забезпечує естетичне загоєння шкіри.
Компресійну білизну необхідно носити цілодобово протягом перших 14 днів, а ще два тижні — лише на ніч. Протягом двох місяців слід утриматися від активних фізичних навантажень, відвідування сауни та лазні.
Повне відновлення триває близько 2–3 тижнів, а оцінити фінальний результат можна вже через місяць після операції.`;

  const truncatedText = fullText.substring(0, 100) + '...';

  // Основне зображення
  const mainImage = {
    src: '/images/ImplantBreastRecoveryReabilit/reabilitatio1.jpg',
    width: 800,
    height: 600,
    alt: 'Реабілітаційний період після заміни імплантів молочних залоз',
  };

  // Перевірка доступності зображення
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const img = new window.Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(false);
      img.src = mainImage.src;
    }
  }, [mainImage.src]);

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Реабілітаційний період після заміни імплантів молочних залоз
        </h2>

        <div className={styles.contentBox}>
          <h3 className={styles.sectionTitle}>Реабілітаційний</h3>

          <div className={styles.contentLayout}>
            <div className={styles.textContent}>
              <p>{isExpanded ? fullText : truncatedText}</p>
              <button
                onClick={toggleExpand}
                className={styles.readMoreButton}
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Показати менше' : 'Показати більше'}
              </button>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={
                  imageLoaded
                    ? mainImage.src
                    : `/placeholder.svg?height=${mainImage.height}&width=${mainImage.width}&query=breast implant recovery`
                }
                alt={mainImage.alt}
                width={mainImage.width}
                height={mainImage.height}
                className={styles.mainImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplantBreastRecoveryReabilit;
