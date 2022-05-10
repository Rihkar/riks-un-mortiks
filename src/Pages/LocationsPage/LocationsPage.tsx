/* eslint-disable max-len */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Episodes,
  Char, Results, Locations,
} from '../../Data/CharsData';

const LocationsPage = () => {
  const [visibleLocations, setVisibleLocations] = useState<Locations[]>();
  const navigate = useNavigate();

  const getEpisodes = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/location');
      setVisibleLocations(response.data.results);
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
    <div className="all-chars-container">
      {visibleLocations && visibleLocations.map(({
        id, name, type, dimension, residennts, url, created,
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
              <span> type:</span>
              <span>
                {type}
              </span>

            </div>
            <div className="char-info">
              <span>  dimension:</span>
              <span>
                {dimension}
              </span>

            </div>

          </div>

        </div>
      ))}

    </div>

  );
};
export default LocationsPage;
