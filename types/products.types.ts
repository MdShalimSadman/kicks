export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  slug: string;
  images: string[];
  category: { name: string; image: string };
}