'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactsBar.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactsBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
    if (window.innerWidth > 768) setIsMenuOpen(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.contactsBarContainer} ref={menuRef}>
      <div className={styles.contentWrapper}>
        {!isDesktop && (
          <button
            className={styles.burgerButton}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        )}

        {isDesktop ? (
          <div className={styles.contactInfo}>
            <p>
              Телефон: <a href="tel:+38(050) 7575411">+38(050) 75 75 411</a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:Pecheryag@gmail.com">Pecheryag@gmail.com</a>
            </p>
            <p>
              <a
                href="https://goo.gl/maps/youraddress"
                target="_blank"
                rel="noopener noreferrer"
              >
                вул. Героїв Майдану 226, Чернівці, Україна
              </a>
            </p>
          </div>
        ) : (
          isMenuOpen && (
            <div className={styles.burgerMenu}>
              <p>
                Телефон: <a href="tel:+38(050) 7575411">+38(050) 75 75 411</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:Pecheryag@gmail.com">Pecheryag@gmail.com</a>
              </p>
              <p>
                <a
                  href="https://goo.gl/maps/youraddress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  вул. Героїв Майдану 226, Чернівці, Україна
                </a>
              </p>
            </div>
          )
        )}

        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/profile.php?id=100003098763675"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsBar;
