import React from 'react';
import { useQuery, gql } from '@apollo/client';
import GameCard from './GameCard';

const GET_GAMES = gql`
  query GetGames {
    games {
      gameId
      title
      description
      price
      studio
      esrbRating
      quantity
    }
  }
`;

function Games() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error loading games.</p>;

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.games.map((game) => (
          <GameCard key={game.gameId} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Games;
