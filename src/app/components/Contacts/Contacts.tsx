'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Contacts.module.css';

interface ContactInfo {
  id: number;
  name: string;
  position: string;
  experience: string;
  scientificTitle?: string;
  specializations: string[];
  phones?: string[];
  emails?: string[];
  socialMedia?: {
    facebook?: string;
    telegram?: string;
    messenger?: string;
    youtube?: string;
    instagram?: string;
  };
  other?: string;
  imageUrl: string;
  category?: string; // Додано category до інтерфейсу
}

interface ContactsProps {
  backgroundColor?: string;
}

const contactsData: ContactInfo[] = [
  {
    id: 1,
    name: 'Горбатенко Едуард Олександрович',
    position: ' Заступник медичного директора по хірургії.',
    experience: 'Стаж роботи: ... років',
    category: 'Вища категорія',
    scientificTitle: '...',
    specializations: ['Загальна хірургія', 'Лапароскопічна хірургія'],
    phones: ['+380 (50) 123-45-67', '+380 (67) 987-65-43'],
    emails: ['petrenko.ivan@hospital.ua', 'dr.petrenko@gmail.com'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.petrenko',
      telegram: 'https://t.me/dr_petrenko',
      instagram: 'https://instagram.com/dr.petrenko',
    },
    other: 'Член Асоціації хірургів України',
    imageUrl: '/images/contacts/gorbatenko.jpg',
  },
  {
    id: 2,
    name: 'Пижик Валентин Анатолійович',
    position: 'Завідувач хірургічного відділення №2. ',
    experience: 'Стаж роботи: ... років',
    category: 'Вища категорія',

    specializations: ['Загальна хірургія'],
    phones: ['+380 (50) 234-56-78'],
    emails: ['kovalenko.maria@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.kovalenko',
      youtube: 'https://youtube.com/c/DrKovalenko',
      messenger: 'https://m.me/dr.kovalenko',
    },
    other: 'Автор 25 наукових публікацій',
    imageUrl: '/images/contacts/pyzhyk.JPG',
  },
  {
    id: 3,
    name: 'Печеряга Микола Миколайович',
    position: 'Хірург загальної, пластичної та малоінвазивної хірургії',
    experience: 'Стаж роботи: 30 років',
    category: 'Вища категорія',
    specializations: [
      'Загальна хірургія',
      'Пластична хірургія',
      'Естетична хірургія',
      'Лапароскопічна хірургія',
      'Флебологія',
      'Проктологія',
    ],
    phones: ['+380 (67) 328-73-22', '+380 (50) 757-54-11'],
    emails: ['Pecheryag@gmail.com', 'pecheryag1968@gmail.com'],
    socialMedia: {
      telegram: 'https://t.me/PecheriahaMykola',
      instagram:
        'https://www.instagram.com/nikolaipecheriaga?igsh=MTVqcnNod2h4c2I4YQ==',
      messenger: 'https://m.me/nikolai.pecheriaga',
      youtube: 'https://www.youtube.com/@nikolaipecheriaga',
      facebook: 'https://www.facebook.com/profile.php?id=100003098763675',
    },
    other: 'Регулярно проходить стажування за кордоном',
    imageUrl: '/images/contacts/pecheriaha.JPG',
  },
  {
    id: 4,
    name: 'Бамбизов Леонід Михайлович',
    position: 'Хірург загальної, ...',
    experience: 'Стаж роботи: ... років',
    category: 'Вища категорія',
    scientificTitle: 'Кандидат медичних наук',
    specializations: ['Загальна хірургія', 'Малоінвазивна хірургія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/bambizov.jpg',
  },
  {
    id: 5,
    name: 'Карпенко Олександир Вікторович',
    position: 'Хірург загальної, ...',
    experience: 'Стаж роботи: ... років',
    category: 'Вища категорія',
    scientificTitle: '...',
    specializations: ['Загальна хірургія', 'Малоінвазивна хірургія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/karpenko.jpg',
  },
  {
    id: 6,
    name: 'Андрушкова Юлія Анатолієвна',
    position: 'Хірург загальної, ...',
    experience: 'Стаж роботи: ... років',
    category: 'Вища категорія',
    scientificTitle: 'Кандидат медичних наук',
    specializations: ['Загальна хірургія', 'Малоінвазивна хірургія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/andrushkova.JPG',
  },
  {
    id: 7,
    name: 'Білега Богдан',
    position: 'Хірург загальної, ...',
    experience: 'Стаж роботи: ... років',
    category: 'Вища категорія',
    scientificTitle: 'Кандидат медичних наук',
    specializations: ['Загальна хірургія', 'Малоінвазивна хірургія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/bilega1.jpg',
  },
  {
    id: 9,
    name: 'Грудецький Віталшй Віталійович',
    position: 'Хірург загальної практики, ...',
    experience: 'Стаж роботи: ... років',
    category: '.... категорія',

    specializations: ['Загальна хірургія', 'Малоінвазивна хірургія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/icon7.jpg',
  },
  {
    id: 10,
    name: 'Кубеєв Сергій Германович',
    position: 'Уролог, ...',
    experience: 'Стаж роботи: ... років',
    category: 'Вища категорія',
    scientificTitle: 'Кандидат медичних наук',
    specializations: ['Загальна хірургія', 'Малоінвазивна хірургія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/kubeyev.JPG',
  },
  {
    id: 11,
    name: 'Курій Микола Іванович',
    position: 'Уролог, ...',
    experience: 'Стаж роботи: ... років',
    category: '...',

    specializations: ['Урологія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/kurii.JPG',
  },
  {
    id: 12,
    name: 'Блискун Володимир',
    position: 'Уролог, ...',
    experience: 'Стаж роботи: ... років',
    category: '... категорія',

    specializations: ['Урологія'],
    phones: ['+380 (50) 456-78-90'],
    emails: ['melnyk.natalia@hospital.ua'],
    socialMedia: {
      facebook: 'https://facebook.com/dr.melnyk',
      youtube: 'https://youtube.com/c/DrMelnyk',
      instagram: 'https://instagram.com/dr.melnyk',
    },
    imageUrl: '/images/contacts/cartca3.jpg',
  },
];

export const Contacts: React.FC<ContactsProps> = ({
  backgroundColor = '#f8f9fa',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакти</h2>

        <div className={styles.contactsList}>
          {contactsData.map((contact) => (
            <div key={contact.id} className={styles.contactCard}>
              <div className={styles.contactImageContainer}>
                <Image
                  src={contact.imageUrl || '/placeholder.svg'}
                  alt={`Фото ${contact.name}`}
                  width={300}
                  height={400}
                  className={styles.contactImage}
                />
              </div>

              <div className={styles.contactInfo}>
                <h3 className={styles.contactName}>{contact.name}</h3>
                <p className={styles.contactPosition}>{contact.position}</p>
                <p className={styles.contactExperience}>{contact.experience}</p>

                {contact.scientificTitle && (
                  <p className={styles.contactScientificTitle}>
                    {contact.scientificTitle}
                  </p>
                )}

                {contact.category && (
                  <p className={styles.contactCategory}>{contact.category}</p>
                )}

                <div className={styles.contactSpecializations}>
                  <p className={styles.specializationsTitle}>
                    Напрямки хірургії:
                  </p>
                  <ul className={styles.specializationsList}>
                    {contact.specializations.map((spec, index) => (
                      <li key={index} className={styles.specializationItem}>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Телефони */}
                {contact.phones && contact.phones.length > 0 && (
                  <div className={styles.contactPhones}>
                    <p className={styles.contactSectionTitle}>Телефони:</p>
                    <ul className={styles.contactList}>
                      {contact.phones.map((phone, index) => (
                        <li key={index} className={styles.contactItem}>
                          <span className={styles.contactIcon}>📞</span>
                          <a
                            href={`tel:${phone.replace(/\D/g, '')}`}
                            className={styles.contactLink}
                          >
                            {phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Електронні адреси */}
                {contact.emails && contact.emails.length > 0 && (
                  <div className={styles.contactEmails}>
                    <p className={styles.contactSectionTitle}>Email:</p>
                    <ul className={styles.contactList}>
                      {contact.emails.map((email, index) => (
                        <li key={index} className={styles.contactItem}>
                          <span className={styles.contactIcon}>✉️</span>
                          <a
                            href={`mailto:${email}`}
                            className={styles.contactLink}
                          >
                            {email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Соціальні мережі */}
                {contact.socialMedia && (
                  <div className={styles.socialMedia}>
                    <p className={styles.contactSectionTitle}>
                      Соціальні мережі:
                    </p>
                    <div className={styles.socialIcons}>
                      {contact.socialMedia.facebook && (
                        <Link
                          href={contact.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Facebook"
                        >
                          <span className={styles.facebookIcon}>f</span>
                        </Link>
                      )}
                      {contact.socialMedia.telegram && (
                        <Link
                          href={contact.socialMedia.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Telegram"
                        >
                          <span className={styles.telegramIcon}>t</span>
                        </Link>
                      )}
                      {contact.socialMedia.messenger && (
                        <Link
                          href={contact.socialMedia.messenger}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Messenger"
                        >
                          <span className={styles.messengerIcon}>m</span>
                        </Link>
                      )}
                      {contact.socialMedia.youtube && (
                        <Link
                          href={contact.socialMedia.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="YouTube"
                        >
                          <span className={styles.youtubeIcon}>y</span>
                        </Link>
                      )}
                      {contact.socialMedia.instagram && (
                        <Link
                          href={contact.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialIcon}
                          aria-label="Instagram"
                        >
                          <span className={styles.instagramIcon}>i</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )}

                {contact.other && (
                  <p className={styles.contactOther}>{contact.other}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
