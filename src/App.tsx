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
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import './App.scss';

const App = () => {
  const [signIn, setSignIn] = useState(true);
  const [users, setUsers] = useState<string[]>([]);
  return (
    <Router>
      <header>
        <nav className="navigation">
          <div className="navigation-box">
            <div className="navigation-box">
              <NavLink onClick={() => setSignIn(true)} className="link" to="/signinpage">{signIn ? 'Sign in' : 'Log out' }</NavLink>
              <NavLink className="link" to="/signuppage">Sign up</NavLink>
            </div>
          </div>
        </nav>

        <div className="rick-and-morty-page">
          THE RICK AND MORTY PAGE
        </div>
      </header>
      <Routes>
        <Route path="/signuppage" element={<SignUpPage onSignUp={(newUser:string) => setUsers([...users, newUser])} />} />
        <Route path="/signinpage" element={<SignInPage onSignIn={() => setSignIn(false)} emailprop={users} passwordprop={users} />} />
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
};

export default App;
