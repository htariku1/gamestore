// src/components/GameCard.js

import React from 'react';

function GameCard({ game }) {
  const imageMap = {
    'Call of Duty Black Ops 6': '/images/duty-image.png',
    'Grand Theft Auto V': '/images/auto-image.png',
    'The Legend of Zelda: Tears of the Kingdom': '/images/zelda-image.png',
    'Elden Ring': '/images/elden-image.png',
    'NBA 2k25': '/images/2k-image.png',
    'Madden 25': '/images/madden-image.png',
    'Fifa 25': '/images/fifa-image.png',
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={imageMap[game.title] || '/images/default.png'} alt={game.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{game.title}</h3>
      <p className="text-gray-600">{game.description}</p>
      <p className="text-gray-900 font-bold">${game.price}</p>
    </div>
  );
}

export default GameCard;
