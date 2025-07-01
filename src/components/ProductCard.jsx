import '../styles/ProductCard.css';
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <p className="condition">{product.condition}</p>
      </div>
    </div>
  );
}
