import React from 'react';
import {
  BrowserRouter as Router, Routes, NavLink, Route, Navigate,
} from 'react-router-dom';
import CharsPage from './Pages/CharsPage/CharsPage';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import CharPage from './CharPage/CharPage';
import './App.scss';

const App = () => (
  <Router>
    <header>
      <nav className="navigation">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/chars">Chars</NavLink>

      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="chars" element={<CharsPage />} />
      <Route path="/chars/:id" element={<CharPage />} />
      {/* <Route path="/users/:id" element={<UserPage />} /> */}
      {/* <Route path="*" element={<Page404 />} /> */}

    </Routes>
  </Router>

);

export default App;
