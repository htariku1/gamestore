// src/contexts/CartContext.js

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    // Get cart items from localStorage if available
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Update localStorage whenever cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id && i.itemType === item.itemType);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id && i.itemType === item.itemType
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId, itemType) => {
    setCartItems(cartItems.filter((item) => !(item.id === itemId && item.itemType === itemType)));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
