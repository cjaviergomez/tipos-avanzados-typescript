const createProduct = (id: string, stock?: number, isNew?: boolean) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct('123', 0, false);
console.log(p1);

const p2 = createProduct('456');
console.log(p2);
