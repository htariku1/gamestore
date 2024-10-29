import React from 'react';

function TshirtDetails({ tshirt }) {
  return (
    <div className="item-card">
      <p><strong>Description:</strong> {tshirt.description}</p>
      <p><strong>Color:</strong> {tshirt.color}</p>
      <p><strong>Size:</strong> {tshirt.size}</p>
      <p><strong>Price:</strong> ${tshirt.price}</p>
      <p><strong>Quantity:</strong> {tshirt.quantity}</p>
    </div>
  );
}

export default TshirtDetails;
