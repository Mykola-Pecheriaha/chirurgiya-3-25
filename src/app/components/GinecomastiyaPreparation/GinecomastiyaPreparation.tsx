'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import GalleryGinecomastiyaPreparation from './GalleryGinecomastiyaPreparation';
import styles from './GinecomastiyaPreparation.module.css';

interface GinecomastiyaPreparationProps {
  backgroundColor?: string;
}

const GinecomastiyaPreparation: React.FC<GinecomastiyaPreparationProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const [expandedBlocks, setExpandedBlocks] = useState<number[]>([]);
  const [imagesAvailable, setImagesAvailable] = useState(true);

  const consultationSteps = [
    'огляд та визначення обсягу втручання;',
    'демонстрація фото до-після з аналогічними випадками;',
    'визначення майбутніх результатів.',
  ];

  const galleryImages = [
    '/images/GinecomastiyaPreparation/ginecomas13.jpg',
    '/images/GinecomastiyaPreparation/ginecomas14.jpg',
    '/images/GinecomastiyaPreparation/ginecomas5.jpg',
  ];

  const infoBlocks = [
    {
      title:
        'Лікування гінекомастії хірургічним шляхом: підготовка до операції',
      content:
        'За відповідних показань призначається дата операції. Перед нею пацієнт проходить швидке комплексне обстеження, яке включає здачу аналізів, УЗД, профільний огляд фахівців. Пацієнтам пропонується поєднати в 1 візит консультацію, обстеження та операцію.',
      images: [
        '/images/GinecomastiyaPreparation/ginecomas18.jpg',
        '/images/GinecomastiyaPreparation/ginecomas17.jpg',
      ],
    },
    {
      title:
        'Лікування гінекомастії: проведення операції з видалення гінекомастії',
      content:
        'Метод проведення пластики визначається виходячи з виду патології. Справжня гінекомастія передбачає видалення залозистих тканин та відновлення природного контуру чоловічих грудей. Розріз здійснюється по колу ареоли. Після цього залишається косметичний шов, який через кілька місяців повністю зливається з кольором шкіри соска і зовсім непомітний для оточуючих. Операція проводиться під загальним наркозом. По суті, практично повторюється зменшення грудей у жінок. Ризики при цьому зведено до мінімуму.\n\nХибна гінекомастія вимагає від пацієнта насамперед знизити вагу. Якщо грудні залози недостатньо зменшилися, тоді проводять ліпосакцію в цій зоні. Ліпосакція передбачає видалення надлишку жирових клітин за допомогою спеціальних канюль через невеликі проколи. Після ліпосакції залишаються крихітні проколи, які швидко затягуються практично без сліду.',
      images: [
        '/images/GinecomastiyaPreparation/ginecomas25.jpg',
        '/images/GinecomastiyaPreparation/ginecomas24.jpg',
      ],
    },
    {
      title: 'Лікування гінекомастії: реабілітація',
      content:
        "Після хірургічного втручання, виконаного під загальною анестезією, пацієнт проводить у стаціонарі одну добу під контролем медичного персоналу. Імовірний дискомфорт в області грудей легко усувається знеболюючими.\n\nШви не знімаються. Також необхідно носити пов'язку, що фіксує. Спортом та фізичною працею можна займатися через 4 тижні. Рубцов на тілі не залишається, результат стабільний на все життя.",
      images: [
        '/images/GinecomastiyaPreparation/ginecomas22.jpg',
        '/images/GinecomastiyaPreparation/ginecomas21.jpg',
      ],
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Перевірка доступності зображень
    const checkImagesAvailability = async () => {
      try {
        // Перевіряємо хоча б одне зображення
        const response = await fetch(galleryImages[0], { method: 'HEAD' });
        setImagesAvailable(response.ok);
      } catch (error) {
        setImagesAvailable(false);
      }
    };

    checkImagesAvailability();
  }, []);

  const toggleBlock = (index: number) => {
    setExpandedBlocks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Функція для отримання безпечного шляху до зображення
  const getSafeImageSrc = (src: string) => {
    if (imagesAvailable) return src;
    return `/placeholder.svg?height=400&width=600&query=medical+image`;
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Гінекомастія у чоловіків: консультація</h2>
        <p className={styles.description}>
          Як позбутися гінекомастії? Перший етап – безкоштовна консультація в
          Чернівцях у досвідченого пластичного хірурга Миколи Печеряга.
          Індивідуальна консультація у хірурга включає:
        </p>

        <div className={styles.consultationContent}>
          <div className={styles.steps}>
            {consultationSteps.map((step, index) => (
              <div key={index} className={styles.step}>
                <ArrowRight size={20} className={styles.arrow} />
                <span>{step}</span>
              </div>
            ))}
          </div>
          <div className={styles.gallery}>
            <GalleryGinecomastiyaPreparation
              images={galleryImages}
              galleryId="consultation-gallery"
            />
          </div>
        </div>

        <p className={styles.additionalInfo}>
          Спеціаліст визначає, що стало причиною виникнення патології та
          підбирає необхідний спосіб вирішення проблеми.
        </p>

        <div className={styles.infoBlocks}>
          {infoBlocks.map((block, index) => (
            <div key={index} className={styles.infoBlock}>
              <div className={styles.blockContent}>
                <h3>{block.title}</h3>
                <p>
                  {expandedBlocks.includes(index)
                    ? block.content
                    : `${block.content.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleBlock(index)}
                  className={styles.toggleButton}
                >
                  {expandedBlocks.includes(index)
                    ? 'Показати менше'
                    : 'Показати більше'}
                </button>
              </div>
              <div className={styles.blockGallery}>
                <GalleryGinecomastiyaPreparation
                  images={block.images}
                  galleryId={`info-gallery-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GinecomastiyaPreparation;
