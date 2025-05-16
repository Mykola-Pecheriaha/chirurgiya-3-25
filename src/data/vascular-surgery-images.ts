import type { BeforeAfterImage } from '@/types/gallery';

// Масив зображень "до і після" для судинної хірургії
export const vascularSurgeryImages: BeforeAfterImage[] = [
  {
    id: 1,
    before: {
      src: '/images/vascular/varicose-before-1.jpg',
      alt: 'Пацієнт 1 до лікування варикозу',
    },
    after: {
      src: '/images/vascular/varicose-after-1.jpg',
      alt: 'Пацієнт 1 після лікування варикозу',
    },
  },
  {
    id: 2,
    before: {
      src: '/images/vascular/varicose-before-2.jpg',
      alt: 'Пацієнт 2 до лікування варикозу',
    },
    after: {
      src: '/images/vascular/varicose-after-2.jpg',
      alt: 'Пацієнт 2 після лікування варикозу',
    },
  },
  {
    id: 3,
    before: {
      src: '/images/vascular/varicose-before-3.jpg',
      alt: 'Пацієнт 3 до лікування варикозу',
    },
    after: {
      src: '/images/vascular/varicose-after-3.jpg',
      alt: 'Пацієнт 3 після лікування варикозу',
    },
  },
];
