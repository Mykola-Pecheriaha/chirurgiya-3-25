'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './Footer.module.css';

interface FooterProps {
  backgroundColor?: string;
}

export default function Footer({ backgroundColor = '#1e3a8a' }: FooterProps) {
  // Використовуємо useState для зберігання контактних даних
  const [contactData] = React.useState({
    address: 'м. Чернівці, вул. Героїв Майдану, 226 (вхід з вулиці Рівенська)',
    phone: '+380 (50) 123-45-67',
    email: 'info@surgery-clinic.com',
    hours: 'Пн-Пт: 9:00-18:00, Сб: 9:00-14:00',
  });

  return (
    <footer
      className={styles.footer}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div>
            <h3>Про клініку</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about">Про нас</Link>
              </li>
              <li>
                <Link href="/team">Наша команда</Link>
              </li>
              <li>
                <Link href="/about-doctor/contacts">Контакти</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerContactInfo}>
            <h3>Контактна інформація</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} />
                <span>{contactData.address}</span>
              </li>
              <li>
                <Phone size={18} />
                <span>{contactData.phone}</span>
              </li>
              <li>
                <Mail size={18} />
                <span>{contactData.email}</span>
              </li>
              <li>
                <Clock size={18} />
                <span>{contactData.hours}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3>Послуги</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/services/laparoscopy">Лапароскопія</Link>
              </li>
              <li>
                <Link href="/services/endoscopy">Ендоскопія</Link>
              </li>
              <li>
                <Link href="/services/proctology">Проктологія</Link>
              </li>
              <li>
                <Link href="/services/varicose">Варикозна хвороба</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Хірургічна клініка. Всі права
            захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}
