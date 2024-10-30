// src/components/Games.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { CartContext } from '../contexts/CartContext';

const GAMES_QUERY = gql`
  query GetGames($category: String) {
    gamesByCategory(category: $category) {
      gameId
      title
      description
      price
      studio
    }
  }
`;

function Games() {
  const { category } = useParams();
  const { loading, error, data } = useQuery(GAMES_QUERY, {
    variables: { category },
  });
  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching games</p>;

  const games = data.gamesByCategory;

  return (
    <div className="container mx-auto my-10 mt-24">
      <h2 className="text-2xl font-bold mb-5">
        {category ? `${category} Games` : 'All Games'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.gameId} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{game.title}</h3>
            <p className="text-gray-600">{game.description}</p>
            <p className="text-gray-800">Studio: {game.studio}</p>
            <p className="text-gray-800 font-bold">Price: ${game.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart({ ...game, quantity: 1 })}
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

export default Games;
