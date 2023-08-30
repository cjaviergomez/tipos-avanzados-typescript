import { Product } from './product.model';

// 🔵 Omit is a utility type to copy a model without some attributes
export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// 🔵 Pick is a utility type to create a type with only some attributes of another model
type Example = Pick<Product, 'id' | 'title'>;

const baseProduct: Example = {
  id: '123',
  title: 'Test',
};

// 🔵 Partial is a utility type to create a type from another type with optional attributes
export type UpdateProductDTO = Partial<CreateProductDTO>;

// 🔵 Required is a utility type to create a type from another type with its required attributes
type allRequired = Required<Product>;

// 🔵 Readonly is a utility type to create a type from another type with its readonly attributes
export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // 🔵 ReadonlyArray is a utility type to create a array with readonly property
  readonly tags: ReadonlyArray<string>;
}
