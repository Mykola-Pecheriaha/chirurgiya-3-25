'use client';

import {
  GalleryComponent,
  type GalleryImage,
} from '../shared/GalleryComponent';

// Визначаємо зображення безпосередньо в компоненті галереї
const galleryImages: GalleryImage[] = [
  {
    src: '/images/fiberGastroscopy/fiberGastroscopy1.jpg',
    alt: 'Процедура ФЕГДС',
    width: 800,
    height: 600,
    title: 'Процедура ФЕГДС',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy25.jpg',
    alt: 'Обладнання для ФЕГДС',
    width: 800,
    height: 600,
    title: 'Сучасне обладнання для ФЕГДС',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy20.jpg',
    alt: 'Підготовка до ФЕГДС',
    width: 800,
    height: 600,
    title: 'Підготовка до ФЕГДС',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy7.jpg',
    alt: 'Результати ФЕГДС',
    width: 800,
    height: 600,
    title: 'Результати ФЕГДС',
  },
];

export function GastroGallery() {
  return <GalleryComponent images={galleryImages} />;
}

export default GastroGallery;
