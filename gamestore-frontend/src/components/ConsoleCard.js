// src/components/Consoles.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { CartContext } from '../contexts/CartContext';

const CONSOLES_QUERY = gql`
  query GetConsoles($category: String) {
    consolesByCategory(category: $category) {
      consoleId
      model
      manufacturer
      price
    }
  }
`;

function Consoles() {
  const { category } = useParams();
  const { loading, error, data } = useQuery(CONSOLES_QUERY, {
    variables: { category },
  });
  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching consoles</p>;

  const consoles = data.consolesByCategory;

  return (
    <div className="container mx-auto my-10 mt-24">
      <h2 className="text-2xl font-bold mb-5">
        {category ? `${category} Consoles` : 'All Consoles'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {consoles.map((console) => (
          <div key={console.consoleId} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{console.model}</h3>
            <p className="text-gray-800">Manufacturer: {console.manufacturer}</p>
            <p className="text-gray-800 font-bold">Price: ${console.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart({ ...console, quantity: 1 })}
              className="mt-2 bg-primary text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consoles;
