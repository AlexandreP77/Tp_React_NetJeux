import React, { useEffect, useState } from "react";
import axios from 'axios';
import FicheJeux from '../components/FicheJeux.jsx';
import '../styles/Recherche.css';

const Recherche = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const fetchGames = () => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${apiKey}&search=${searchTerm}&ordering=-rating&page=${page}&page_size=20`
        )
        .then((response) => {
          setGames(prevGames => [...prevGames, ...response.data.results]);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setGames([]);
    setPage(1);
    fetchGames();
  };

  useEffect(() => {
    loadMoreGames();
    fetchGames();
  }, []);

  const loadMoreGames = () => {
    setPage(prevPage => prevPage + 1);
    fetchGames();
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher votre jeu"
        />
        <button className="search-button" type="submit">
        recherche
        </button>
      </form>
      <div className="search-results">
      
        <div className="game-cards-container">
          {games.map((game) => (
            <FicheJeux key={game.id} game={game} />
          ))}
        </div>
        {games.length >= 20 && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={loadMoreGames}>
              Charger d'avantage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recherche;
