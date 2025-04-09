'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AugmentationConsultation.module.css';

interface AugmentationConsultationProps {
  backgroundColor?: string;
}

interface ConsultationSection {
  id: string;
  title: string;
  icon: string;
  content: string;
  images: { src: string; alt: string }[];
}

const AugmentationConsultation: React.FC<AugmentationConsultationProps> = ({
  backgroundColor = '#f0f7ff',
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  const consultationSections: ConsultationSection[] = [
    {
      id: 'first-meeting',
      title: 'Перша зустріч з пацієнтом',
      icon: '🩺',
      content: `Перша зустріч з майбутнім пацієнтом — надзвичайно відповідальний етап. Вона визначає, чи будемо ми надалі працювати разом, чи ця консультація стане нашою останньою.
Під час первинної консультації ми обговорюємо ваші очікування та побажання щодо операції. Я уважно вислуховую всі думки, проводжу огляд і необхідні вимірювання, щоб підібрати оптимальний розмір та форму імплантів.
Ми також розглядаємо можливі ризики та особливості реабілітаційного періоду. Дуже важливо дати пацієнту обґрунтовану надію — не ілюзії чи "рожеві мрії", а реальне бачення шляхів вирішення проблеми.
Моя мета — не лише інформувати, а й допомогти сформувати тверезе, реалістичне розуміння майбутнього процесу. Все має бути чесно, професійно та конкретно.`,
      images: [
        {
          src: '/images/augmentation-consultation/breast-consultatio1.jpg',
          alt: 'Консультація з хірургом',
        },
        {
          src: '/images/augmentation-consultation/breast-consultatio4.jpg',
          alt: 'Обговорення очікувань',
        },
      ],
    },
    {
      id: 'preparation',
      title: 'Підготовка до операції',
      icon: '📝',
      content: `Перед оперативним втручанням ви отримаєте чіткі та детальні інструкції щодо підготовки. Це стосується режиму харчування, прийому медикаментів та інших важливих моментів, які можуть вплинути на перебіг операції та відновлення.
Ми проведемо всі необхідні аналізи та обстеження, щоб переконатися, що ваш організм готовий до втручання. Обов'язково ще раз узгоджуються розміри й форма імплантів, а також вибирається оптимальний хірургічний доступ.
З практики відомо: для кожного пацієнта існує "свій" найбільш підходящий доступ — той, який є найбільш безпечним, ефективним і відповідним саме для нього.
Також обов'язковим етапом є знайомство з анестезіологом, який проведе огляд і визначить найбільш доцільний метод знеболення — внутрішньовенний, інтубаційний, епідуральний або комбінований.
Перед операцією не повинно залишатися невирішених питань. Після втручання виникають нові відчуття, емоції та очікування — бажано, щоб вони не суттєво відрізнялися від того, про що ми домовилися заздалегідь.`,
      images: [
        {
          src: '/images/augmentation-consultation/preparation1.jpg',
          alt: 'Підготовка до операції',
        },
        {
          src: '/images/augmentation-consultation/preparation11.jpg',
          alt: 'Передопераційні обстеження',
        },
      ],
    },
    {
      id: 'operation',
      title: 'Процес операції',
      icon: '🛠️',
      content: `Операція зі збільшення грудей зазвичай триває 1,5–2 години і проводиться під загальним наркозом, епідуральною або комбінованою анестезією — метод знеболення підбирається індивідуально.
Під час втручання ми використовуємо загальноприйняті хірургічні методики та високоякісні імпланти, щоб досягти найкращого естетичного результату та мінімізувати ризики.
В операційній панує спокійна, злагоджена атмосфера, де кожен член команди чітко знає свої дії. Після завершення операції грудні залози фіксуються еластичними пов'язками у вигляді "корсета", щоб забезпечити правильну форму та підтримку.
Пацієнтка переводиться в палату інтенсивної терапії, де розпочинається післяопераційний догляд:
• контроль та обробка дренажів;
• виконання всіх медикаментозних призначень для знеболення та профілактики ускладнень;
• моніторинг стану пацієнтки для забезпечення максимально комфортного післяопераційного періоду.`,
      images: [
        {
          src: '/images/augmentation-consultation/preparation14.jpg',
          alt: 'Операційна',
        },
        {
          src: '/images/augmentation-consultation/Replacement2.jpg',
          alt: 'Хірургічна команда',
        },
      ],
    },
    {
      id: 'recovery',
      title: 'Післяопераційний період',
      icon: '🩺',
      content: `Після операції ви отримаєте чіткі інструкції щодо:
• догляду за грудьми;
• дотримання режиму;
• прийому медикаментів.
Ми проводимо регулярні контрольні огляди, щоб переконатися, що процес відновлення проходить без ускладнень та відповідає очікуваним результатам.
🔄 Повне відновлення зазвичай триває кілька тижнів.
Проте вже через 1–2 тижні більшість пацієнток можуть повернутися до повсякденних справ.
Наше завдання — максимально підтримати вас у цьому періоді, забезпечивши комфорт, безпеку та впевненість на кожному етапі відновлення.`,
      images: [
        {
          src: '/images/augmentation-consultation/preparation6.jpg',
          alt: 'Післяопераційний догляд',
        },
        {
          src: '/images/augmentation-consultation/preparation16.jpg',
          alt: 'Контрольний огляд',
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Консультація щодо збільшення грудей
        </h2>

        <div className={styles.accordionContainer}>
          {consultationSections.map((section) => (
            <div key={section.id} className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => toggleSection(section.id)}
              >
                <div className={styles.titleContainer}>
                  <span className={styles.sectionIcon}>{section.icon}</span>
                  <h3 className={styles.accordionTitle}>{section.title}</h3>
                </div>
                <span
                  className={`${styles.accordionArrow} ${openSection === section.id ? styles.arrowUp : ''}`}
                >
                  &#9662;
                </span>
              </div>

              {openSection === section.id && (
                <div className={styles.accordionContent}>
                  <div className={styles.textColumn}>
                    {section.content.split('\n').map((paragraph, index) => (
                      <p key={index} className={styles.contentParagraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className={styles.imageColumn}>
                    {section.images.map((image, index) => (
                      <div key={index} className={styles.imageWrapper}>
                        <Image
                          src={image.src || '/placeholder.svg'}
                          alt={image.alt}
                          width={300}
                          height={200}
                          className={styles.image}
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(image.alt)}`;
                          }}
                        />
                        <p className={styles.imageCaption}>{image.alt}</p>
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

export default AugmentationConsultation;
