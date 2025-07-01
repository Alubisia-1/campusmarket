// pages/Home.jsx
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Used Laptop',
      price: 300,
      condition: 'Used',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 3,
      name: 'Desk Lamp',
      price: 15,
      condition: 'Used',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
        {
      id: 4,
      name: 'Used Laptop',
      price: 300,
      condition: 'Used',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 5,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 6,
      name: 'Desk Lamp',
      price: 15,
      condition: 'Used',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 7,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 8,
      name: 'Desk Lamp',
      price: 15,
      condition: 'Used',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
