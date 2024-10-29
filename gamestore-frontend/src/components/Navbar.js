import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [
    {
      name: 'Games',
      subCategories: ['Action', 'Adventure', 'Sports'],
    },
    {
      name: 'Consoles',
      subCategories: ['PlayStation', 'Xbox', 'Nintendo'],
    },
    {
      name: 'Accessories',
      subCategories: ['T-Shirts', 'Headsets', 'Storage'],
    },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="text-2xl font-bold text-accent">
          GameTopia
        </NavLink>
        <div className="hidden md:flex space-x-4 items-center">
          {categories.map((category) => (
            <div className="relative group" key={category.name}>
              <NavLink
                to={`/${category.name.toLowerCase()}`}
                className="hover:text-primary font-semibold"
              >
                {category.name}
              </NavLink>
              {/* Submenu */}
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                {category.subCategories.map((sub) => (
                  <NavLink
                    key={sub}
                    to={`/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {sub}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-gray-800 hover:text-primary" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-sm">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {/* Hamburger Icon */}
            <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          {categories.map((category) => (
            <NavLink
              to={`/${category.name.toLowerCase()}`}
              className="block px-4 py-2"
              key={category.name}
            >
              {category.name}
            </NavLink>
          ))}
          {/* Cart Icon in Mobile Menu */}
          <NavLink to="/cart" className="block px-4 py-2">
            <div className="flex items-center">
              <FaShoppingCart className="text-xl mr-2" />
              Cart ({totalItems})
            </div>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
