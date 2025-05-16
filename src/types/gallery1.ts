export interface SingleImage {
  src: string;
  alt: string;
  thumbnail?: string;
}

export interface BeforeAfterImage {
  id: number | string;
  before: SingleImage;
  after: SingleImage;
}
