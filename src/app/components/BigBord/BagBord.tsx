import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './BigBord.module.css';

const BigBord: React.FC = () => {
  return (
    <div className={styles.bigBord}>
      <div className={styles.containerBig}>
        {/* Основний заголовок */}
        <div className={styles.bigText}>
          <h1 className={styles.mainTitle}>
            Хірургічне відділення № 1 ЦМКЛ м.Чернівці
          </h1>
          <h4 className={styles.subTitle}>Обирайте нас - тому що ...</h4>

          <ul className={styles.text}>
            <li>ми професійні</li>
            <li>ми турботливі</li>
            <li>у нас сучасне обладнання</li>
            <li>у нас комфортні палати</li>

            <li> у нас медикаментозне забезпечення</li>
            <li> у нас сучасне і лагідне наркозне забезпечення</li>
          </ul>

          {/* Кнопка "Зв'язатися з нами" */}
          {/* Використовуємо Link для кнопки */}
          <Link href="/about-doctor/contacts">
            <button className={styles.contactButton}>Зв`язатися з нами</button>
          </Link>
        </div>
        <div className={styles.bigImage}>
          <Image
            src="/images/bigbort/bigbort.png"
            alt="Doctor"
            width={450}
            height={430}
          />
        </div>
      </div>
    </div>
  );
};

export default BigBord;
