/* eslint-disable max-len */
import {
  BrowserRouter as Router, Routes, NavLink, Route, Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharsPage from './Pages/CharsPage/CharsPage';
import EpisodesPage from './Pages/EpisodesPage/EpisodesPage';
import CharPage from './Pages/CharPage/CharPage';
import EpisodePage from './Pages/EpisodePage';
import LocationsPage from './Pages/LocationsPage/LocationsPage';
import Page404 from './Pages/404';
import './App.scss';

const App = () => (
  <Router>
    <header>
      <nav className="navigation">
        <div className="navigation-box">
          <NavLink className="link" to="/chars">Characters</NavLink>
          <NavLink className="link" to="/locations">Locations</NavLink>
          <NavLink className="link" to="/episodes">Episodes</NavLink>
        </div>
      </nav>

      <div className="rick-and-morty-page">
        THE RICK AND MORTY PAGE
      </div>
    </header>
    <Routes>
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/chars" element={<CharsPage />} />
      <Route path="/chars/:id" element={<CharPage />} />
      <Route path="/episodes/:id" element={<EpisodePage />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<Page404 />} />
    </Routes>
  </Router>

);

export default App;
