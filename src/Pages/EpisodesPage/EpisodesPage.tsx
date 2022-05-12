/* eslint-disable max-len */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Episodes,
} from '../../Data/CharsData';

const EpisodePage = () => {
  const [visibleEpisodes, setVisibleEpiodes] = useState<Episodes[]>();
  const [inputValue, setInputValue] = useState<string>();
  const [episodeUrl, setEpisodeUrl] = useState<string>('https://rickandmortyapi.com/api/episode');
  const navigate = useNavigate();

  const getEpisodes = async () => {
    try {
      const response = await axios.get(episodeUrl);
      setVisibleEpiodes(response.data.results);
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
  useEffect(() => {
    getEpisodes();
  }, [episodeUrl]);

  const searchedEpisodes = () => {
    setEpisodeUrl(`https://rickandmortyapi.com/api/episode?name=${inputValue}`);
  };

  const showAllEpisodes = () => {
    setEpisodeUrl('https://rickandmortyapi.com/api/episode');
  };

  return (
    <div>
      <div className="search-container">
        <input
          className="button-all"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button className="button-all" onClick={searchedEpisodes}>Search</button>
        <button className="button-all" onClick={showAllEpisodes}>Show All</button>

      </div>
      <div className="all-chars-container">
        {visibleEpisodes && visibleEpisodes.map(({
          id, name, air_date, episode, characters, url, created,
        }) => (
          <div className="char-container">
            <div className="char" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
              <div className="char-info">
                <span>  id:</span>
                <span>
                  {id}
                </span>

              </div>

              <div className="char-info">
                <span>  name:</span>
                <span>
                  {name}
                </span>

              </div>
              <div className="char-info">
                <span> air_date:</span>
                <span>
                  {air_date}
                </span>

              </div>
              <div className="char-info">
                <span>  episode:</span>
                <span>
                  {episode}
                </span>

              </div>

              <button className="char-read-more" onClick={() => navigate(`/episodes/${id}`)}>
                read more
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>

  );
};
export default EpisodePage;
