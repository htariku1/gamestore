// src/components/AccessoryCard.js

import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function AccessoryCard({ accessory }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id: accessory.accessoryId,
      itemType: 'Accessory',
      title: accessory.name,
      price: accessory.price,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Placeholder for accessory image */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Accessory Image</span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{accessory.name}</h3>
        <p className="text-gray-600">{accessory.description}</p>
        <p className="mt-2">
          <strong>Price:</strong> ${accessory.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AccessoryCard;
