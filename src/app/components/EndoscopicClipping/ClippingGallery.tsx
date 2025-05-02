'use client';

import {
  GalleryComponent,
  type GalleryImage,
} from '../shared/GalleryComponent';

// Визначаємо зображення безпосередньо в компоненті галереї
const galleryImages: GalleryImage[] = [
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy12.jpg',
    alt: 'Ендоскопічне кліпування',
    width: 800,
    height: 600,
    title: 'Ендоскопічне кліпування',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy15.jpg',
    alt: 'Кліпси для ендоскопічного кліпування',
    width: 800,
    height: 600,
    title: 'Кліпси для ендоскопічного кліпування',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy18.jpg',
    alt: 'Процес ендоскопічного кліпування',
    width: 800,
    height: 600,
    title: 'Процес ендоскопічного кліпування',
  },
  {
    src: '/images/fiberGastroscopy/FiberGastroscopy17.jpg',
    alt: 'Результати ендоскопічного кліпування',
    width: 800,
    height: 600,
    title: 'Результати ендоскопічного кліпування',
  },
];

export function ClippingGallery() {
  return <GalleryComponent images={galleryImages} />;
}

export default ClippingGallery;
