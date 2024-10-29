// src/components/Consoles.js

import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import ConsoleCard from './ConsoleCard';

const GET_CONSOLES_BY_CATEGORY = gql`
  query GetConsolesByCategory($category: String) {
    consolesByCategory(category: $category) {
      consoleId
      model
      manufacturer
      price
    }
  }
`;

function Consoles() {
  const [category, setCategory] = useState(null);

  const { loading, error, data } = useQuery(GET_CONSOLES_BY_CATEGORY, {
    variables: { category },
    skip: !category,
  });

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Consoles</h2>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => handleCategoryClick("PlayStation")} className="btn-category">PlayStation</button>
        <button onClick={() => handleCategoryClick("Xbox")} className="btn-category">Xbox</button>
        <button onClick={() => handleCategoryClick("Nintendo")} className="btn-category">Nintendo</button>
      </div>

      {loading && <p>Loading consoles...</p>}
      {error && <p>Error loading consoles.</p>}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.consolesByCategory.map((console) => (
            <ConsoleCard key={console.consoleId} console={console} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Consoles;
