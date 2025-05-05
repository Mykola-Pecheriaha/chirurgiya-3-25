import type { BeforeAfterImage } from '@/types/gallery';

// Дані для галереї "До і Після"
export const galleryData: BeforeAfterImage[] = [
  {
    id: 1,
    before: {
      src: '/images/carpal/carpal-anatomy-1.jpg',
      alt: 'Анатомія карпального каналу - нормальний стан',
    },
    after: {
      src: '/images/carpal/carpal-syndrome-1.jpg',
      alt: 'Карпальний синдром - стиснення нерва',
    },
  },
  {
    id: 2,
    before: {
      src: '/images/carpal/carpal-anatomy-2.jpg',
      alt: "Здорова анатомія зап'ястя",
    },
    after: {
      src: '/images/carpal/carpal-syndrome-2.jpg',
      alt: 'Патологічні зміни при карпальному синдромі',
    },
  },
  {
    id: 3,
    before: {
      src: '/images/carpal/carpal-test-1.png',
      alt: 'Діагностичний тест на карпальний синдром',
    },
    after: {
      src: '/images/carpal/carpal-treatment-1.png',
      alt: 'Методи лікування карпального синдрому',
    },
  },
];

// Експортуємо тип для використання в інших файлах
export type { BeforeAfterImage };
