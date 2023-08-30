import { Product } from './product.model';

export let products: Product[] = [];

export const addProduct = (product: Product) => {
  products.push(product);
};
