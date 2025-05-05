export interface BeforeAfterImage {
  id: string | number;
  before: {
    src: string;
    alt: string;
    thumbnail?: string;
  };
  after: {
    src: string;
    alt: string;
    thumbnail?: string;
  };
}
