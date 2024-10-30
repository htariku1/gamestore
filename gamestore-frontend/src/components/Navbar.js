// src/components/Navbar.js

import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { authData } = useContext(AuthContext);
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [
    {
      name: 'Games',
      path: '/games',
      subCategories: ['Action', 'Adventure', 'Sports'],
    },
    {
      name: 'Consoles',
      path: '/consoles',
      subCategories: ['PlayStation', 'Xbox', 'Nintendo'],
    },
    {
      name: 'Accessories',
      path: '/accessories',
      subCategories: ['T-Shirts', 'Headsets', 'Storage'],
    },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow fixed w-full z-10">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/images/gametopia.png" // Adjust the path if necessary
            alt="GameTopia"
            className="h-16 w-auto"
          />
        </NavLink>
        {/* Categories */}
        <div className="hidden md:flex space-x-8 items-center">
          {categories.map((category) => (
            <div className="relative group" key={category.name}>
              <NavLink
                to={category.path}
                className="hover:text-primary font-semibold"
              >
                {category.name}
              </NavLink>
              {/* Submenu */}
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                {category.subCategories.map((sub) => (
                  <NavLink
                    key={sub}
                    to={`${category.path}/${sub.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {sub}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-gray-800 hover:text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-sm">
                {totalItems}
              </span>
            )}
          </NavLink>
          {/* Authentication */}
          {authData && authData.token ? (
            <span className="text-gray-800 mx-2">Hello, {authData.username}</span>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="text-gray-800 hover:text-primary"
            >
              <FaUser className="text-2xl" />
            </button>
          )}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {categories.map((category) => (
            <div key={category.name}>
              <NavLink
                to={category.path}
                className="block px-4 py-2 font-semibold hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {category.name}
              </NavLink>
              {/* Subcategories */}
              {category.subCategories.map((sub) => (
                <NavLink
                  key={sub}
                  to={`${category.path}/${sub.toLowerCase()}`}
                  className="block pl-8 pr-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {sub}
                </NavLink>
              ))}
            </div>
          ))}
          {/* Cart Icon in Mobile Menu */}
          <NavLink
            to="/cart"
            className="block px-4 py-2 flex items-center hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            <FaShoppingCart className="text-xl mr-2" />
            Cart ({totalItems})
          </NavLink>
          {/* Authentication in Mobile Menu */}
          {authData && authData.token ? (
            <span className="block px-4 py-2">Hello, {authData.username}</span>
          ) : (
            <button
              onClick={() => {
                navigate('/login');
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              <FaUser className="inline-block mr-2" />
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
