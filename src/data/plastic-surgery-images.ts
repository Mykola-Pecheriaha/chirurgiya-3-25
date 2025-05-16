import type { BeforeAfterImage } from '@/types/gallery';

// Масив зображень "до і після" для пластичної хірургії
export const plasticSurgeryImages: BeforeAfterImage[] = [
  {
    id: 1,
    before: {
      src: '/images/plastic-surgery/face-lift-before.jpg',
      alt: 'Пацієнт 1 до підтяжки обличчя',
    },
    after: {
      src: '/images/plastic-surgery/face-lift-after.jpg',
      alt: 'Пацієнт 1 після підтяжки обличчя',
    },
  },
  {
    id: 2,
    before: {
      src: '/images/plastic-surgery/rhinoplasty-before.jpg',
      alt: 'Пацієнт 2 до ринопластики',
    },
    after: {
      src: '/images/plastic-surgery/rhinoplasty-after.jpg',
      alt: 'Пацієнт 2 після ринопластики',
    },
  },
  {
    id: 3,
    before: {
      src: '/images/plastic-surgery/blepharoplasty-before.jpg',
      alt: 'Пацієнт 3 до блефаропластики',
    },
    after: {
      src: '/images/plastic-surgery/blepharoplasty-after.jpg',
      alt: 'Пацієнт 3 після блефаропластики',
    },
  },
];
