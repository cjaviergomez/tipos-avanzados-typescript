import { addProduct } from './products/product.service';

addProduct({
  id: '2ADW-8AJX-0SDX8',
  title: 'Headset',
  stock: 10,
  category: {
    id: '1234',
    name: 'Gamer',
  },
});
