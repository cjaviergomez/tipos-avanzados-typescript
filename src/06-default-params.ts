const createProduct2 = (
  id: string,
  stock: number = 10,
  isNew: boolean = true
) => {
  return { id, stock, isNew };
};

const p3 = createProduct2('123', 0, false);
console.log(p3);

const p4 = createProduct2('456');
console.log(p4);
