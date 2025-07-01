import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="mb-1">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
        </ul>
      </div>
      <div className="mb-2">
        <div className="div-1">
            <h1 className="text-xl font-bold">
            <Link to="/">eCampus</Link>
            </h1>
          </div>
        <div className="div-2">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="div-3">
          div3
        </div>
      </div>
    </nav>
  );
}
