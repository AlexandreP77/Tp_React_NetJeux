import React, { useState } from 'react';
import FicheJeux from '../components/FicheJeux.jsx';
import '../styles/Profil.css';

const Profil = () => {
  const favorites = localStorage.getItem('favorites') || '[]';
  const parsedFavorites = JSON.parse(favorites);
  const [favoriteGames, setFavoriteGames] = useState(parsedFavorites);
  const finishedGames = localStorage.getItem('finishedGames') || '[]';
  const parsedFinishedGames = JSON.parse(finishedGames);
  const badge = parsedFinishedGames.length >= 10 ? 'You have a badge for finishing 10 games!' : '';

  const removeFromFavorites = (gameId) => {
    const updatedFavorites = favoriteGames.filter((game) => game.id !== gameId);
    setFavoriteGames(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="profile-container">
      <h2>Favoris</h2>
      <div className="game-card-list">
        {favoriteGames.map((game) => (
          <FicheJeux key={game.id} game={game} onRemove={removeFromFavorites} />
        ))}
      </div>

      <h2>Jeux Fini</h2>
      <div className="game-card-list">
        {parsedFinishedGames.map((game, index) => (
          <FicheJeux key={index} game={game} />
        ))}
      </div>

      {badge && <h2 className="badge">{badge}</h2>}
    </div>
  );
};

export default Profil;
