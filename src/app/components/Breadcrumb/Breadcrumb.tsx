'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';
import GastroDuodeno from '../GastroDuodeno';
import TraditionalSurgery from '../TraditionalSurgery';

const routeNameMap: { [key: string]: string } = {
  '': 'Головна',
  specialists: 'Спеціалісти',
  chirurg: 'хірургія',
  plasticsurgery: 'Пластична хірургія',
  urolog: 'Урологи',
  oncodermatology: 'Oнко-дерматологія',
  vascularsurgery: 'Судинна хірургія',
  tumorsskin: 'Пухлини шкіри',
  ureteroscopy: 'Уретероскопія',
  cystoscopy: 'Цистоскопія',
  gorbatenko: 'Горбатенко',
  pyzhyk: 'Пижик',
  pecheriaha: 'Печеряга',
  bambizov: 'Бамбизов',
  karpenko: 'Карпенко',
  andrushkova: 'Андрушкова',
  fomin: 'Фомін',
  bilega: 'Білега',
  kubeyev: 'Кубеєв',
  kuriia: 'Курія',
  blyskun: 'Блискун',
  hrudetskyi: 'Грудетський',
  blepharoplasty: 'Блефаропластика',
  services: 'Послуги',
  traditionalsurgery: 'традиційна хірургія',
  liver: 'печінка',
  gallbladder: 'жовчний міхур',
  pancreas: 'підшлункова залоза',
  stomach: 'шлунка',
  intestines: 'кишечника',
  hernia: 'грижі',
  GastroDuodeno: 'Гастродуоденоскопія',
  gastroscopy: 'Гастроскопія',
  TraditionalSurgery: 'Традиційна хірургія',
  laparoscopic: 'Лапароскопічна хірургія',
  emergencysurgery: 'ургентна хірургія',
  varicose: 'варикоз',
  skintumors: 'пухлини шкіри',
  bariatrics: 'бариатрична хірургія',
  proctology: 'проктологія',
  urology: 'урологія',
};

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments =
    pathname?.split('/').filter((segment) => segment !== '') || [];

  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>
            Головна
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          // Використовуємо routeNameMap для відображення перекладеної назви або використовуємо сегмент як запасний варіант
          const displayName = routeNameMap[segment] || segment;

          return (
            <li key={segment} className={styles.item}>
              <span className={styles.separator}>/</span>
              {isLast ? (
                <span className={styles.current}>{displayName}</span>
              ) : (
                <Link href={href} className={styles.link}>
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
