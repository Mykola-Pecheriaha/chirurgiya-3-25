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
            onMouseEnter={() => handleSubMenuToggle('specialists')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/specialists" className={styles.navLink}>
              Наші фахівці ↓
            </Link>
            {activeSubMenu === 'specialists' && (
              <div className={styles.subMenu}>
                <div className={styles.subMenuSection}>
                  <div className={styles.subMenuColumn}>
                    <Link
                      href="/specialists/chirurg"
                      className={styles.navLink}
                    >
                      хірургія
                    </Link>
                    <Link
                      href="/specialists/plasticsurgery"
                      className={styles.navLink}
                    >
                      Пластична хірургія
                    </Link>

                    <Link href="/specialists/urolog" className={styles.navLink}>
                      Урологи
                    </Link>
                    <Link
                      href="/specialists/oncodermatology"
                      className={styles.navLink}
                    >
                      Oнко-дерматологія
                    </Link>
                    <Link
                      href="/specialists/vascularsurgery"
                      className={styles.navLink}
                    >
                      Судинна хірургія
                    </Link>
                    <Link
                      href="/specialists/tumorsskin"
                      className={styles.navLink}
                    >
                      Пухлини шкіри
                    </Link>
                    <Link
                      href="/specialists/bariatriya"
                      className={styles.navLink}
                    >
                      Баріатрична хірургія
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
                  <div className={styles.subMenuColumn}>
                    <Link
                      href="/services/emergencysurgery"
                      className={styles.navLink}
                    >
                      Невідкладна хірургія
                    </Link>
                    <Link
                      href="/services/traditional-surgery"
                      className={styles.navLink}
                    >
                      Традиційна хірургія
                    </Link>
                    <Link
                      href="/services/plastic-surgery"
                      className={styles.navLink}
                    >
                      Пластична хірургія
                    </Link>
                    <Link
                      href="/services/minimally-invasive"
                      className={styles.navLink}
                    >
                      Млоінвазивна хірургія
                    </Link>
                    <Link href="/services/varicose" className={styles.navLink}>
                      Судинна хірургія
                    </Link>
                    <Link
                      href="/services/bariatrics"
                      className={styles.navLink}
                    >
                      Баріатрична хірургія
                    </Link>
                    <Link
                      href="/services/proctology"
                      className={styles.navLink}
                    >
                      Проктологія
                    </Link>
                    <Link href="/services/urology" className={styles.navLink}>
                      Урологія
                    </Link>
                    <Link
                      href="/services/skintumors"
                      className={styles.navLink}
                    >
                      Онкохірургія
                    </Link>
                    <Link
                      href="/services/pyoseptic-surgery"
                      className={styles.navLink}
                    >
                      Гнійно-септична хірургія
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
            onMouseEnter={() => handleSubMenuToggle('department')}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <Link href="/department" className={styles.navLink}>
              Відділення ↓
            </Link>
            {activeSubMenu === 'department' && (
              <div className={`${styles.subMenu} ${styles.columnSubMenu}`}>
                <Link
                  href="/department/operative-room"
                  className={styles.navLink}
                >
                  Операційна
                </Link>
                <Link
                  href="/department/surgical-department"
                  surgical-department="true"
                  className={styles.navLink}
                >
                  Хірургічне відділення №1
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
              <span onClick={() => handleSubMenuToggle('specialists')}>
                Наші фахівці↓
              </span>
              {activeSubMenu === 'specialists' && (
                <div className={styles.burgerSubMenu}>
                  <Link
                    href="/specialists/chirurgus"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Хірургія
                  </Link>
                  <Link
                    href="/specialists/plastic-surgery"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пластична хірургія
                  </Link>
                  <Link
                    href="/specialists/urolog"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Урологи
                  </Link>
                  <Link
                    href="/specialists/onco-dermatology"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Онко-дерматологія
                  </Link>
                  <Link
                    href="/specialists/vascular-surgery"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Судинна хірургія
                  </Link>
                  <Link
                    href="/specialists/bariatriya"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Баріатрична хірургія
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
                    href="/services/traditional-surgery"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Хірургічні хвороби
                  </Link>
                  <Link
                    href="/services/emergencysurgery"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Ургентна хірургія
                  </Link>

                  <Link
                    href="/services/plastic-surgery"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пластична хірургія
                  </Link>
                  <Link
                    href="/services/varicose"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Судинна хірургія
                  </Link>
                  <Link
                    href="/services/skintumors"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Пухлини шкіри
                  </Link>
                  <Link
                    href="/services/minimally-invasive"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Малоінвазивна хірургія
                  </Link>

                  <Link
                    href="/services/bariatrics"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Баріатрична хірургія
                  </Link>
                  <Link
                    href="/services/proctology"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Проктологія
                  </Link>
                  <Link
                    href="/services/urolog"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Урологія
                  </Link>
                  <Link
                    href="/services/pyoseptic-surgery"
                    onClick={handleMenuItemClick}
                    className={styles.navLink}
                  >
                    Гнійно септична хірургія
                  </Link>
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
