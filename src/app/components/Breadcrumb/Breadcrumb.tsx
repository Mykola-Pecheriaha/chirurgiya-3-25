'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';

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
          return (
            <li key={segment} className={styles.item}>
              <span className={styles.separator}>/</span>
              {isLast ? (
                <span className={styles.current}>{segment}</span>
              ) : (
                <Link href={href} className={styles.link}>
                  {segment}
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
