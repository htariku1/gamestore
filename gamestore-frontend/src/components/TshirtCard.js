import React from 'react';

function TshirtCard({ tshirt }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Placeholder for t-shirt image */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">T-Shirt Image</span>
      </div>
      <div className="p-4">
        <p>
          <strong>Description:</strong> {tshirt.description}
        </p>
        <p>
          <strong>Color:</strong> {tshirt.color}
        </p>
        <p>
          <strong>Size:</strong> {tshirt.size}
        </p>
        <p>
          <strong>Price:</strong> ${tshirt.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default TshirtCard;
