// src/components/Accessories.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { CartContext } from '../contexts/CartContext';

const ACCESSORIES_QUERY = gql`
  query GetAccessories($subCategory: String) {
    accessoriesBySubCategory(subCategory: $subCategory) {
      accessoryId
      name
      description
      price
      category
      subCategory
    }
  }
`;

function Accessories() {
  const { subCategory } = useParams();
  const { loading, error, data } = useQuery(ACCESSORIES_QUERY, {
    variables: { subCategory },
  });
  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching accessories</p>;

  const accessories = data.accessoriesBySubCategory;

  return (
    <div className="container mx-auto my-10 mt-24">
      <h2 className="text-2xl font-bold mb-5">
        {subCategory ? `${subCategory} Accessories` : 'All Accessories'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accessories.map((accessory) => (
          <div key={accessory.accessoryId} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{accessory.name}</h3>
            <p className="text-gray-600">{accessory.description}</p>
            <p className="text-gray-800">Category: {accessory.category}</p>
            <p className="text-gray-800">Subcategory: {accessory.subCategory}</p>
            <p className="text-gray-800 font-bold">Price: ${accessory.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart({ ...accessory, quantity: 1 })}
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

export default Accessories;
