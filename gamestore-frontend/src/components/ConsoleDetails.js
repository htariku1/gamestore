// src/components/ConsoleDetails.js
import React from 'react';

function ConsoleDetails({ console }) {
  return (
    <div className="item-card">
      <h3>{console.model}</h3>
      <p><strong>Manufacturer:</strong> {console.manufacturer}</p>
      <p><strong>Memory:</strong> {console.memoryAmount}</p>
      <p><strong>Processor:</strong> {console.processor}</p>
      <p><strong>Price:</strong> ${console.price.toFixed(2)}</p>
      <p><strong>Quantity:</strong> {console.quantity}</p>
    </div>
  );
}

export default ConsoleDetails;
