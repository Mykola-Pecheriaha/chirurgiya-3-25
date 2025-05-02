'use client';
import styles from './Endoscopy.module.css';
import Image from 'next/image';
import { EndoscopyGallery } from './EndoscopyGallery';

interface EndoscopyProps {
  backgroundColor?: string;
}

export function Endoscopy({ backgroundColor = '#f8f9fa' }: EndoscopyProps) {
  return (
    <section className={styles.endoscopySection} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.introSection}>
          <div className={styles.textColumn}>
            <h2 className={styles.mainTitle}>Ендоскопія</h2>
            <div className={styles.contentBlock}>
              <p className={styles.text}>Ендоскопія — це:</p>
              <ul className={styles.bulletList}>
                <li>сучасний метод обстеження внутрішніх органів</li>
                <li>мінімально інвазивна процедура</li>
                <li>точна візуалізація у реальному часі</li>
                <li>
                  можливість проводити діагностичні та лікувальні процедури
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <Image
              src="/images/endoscopy/endoscopy12.jpg"
              alt="Ендоскопічне обстеження"
              width={600}
              height={400}
              className={styles.mainImage}
            />
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subTitle}>
            <span className={styles.emoji}>🩺</span> Що таке ендоскопія і чому
            вона така ефективна?
          </h3>
          <p className={styles.text}>
            Ендоскопія — один із найбільш інформативних методів інструментальної
            діагностики. Вона дозволяє детально вивчити структуру і стан
            внутрішніх органів, виявити кровотечі, новоутворення, а також
            осередки запалення.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🔹</span> Процедура проводиться за
            допомогою ендоскопа — тонкої гнучкої трубки з відеокамерою та
            світлодіодом на кінці, яку лікар вводить через природні отвори.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🔹</span> Лікар має змогу оглянути
            кожен сантиметр внутрішньої поверхні органу.
          </p>
          <p className={styles.text}>
            <span className={styles.emoji}>🔹</span> Зображення передається на
            екран у високій роздільній здатності (до 200-кратного збільшення), а
            отримані відео та фото зберігаються для аналізу.
          </p>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.textColumn}>
            <h3 className={styles.subTitle}>
              Види ендоскопічних досліджень, що проводяться в нашій клініці
            </h3>
            <div className={styles.contentBlock}>
              <p className={styles.text}>
                <strong>• Ендоскопічна діагностика:</strong>
              </p>
              <ul className={styles.procedureList}>
                <li>гастроскопія;</li>
                <li>колоноскопія;</li>
                <li>ректороманоскопія;</li>
                <li>бронхоскопія</li>
              </ul>
            </div>
            <div className={styles.contentBlock}>
              <p className={styles.text}>
                <strong>• Лікувальні процедури:</strong>
              </p>
              <ul className={styles.procedureList}>
                <li>хромоендоскопія;</li>
                <li>біопсія;</li>
                <li>ендоскопічна поліпектомія;</li>
                <li>
                  ендоскопічна зупинка кровотечі з застосуванням аргонової
                  коагуляції та накладанням кліпс на кровоточиву судину;
                </li>
                <li>
                  папілосфінктеротомія з екстрацією конкрементів з холедоха;
                </li>
                <li>видалення сторонніх предметів.</li>
              </ul>
            </div>
          </div>
          <div className={styles.galleryColumn}>
            <EndoscopyGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Endoscopy;
