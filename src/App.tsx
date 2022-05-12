import React from 'react';
import {
  BrowserRouter as Router, Routes, NavLink, Route, Navigate,
} from 'react-router-dom';
import CharsPage from './Pages/CharsPage/CharsPage';
import EpisodesPage from './Pages/EpisodesPage/EpisodesPage';
import CharPage from './CharPage/CharPage';
import EpisodePage from './EpisodePage/EpisodePage';
import LocationsPage from './Pages/LocationsPage/LocationsPage';
import './App.scss';

const App = () => (
  <Router>
    <header>
      <nav className="navigation">
        <div className="navigation-box">
          <NavLink className="link" to="/chars">Characters</NavLink>
          <NavLink className="link" to="/episodes">Episodes</NavLink>
          <NavLink className="link" to="/locations">Locations</NavLink>
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

      {/* <Route path="/users/:id" element={<UserPage />} /> */}
      {/* <Route path="*" element={<Page404 />} /> */}

    </Routes>
  </Router>

);

export default App;
