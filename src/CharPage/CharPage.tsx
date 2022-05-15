/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Char, Results } from '../Data/CharsData';

const CharPage = () => {
  const { id } = useParams();
  const [currentChar, setCurrentChar] = useState<Results>();
  const [nextChar, setNextChar] = useState<string>();

  const navigate = useNavigate();

  const getCharacters = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCurrentChar(response.data);
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
  useEffect(() => {
    getCharacters();
  }, [nextChar]);

  return (
    <div className="char-page">
      <button
        onClick={() => {
          navigate(id === '1' ? '/chars/826' : `/chars/${(Number(id) - 1)}`);
          setNextChar(id === '1' ? '/chars/826' : `/chars/${(Number(id) - 1)}`);
        }}
        className="button-all"
        // disabled={id === '1'}
      >
        prev
      </button>
      <div className="char-container">
        <div className="image" style={{ backgroundImage: `url(${currentChar?.image})` }}> </div>

        <div className="char" style={{ background: currentChar?.status === 'Alive' ? 'rgba(30, 83, 23, 0.7)' : currentChar?.status === 'Dead' ? 'rgba(134, 21, 21, 0.7)' : 'rgba(0, 0, 0, 0.7)' }}>
          <div className="char-info">
            <span>name:</span>
            <span>{currentChar?.name}</span>

          </div>
          <div className="char-info">
            <span>status:</span>
            <span>
              {currentChar?.status}
            </span>

          </div>
          <div className="char-info">
            <span>species:</span>
            <span>
              {currentChar?.species}
            </span>

          </div>
          <div className="char-info">
            <span>gender:</span>
            <span>{currentChar?.gender}</span>

          </div>
        </div>

      </div>
      <button
        onClick={() => {
          navigate(id === '826' ? '/chars/1' : `/chars/${(Number(id) + 1)}`);
          setNextChar(id === '826' ? '/chars/1' : `/chars/${(Number(id) + 1)}`);
        }}
        className="button-all"
        // disabled={id === '826'}
      >
        next

      </button>
    </div>

  );
};
export default CharPage;
