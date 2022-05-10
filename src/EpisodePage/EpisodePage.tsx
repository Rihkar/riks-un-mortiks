/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Char, Episodes, Results } from '../Data/CharsData';

const EpisodePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState<Episodes>();
  const { id } = useParams();
  const navigate = useNavigate();
  const getEpisodes = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      setCurrentEpisode(response.data);
      console.log(response);
    } catch (error) {
      navigate('/chars');
    } finally {
      console.log('wazap');
    }
  };
  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div className="char-page">
      <div className="char-container">
        <div className="char" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>

          <div className="char-info">
            <span>id:</span>
            <span>
              {currentEpisode?.id}
            </span>
          </div>

          <div className="char-info">
            <span>name:</span>
            <span>{currentEpisode?.name}</span>

          </div>
          <div className="char-info">
            <span>air_date:</span>
            <span>
              {currentEpisode?.air_date}
            </span>

          </div>
          <div className="char-info">
            <span>espisode:</span>
            <span>{currentEpisode?.episode}</span>

          </div>
        </div>

      </div>
    </div>

  );
};
export default EpisodePage;
