/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Char, Results,
} from '../../Data/CharsData';

const CharsPage = () => {
  const [visibleChars, setVisibleChars] = useState<Results[]>();

  const navigate = useNavigate();

  const getCharactersAlive = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=alive');
      setVisibleChars(response.data.results);
      console.log(response);
    } catch (error) {
      navigate('/chars');
    } finally {
      console.log('wazap');
    }
  };
  useEffect(() => {
    getCharactersAlive();
  }, []);

  const getCharactersDead = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=dead');
      setVisibleChars(response.data.results);
      console.log(response);
    } catch (error) {
      navigate('/chars');
    } finally {
      console.log('wazap');
    }
  };
  useEffect(() => {
    getCharactersDead();
  }, []);

  const getCharactersUnknown = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?status=unknown');
      setVisibleChars(response.data.results);
      console.log(response);
    } catch (error) {
      navigate('/chars');
    } finally {
      console.log('wazap');
    }
  };
  useEffect(() => {
    getCharactersUnknown();
  }, []);

  const getCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setVisibleChars(response.data.results);
      console.log(response);
    } catch (error) {
      navigate('/chars');
    } finally {
      console.log('wazap');
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <div className="button-container">
        <button className="button-all" onClick={getCharacters}>all</button>
        <button className="button-alive" onClick={getCharactersAlive}>alive</button>
        <button className="button-dead" onClick={getCharactersDead}>dead</button>
        <button className="button-unknown" onClick={getCharactersUnknown}>unknown</button>

      </div>

      <div className="all-chars-container">
        {visibleChars && visibleChars.map(({
          id, name, status, species, gender, image,
        }) => (
          <div className="char-container">
            <div className="image" style={{ backgroundImage: `url(${image})` }} />
            <div className="char" style={{ background: status === 'Alive' ? 'rgba(30, 83, 23, 0.7)' : status === 'Dead' ? 'rgba(134, 21, 21, 0.7)' : 'rgba(0, 0, 0, 0.7)' }}>
              <div className="char-info">
                <span>  name:</span>
                <span>
                  {name}
                </span>

              </div>
              <div className="char-info">
                <span> status:</span>
                <span>
                  {status}
                </span>

              </div>
              <div className="char-info">
                <span>  species:</span>
                <span>
                  {species}
                </span>

              </div>
              <div className="char-info">
                <span>  gender:</span>
                <span>{gender}</span>

              </div>
              <button className="char-read-more" onClick={() => navigate(`/chars/${id}`)}>
                read more
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};
export default CharsPage;
