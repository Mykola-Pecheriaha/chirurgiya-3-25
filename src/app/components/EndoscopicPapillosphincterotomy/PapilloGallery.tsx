'use client';

import {
  GalleryComponent,
  type GalleryImage,
} from '../shared/GalleryComponent';

// Визначаємо зображення безпосередньо в компоненті галереї
const galleryImages: GalleryImage[] = [
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy23.jpg',
    alt: 'Ендоскопічна папілосфінктеротомія',
    width: 800,
    height: 600,
    title: 'Ендоскопічна папілосфінктеротомія',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy20.jpg',
    alt: 'Обладнання для папілосфінктеротомії',
    width: 800,
    height: 600,
    title: 'Обладнання для папілосфінктеротомії',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy21.jpg',
    alt: 'Процес папілосфінктеротомії',
    width: 800,
    height: 600,
    title: 'Процес папілосфінктеротомії',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy22.jpg',
    alt: 'Результати папілосфінктеротомії',
    width: 800,
    height: 600,
    title: 'Результати папілосфінктеротомії',
  },
];

export function PapilloGallery() {
  return <GalleryComponent images={galleryImages} />;
}

export default PapilloGallery;
