import { BaseModel } from '../base.mode';
import { Category } from '../categories/category.model';

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  title: string;
  description: string;
  stock: number;
  size?: Size;
  color: string;
  category: Category;
  tags: string[];
}
