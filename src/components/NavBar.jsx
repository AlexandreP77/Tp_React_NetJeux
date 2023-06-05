import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">NetGames</h1>
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/" className="navbar-link">Menu Principal</Link></li>
        <li className="navbar-item"><Link to="/Recherche" className="navbar-link">Rechercher un jeu</Link></li>
        <li className="navbar-item"><Link to="/profil" className="navbar-link">Profil</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
