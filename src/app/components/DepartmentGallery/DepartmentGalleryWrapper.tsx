'use client';
import { DepartmentGallery } from './DepartmentGallery';
import styles from './DepartmentGallery.module.css';

interface DepartmentGalleryWrapperProps {
  backgroundColor?: string;
  title?: string;
}

export function DepartmentGalleryWrapper({
  backgroundColor = '#f8f9fa',
  title = 'Галерея хірургічного відділення',
}: DepartmentGalleryWrapperProps) {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <DepartmentGallery initialIndex={0} />
      </div>
    </div>
  );
}
