// src/components/Games.js

import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import GameCard from './GameCard';

const GET_GAMES_BY_CATEGORY = gql`
  query GetGamesByCategory($category: String) {
    gamesByCategory(category: $category) {
      gameId
      title
      description
      price
    }
  }
`;

function Games() {
  const [category, setCategory] = useState(null);

  const { loading, error, data } = useQuery(GET_GAMES_BY_CATEGORY, {
    variables: { category },
    skip: !category, // Skip query until a category is selected
  });

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Games</h2>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => handleCategoryClick("Action")} className="btn-category">Action</button>
        <button onClick={() => handleCategoryClick("Adventure")} className="btn-category">Adventure</button>
        <button onClick={() => handleCategoryClick("Sports")} className="btn-category">Sports</button>
      </div>

      {loading && <p>Loading games...</p>}
      {error && <p>Error loading games.</p>}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.gamesByCategory.map((game) => (
            <GameCard key={game.gameId} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Games;
