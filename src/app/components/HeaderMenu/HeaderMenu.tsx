'use client';

import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderMenu.module.css';
import ConsultationButton from '../ConsultationButton/ConsultationButton';

interface HeaderMenuProps {
  backgroundColor?: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  backgroundColor = 'white',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSubMenuToggle = (menuName: string | null) => {
    setActiveSubMenu(menuName);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveSubMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ backgroundColor }} className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image
          src="/images/logo/logo.bmp"
          alt="Logo"
          width={40}
          height={40}
          className={styles.logoImage}
        />
        <strong>SuRg1</strong>
      </div>

      <div className={styles.headerRight} ref={menuRef}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Головна
          </Link>

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('results')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/results" className={styles.navLink}>
              Результати ↓
            </Link>
            {activeSubMenu === 'results' && (
              <div className={styles.subMenu}>
                <div className={styles.subMenuSection}>
                  <div className={styles.subMenuColumn}>
                    <Link
                      href="/results/face-plastic"
                      className={styles.navLink}
                    >
                      Пластика обличчя
                    </Link>
                    <Link
                      href="/results/otto-plastic"
                      className={styles.navLink}
                    >
                      Пластика вушних раковин
                    </Link>
                    <Link
                      href="/results/breast-plastic"
                      className={styles.navLink}
                    >
                      Пластика грудей
                    </Link>
                    <Link
                      href="/results/body-plastic"
                      className={styles.navLink}
                    >
                      Пластика тіла
                    </Link>
                    <Link
                      href="/results/tumors-skin"
                      className={styles.navLink}
                    >
                      Пухлини шкіри
                    </Link>
                    <Link href="/albums/" className={styles.navLink}>
                      Альбоми
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Інші пункти меню залишаються без змін */}
          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('services')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/services" className={styles.navLink}>
              Послуги ↓
            </Link>
            {activeSubMenu === 'services' && (
              <div className={styles.subMenu}>
                <div className={styles.subMenuSection}>
                  <p>Пластика обличчя</p>
                  <div className={styles.subMenuColumn}>
                    <Link
                      href="/services/face-surgery/face-lift"
                      className={styles.navLink}
                    >
                      Підтяжка обличчя та шиї
                    </Link>
                    <Link
                      href="/services/face-surgery/flap-correction"
                      className={styles.navLink}
                    >
                      Пластика дольки вуха
                    </Link>
                  </div>
                </div>
                <div className={styles.subMenuSection}>
                  <p>Загальна хірургія</p>
                  <div className={styles.subMenuColumn}>
                    <Link
                      href="/services/general-surgery/gerniotomiya"
                      className={styles.navLink}
                    >
                      Видалення гриж
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('about-doctor')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/about-doctor" className={styles.navLink}>
              Про лікаря ↓
            </Link>
            {activeSubMenu === 'about-doctor' && (
              <div className={`${styles.subMenu} ${styles.columnSubMenu}`}>
                <Link href="/about-doctor/team" className={styles.navLink}>
                  Команда
                </Link>
                <Link href="/about-doctor/contacts" className={styles.navLink}>
                  Контакти
                </Link>
              </div>
            )}
          </div>

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('operative')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/operative" className={styles.navLink}>
              Відділення ↓
            </Link>
            {activeSubMenu === 'operative' && (
              <div className={`${styles.subMenu} ${styles.columnSubMenu}`}>
                <Link
                  href="/operative/operative-room"
                  className={styles.navLink}
                >
                  Операційна
                </Link>
                <Link
                  href="/operative/preparation-surgery"
                  className={styles.navLink}
                >
                  Підготовка до операції
                </Link>
                <Link
                  href="/operative/rehabilitation"
                  className={styles.navLink}
                >
                  Реабілітація
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.consultationButtonWrapper}>
          <ConsultationButton />
        </div>

        <div className={styles.burger} onClick={toggleMenu}>
          ☰ Menu
        </div>

        {isMenuOpen && (
          <div className={styles.burgerMenu}>
            <Link
              href="/"
              onClick={handleMenuItemClick}
              className={styles.burgerLink}
            >
              Головна
            </Link>

            {/* Мобільне меню залишається без змін */}
            <div className={styles.burgerMenuItem}>
              <span onClick={() => handleSubMenuToggle('results')}>
                Результати ↓
              </span>
              {activeSubMenu === 'results' && (
                <div className={styles.burgerSubMenu}>
                  <Link
                    href="/results/face-plastic"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пластика обличчя
                  </Link>
                  <Link
                    href="/results/otto-plastic"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пластика вушних раковин
                  </Link>
                  <Link
                    href="/results/breast-plastic"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пластика грудей
                  </Link>
                  <Link
                    href="/results/body-plastic"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пластика тіла
                  </Link>
                  <Link
                    href="/results/tumors-skin"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пухлини шкіри
                  </Link>
                </div>
              )}
            </div>

            {/* Інші пункти мобільного меню залишаються без змін */}
            <div className={styles.burgerMenuItem}>
              <span onClick={() => handleSubMenuToggle('services')}>
                Послуги ↓
              </span>
              {activeSubMenu === 'services' && (
                <div className={styles.burgerSubMenu}>
                  <Link
                    href="/services/face-surgery/face-lift"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Підтяжка обличчя та шиї
                  </Link>
                  {/* Інші пункти меню послуг */}
                </div>
              )}
            </div>

            <div className={styles.burgerMenuItem}>
              <span onClick={() => handleSubMenuToggle('about-doctor')}>
                Про лікаря ↓
              </span>
              {activeSubMenu === 'about-doctor' && (
                <div className={styles.burgerSubMenu}>
                  <Link
                    href="/about-doctor/team"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Команда
                  </Link>
                  {/* Інші пункти меню про лікаря */}
                </div>
              )}
            </div>

            <div className={styles.burgerMenuItem}>
              <span onClick={() => handleSubMenuToggle('operative')}>
                Відділення ↓
              </span>
              {activeSubMenu === 'operative' && (
                <div className={styles.burgerSubMenu}>
                  <Link
                    href="/operative/operative-room"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Операційнa
                  </Link>
                  <Link
                    href="/operative/rehabilitation"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Реабілітація
                  </Link>
                </div>
              )}
            </div>

            <div className={styles.consultationButtonWrapper}>
              <ConsultationButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
