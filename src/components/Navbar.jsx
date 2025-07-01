import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">eCampus</Link>
      </h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/add-product" className="hover:underline">Add Product</Link></li>
        <li><Link to="/login" className="hover:underline">Login</Link></li>
        <li><Link to="/register" className="hover:underline">Register</Link></li>
      </ul>
    </nav>
  );
}
