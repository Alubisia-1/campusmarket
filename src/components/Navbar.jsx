import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(prev => !prev);
  };

  return (
    <>
      <nav className="bg-blue-600 text-white px-6 py-4 relative">
        <div className="mb-1">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
          </ul>
        </div>
        <div className="mb-2">
          <div className="div-1">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Link to="/" className="e-campus-logo">E-Campus</Link>
              <i
                className="fas fa-caret-down dropdown-icon cursor-pointer"
                onClick={togglePopup}
              ></i>
            </h1>
          </div>

          <div className="div-2">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className="div-3">
            div3
          </div>
        </div>
      </nav>

      {showPopup && (
        <div className="popup-square">
          <div className="popup-grid">
            <div className="category">
              <h3 className="category-title">Electronics</h3>
              <ul>
                <li>Phones</li>
                <li>Laptops</li>
                <li>Tablets</li>
                <li>Televisions</li>
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">Books</h3>
              <ul>
                <li>Fiction</li>
                <li>Non-Fiction</li>
                <li>Academic</li>
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">Beddings</h3>
              <ul>
                <li>Beds</li>
                <li>Curtains</li>
                <li>Carpets</li>
                <li></li>
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">Furnitures</h3>
              <ul>
                <li>Sofasets</li>
                <li>Office Tables and Chairs</li>
                <li>Tables and Chairs</li>
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">KitchenWare</h3>
              <ul>
                <li>Gas Cylinders</li>
                <li>Cookers</li>
                <li>Utensils</li>
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">Others</h3>
              <ul>
                <li>Services</li>
                <li>Food</li>
                <li>Health and Beauty</li>
                <li>Jewerly and adornments</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
