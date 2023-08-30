import { faker } from '@faker-js/faker';
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from './product.dto';
import { Product } from './product.model';

export let products: Product[] = [];

export const addProducts = (length: number) => {
  for (let index = 0; index < length; index++) {
    addProduct({
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      stock: faker.number.int({ min: 10, max: 100 }),
      size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
      color: faker.color.rgb(),
      categoryId: faker.string.uuid(),
      tags: [],
    });
  }
};

export const addProduct = (data: CreateProductDTO): Product => {
  const newProduct: Product = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
    },
  };

  products.push(newProduct);
  return newProduct;
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

// TODO: Get type by index
export const updateProduct = (id: Product['id'], updates: UpdateProductDTO): Product => {
  const index = products.findIndex((product) => product.id === id);
  const oldProduct = products[index];
  products[index] = {
    ...oldProduct,
    ...updates,
  };
  return products[index];
};

export const deleteProduct = (id: string) => {
  const productIndex = products.findIndex((product) => product.id === id);
  products.splice(productIndex, 1);
};

export const findProducts = (params: FindProductDTO): Product[] => {
  // params.id = 'test1234'; // This is not working because the property is readonly
  // params.tags = []; // This is not working because the property is readonly
  // params.tags.pop(); // This is not working because the property is ReadonlyArray<string>
  // params.tags.push(); // This is not working because the property is ReadonlyArray<string>
  return products;
};
