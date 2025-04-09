'use client';

import type React from 'react';
import BreastGallery from '../../components/BreastGallery/BreastGallery';
import styles from './BreastAugmentationPreparation.module.css';
import { TextBlock } from './TextBlock';

interface BreastAugmentationPreparationProps {
  backgroundColor?: string;
}

const BreastAugmentationPreparation: React.FC<
  BreastAugmentationPreparationProps
> = ({ backgroundColor = '#f8f9fa' }) => {
  // Масиви зображень для галерей
  const implantsGalleryImages = [
    '/images/breast-augmentation-preparation/implant4.jpg',
    '/images/breast-augmentation-preparation/access3.jpg',
    '/images/breast-augmentation-preparation/implant1.jpg',
    '/images/breast-augmentation-preparation/implant6.jpg',
  ];

  const examinationGalleryImages = [
    '/images/breast-augmentation-preparation/preparation4.jpg',
    '/images/breast-augmentation-preparation/USD1.jpg',
    '/images/breast-augmentation-preparation/mamograft15.jpg',
    '/images/breast-augmentation-preparation/ecg.jpg',
  ];

  const placementGalleryImages = [
    '/images/breast-augmentation-preparation/implant7.jpg',
    '/images/breast-augmentation-preparation/access1.jpg',
    '/images/breast-augmentation-preparation/implant11.jpg',
    '/images/breast-augmentation-preparation/implant5.jpg',
  ];

  // Тексти для блоків
  const implantsText = `🟣 Види грудних імплантів
Вибір імплантатів — один із найважливіших етапів для пацієнтки. Необхідно визначитися з формою, структурою поверхні та типом наповнювача.
Грудні імплантати класифікуються за кількома критеріями:
	• 🔹 Поверхня оболонки:
		○ мікротекстурована
		○ макротекстурована
		○ мікрополіуританова
	• 🔹 Форма:
		○ кругла
		○ анатомічна (краплеподібна)
	• 🔹 Наповнювач:
		○ різні типи силіконового гелю

🧬 Підбір імплантатів проводиться індивідуально, з урахуванням анатомічних особливостей організму та естетичних побажань пацієнтки. Це дозволяє досягти максимально природної, гармонійної та красивої форми грудей.`;

  const examinationText = `🟣 Обстеження перед імплантацією грудей
Операція зі збільшення грудей вимагає ретельної підготовки. Техніка проведення втручання визначається лише після комплексного обстеження пацієнтки.
До обстеження входить:
	• 🔹 УЗД молочних залоз
	• 🔹 Мамографія (за потреби)
	• 🔹 Огляд профільних спеціалістів
	• 🔹 Загальні та спеціальні аналізи
	• 🔹 ЕКГ
	• 🔹 Флюорографія (ФОГК)

📌 Для іногородніх пацієнтів передбачена можливість поєднати консультацію, обстеження та здачу аналізів в один день, а також провести операцію під час того ж візиту. Це значно економить час і є зручним варіантом для пацієнтів з інших міст.`;

  const placementText = `🟣 Розташування імпланту під час операції зі збільшення грудей
Місце встановлення імплантату залежить від вихідного стану молочної залози: її об'єму, наявного опущення, товщини підшкірної клітковини та інших анатомічних особливостей. Вибір способу розміщення імпланту ухвалюється пластичним хірургом індивідуально.
🔹 Можливі варіанти розташування імплантату:
	• Під залозу (над м'язом)
	• Під м'яз
	• Комбіновано (частково під м'язом, частково під залозою)

📌 Пояснення технік:
🔸 Під залозу
Імплантат розміщується між тканиною молочної залози та великим грудним м'язом.
Мінус: у пацієнток із тонкою шкірою або невеликою кількістю підшкірного жиру імплантат може бути помітним або прощупуватися, викликаючи ефект контурованості.
🔸 Під м'яз
Імплантат розміщується між великим і малим грудними м'язами. Цей варіант забезпечує кращу маскування імпланту, зменшує ризик контурованості, а також стабілізує його положення.

	🔍 Важливо: остаточне рішення щодо місця встановлення імплантату — над м'язом чи під ним — приймає хірург, враховуючи всі анатомічні особливості пацієнтки.
	Рекомендуємо довіритися його професійній думці.`;

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Що потрібно знати перед операцією з мамопластики
        </h2>

        {/* Перший блок */}
        <div className={styles.contentBlock}>
          <div className={styles.textColumn}>
            <TextBlock text={implantsText} />
          </div>
          <div className={styles.galleryColumn}>
            <BreastGallery
              images={implantsGalleryImages}
              galleryId="implants-gallery"
              imageHeight={350}
              imageWidth={500}
              aspectRatio="3/2"
              borderRadius="10px"
            />
          </div>
        </div>

        {/* Другий блок */}
        <div className={styles.contentBlock}>
          <div className={styles.textColumn}>
            <TextBlock text={examinationText} />
          </div>
          <div className={styles.galleryColumn}>
            <BreastGallery
              images={examinationGalleryImages}
              galleryId="examination-gallery"
              imageHeight={400}
              imageWidth={550}
              aspectRatio="5/4"
              borderRadius="8px"
            />
          </div>
        </div>

        {/* Третій блок */}
        <div className={styles.contentBlock}>
          <div className={styles.textColumn}>
            <TextBlock text={placementText} />
          </div>
          <div className={styles.galleryColumn}>
            <BreastGallery
              images={placementGalleryImages}
              galleryId="placement-gallery"
              imageHeight={450}
              imageWidth={600}
              aspectRatio="4/3"
              borderRadius="12px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastAugmentationPreparation;
