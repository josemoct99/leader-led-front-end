import {ProductItem} from './ProductItem';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    image: '/images/Products/imagenPrueba.jpg',
    name: 'Wooden Angled Chair',
    price: '$749.99',
    colors: ['#F5A623', '#D0021B', '#4A90E2'],
  },
  {
    id: 2,
    image: '/images/Products/imagenPrueba.jpg',
    name: 'Flared Accent Chair',
    price: '$549.99 - $589.99',
    colors: ['#F8E71C', '#8B572A', '#50E3C2'],
  },
  {
    id: 3,
    image: '/images/Products/imagenPrueba.jpg',
    name: 'Vintage Sofa Chair',
    price: '$639.99 - $659.99',
    colors: ['#7ED321', '#BD10E0', '#4A4A4A'],
  },
];

export const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          colors={product.colors}
        />
      ))}
    </div>
  );
};
