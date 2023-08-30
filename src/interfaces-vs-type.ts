import { faker } from '@faker-js/faker';
import { Category } from './app/categories/category.model';

interface Product {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
}

// ---------------TYPES------------------------------
// Copy model without some attributes
type CreateProductType = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

// extends with "&"

// type CreateProductDTOType = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> & {
//   categoryId: string;
// };

type CreateProductDTOType = CreateProductType & {
  categoryId: string;
};

const newProductType: CreateProductDTOType = {
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  categoryId: faker.string.uuid(),
};

console.log({ newProductType });

// ---------------INTERFACES------------------------------

// extends with extends
// ❌ In interfaces we can not extends and omit some attributes at same time
export interface CreateProductDTOInterface extends Product {
  categoryId: string;
}

// ---------------TYPES-INTERFACES------------------
// We can mix both topics:

// 1. Create a interface and extends from a type
export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// 2. Create a type and extends from a interface
export type CreateProductDTO2 = CreateProductDTO & {
  categoryId2: string;
};

const newProduct: CreateProductDTO = {
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  categoryId: faker.string.uuid(),
};

console.log({ newProduct });

// ------------Differences--------
// Types:
// ❗ You can define alias for primitives types and tuplas
type MiNumber = number;
type StringOrArray = string | any[];
type Tupla = [string, number];

const age: MiNumber = 37;

// Interfaces
// ❗ You can use declaration merging
interface Person {
  name: string;
}
interface Dog {
  name: string;
}

interface Dog {
  breed: string;
}

interface Dog {
  owner: Person;
}

class MyDog implements Dog {
  name = 'Rocky';
  breed = 'unknown';
  owner = {
    name: 'Me',
  };
}

const myDog = new MyDog();
console.log(myDog); // {name: "Rocky", breed: "unknown", owner: { name: "Me"}}
