// src/components/GameDetails.js
import React from 'react';

function GameDetails({ game }) {
  return (
    <div className="item-card">
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <p><strong>Studio:</strong> {game.studio}</p>
      <p><strong>ESRB Rating:</strong> {game.esrbRating}</p>
      <p><strong>Price:</strong> ${game.price.toFixed(2)}</p>
      <p><strong>Quantity:</strong> {game.quantity}</p>
    </div>
  );
}

export default GameDetails;
