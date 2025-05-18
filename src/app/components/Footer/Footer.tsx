'use client';

import type React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import styles from './Footer.module.css';

interface FooterProps {
  backgroundColor?: string;
}

const Footer: React.FC<FooterProps> = ({ backgroundColor = '#1e3a8a' }) => {
  return (
    <footer className={styles.footer} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Перша колонка - Про відділення */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>
              Хірургічне відділення № 1 ЦМКЛ м.Чернівці
            </h3>
            <p className={styles.columnSubtitle}>Обирайте нас - тому що ...</p>
            <ul className={styles.featuresList}>
              <li>ми професійні</li>
              <li>ми турботливі</li>
              <li>у нас сучасне обладнання</li>
              <li>у нас комфортні палати</li>
              <li>у нас повне медикаментозне забезпечення</li>
              <li>у нас сучасне і лагідне наркозне забезпечення</li>
            </ul>
          </div>

          {/* Друга колонка - Навігація */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Навігація</h3>
            <ul className={styles.navList}>
              <li>
                <Link href="/">Головна</Link>
              </li>
              <li>
                <Link href="/specialists">Наші фахівці</Link>
              </li>
              <li>
                <Link href="/services">Послуги</Link>
              </li>
              <li>
                <Link href="/doctors">Про лікарів</Link>
              </li>
              <li>
                <Link href="/department">Відділення</Link>
              </li>
            </ul>
          </div>

          {/* Третя колонка - Додатково */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Додатково</h3>
            <ul className={styles.navList}>
              <li>
                <Link href="/blog">Блог</Link>
              </li>
              <li>
                <Link href="/reviews">Відгуки</Link>
              </li>
              <li>
                <Link href="/about-doctor/contacts">Контакти</Link>
              </li>
            </ul>
          </div>

          {/* Четверта колонка - Контакти */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Контакти</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.icon} />
                <span>
                  м. Чернівці, вул. Героїв Майдану, 226 (вхід з вулиці
                  Рівенська)
                </span>
              </li>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>+380 (66) 010-01-03</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <span>surgery@cmkl.cv.ua</span>
              </li>
            </ul>

            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} Хірургічне відділення № 1 ЦМКЛ
            м.Чернівці. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
