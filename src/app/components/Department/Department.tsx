'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Department.module.css';

interface DepartmentCard {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

interface DepartmentProps {
  backgroundColor?: string;
  departments?: DepartmentCard[];
  cardsPerRow?: 3 | 4;
}

// Дані про послуги хірургічного відділення
const defaultDepartments: DepartmentCard[] = [
  {
    id: 'surgical-department',
    title: 'Хірургічне відділення №1',
    imageUrl: '/images/department/department4.jpg',
    imageAlt: 'Хірургічне відділення №1',
    link: '/department/surgical-department',
  },

  {
    id: 'operative-room',
    title: 'Операційна',
    imageUrl: '/images/department/department8.jpg',
    imageAlt: 'Операційна',
    link: '/department/operative-room',
  },
];

const Department: React.FC<DepartmentProps> = ({
  backgroundColor = '#f8f9fa',
  departments = defaultDepartments,
  cardsPerRow = 4,
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Послуги хірургічного відділення</h2>

        <div className={styles.departmentRow}>
          {departments.map((department) => (
            <Link
              href={department.link}
              key={department.id}
              className={styles.departmentCardLink}
            >
              <div className={styles.departmentCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={department.imageUrl || '/placeholder.svg'}
                    alt={department.imageAlt}
                    width={200}
                    height={200}
                    className={styles.departmentImage}
                  />
                </div>
                <h3 className={styles.departmentTitle}>{department.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;
