import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Used Laptop',
      price: 300,
      condition: 'Used',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 3,
      name: 'Desk Lamp',
      price: 15,
      condition: 'Used',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 3,
      name: 'Desk Lamp',
      price: 15,
      condition: 'Used',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 2,
      name: 'New Headphones',
      price: 50,
      condition: 'New',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 3,
      name: 'Desk Lamp',
      price: 15,
      condition: 'Used',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 3,
      name: 'Desk Lamp',
      price: 15,
      condition: 'Used',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&h=180'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 80,
      condition: 'New',
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1600185365228-4a59d97f1434?auto=format&fit=crop&w=300&h=180'
    },
    // Add more products as needed
  ];

  // Group products by category
  const groupedProducts = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  return (
    <div className="home-page">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
