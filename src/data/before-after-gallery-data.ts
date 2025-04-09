export interface BeforeAfterImage {
  id: number;
  before: {
    src: string;
    alt: string;
    thumbnail: string;
  };
  after: {
    src: string;
    alt: string;
    thumbnail: string;
  };
}

export const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: 1,
    before: {
      src: '/images/before-after-gallery-data/implant1.jpg',
      alt: 'До операції - пацієнт 1',
      thumbnail: '/images/before-after-gallery-data/implant1.jpg',
    },
    after: {
      src: '/images/before-after-gallery-data/implant2.jpg',
      alt: 'Після операції - пацієнт 1',
      thumbnail: '/images/before-after-gallery-data/implant2.jpg',
    },
  },
  {
    id: 2,
    before: {
      src: '/images/before-after-gallery-data/implant6.jpg',
      alt: 'До операції - пацієнт 2',
      thumbnail: '/images/before-after-gallery-data/implant6.jpg',
    },
    after: {
      src: '/images/before-after-gallery-data/implant7.jpg',
      alt: 'Після операції - пацієнт 2',
      thumbnail: '/images/before-after-gallery-data/implant7.jpg',
    },
  },
  {
    id: 3,
    before: {
      src: '/images/before-after-gallery-data/implant8.jpg',
      alt: 'До операції - пацієнт 3',
      thumbnail: '/images/before-after-gallery-data/implant8.jpg',
    },
    after: {
      src: '/images/before-after-gallery-data/implant9.jpg',
      alt: 'Після операції - пацієнт 3',
      thumbnail: '/images/before-after-gallery-data/implant9.jpg',
    },
  },
  {
    id: 4,
    before: {
      src: '/images/before-after-gallery-data/implant10.jpg',
      alt: 'До операції - пацієнт 4',
      thumbnail: '/images/before-after-gallery-data/implant10.jpg',
    },
    after: {
      src: '/images/before-after-gallery-data/implant11.jpg',
      alt: 'Після операції - пацієнт 4',
      thumbnail: '/images/before-after-gallery-data/implant11.jpg',
    },
  },
  {
    id: 5,
    before: {
      src: '/images/before-after-gallery-data/implant12.jpg',
      alt: 'До операції - пацієнт 5',
      thumbnail: '/images/before-after-gallery-data/implant12.jpg',
    },
    after: {
      src: '/images/before-after-gallery-data/implant13.jpg',
      alt: 'Після операції - пацієнт 5',
      thumbnail: '/images/before-after-gallery-data/implant13.jpg',
    },
  },
];
