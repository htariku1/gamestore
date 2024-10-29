// src/components/Accessories.js

import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import AccessoryCard from './AccessoryCard';

const GET_ACCESSORIES_BY_SUBCATEGORY = gql`
  query GetAccessoriesBySubCategory($subCategory: String) {
    accessoriesBySubCategory(subCategory: $subCategory) {
      accessoryId
      name
      description
      price
    }
  }
`;

function Accessories() {
  const [subCategory, setSubCategory] = useState(null);

  const { loading, error, data } = useQuery(GET_ACCESSORIES_BY_SUBCATEGORY, {
    variables: { subCategory },
    skip: !subCategory,
  });

  const handleSubCategoryClick = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Accessories</h2>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => handleSubCategoryClick("T-Shirts")} className="btn-category">T-Shirts</button>
        <button onClick={() => handleSubCategoryClick("Headsets")} className="btn-category">Headsets</button>
        <button onClick={() => handleSubCategoryClick("Storage")} className="btn-category">Storage</button>
      </div>

      {loading && <p>Loading accessories...</p>}
      {error && <p>Error loading accessories.</p>}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.accessoriesBySubCategory.map((accessory) => (
            <AccessoryCard key={accessory.accessoryId} accessory={accessory} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Accessories;
