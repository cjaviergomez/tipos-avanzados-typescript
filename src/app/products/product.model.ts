import { Category } from '../categories/category.mode';

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: string;
  title: string;
  stock: number;
  category: Category;
}
