import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeJeux from './Page/ListeJeux.jsx';
import DetailJeux from './Page/DetailJeux.jsx';
import Profil from './Page/Profil.jsx';
import Recherche from './Page/Recherche.jsx';
import NotFound from './Page/NotFound.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>
<NavBar />
<Routes>
  <Route path="/" element={<ListeJeux />} />
  <Route path="/game/:id" element={<DetailJeux />} />
  <Route path="/profil" element={<Profil />} />
  <Route path="/Recherche" element={<Recherche />} />
  <Route path="*" element={<NotFound />} />
</Routes>
<Footer />
</BrowserRouter>

)
