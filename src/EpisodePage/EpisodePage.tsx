/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Char, Episodes, Results } from '../Data/CharsData';

const EpisodePage = () => {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState<string | undefined>(id);
  const [participatingChars, setParticipatingChars] = useState<Results[]>();
  const [currentEpisode, setCurrentEpisode] = useState<Episodes>(); // ja liek episodes[] tad 52linija utt kluda

  const navigate = useNavigate();

  const getEpisodes = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${currentId}`);
      setCurrentEpisode(response.data);
      console.log(response);
    } catch (error) {
      navigate('/episodes');
    } finally {
      console.log('wazap');
    }
  };

  const getParticipatingChars = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/episode/');
      setParticipatingChars(response.data.results[Number(currentId) - 1].characters);
      console.log(response.data.results.characters);
    } catch (error) {
      navigate('/episodes');
    } finally {
      console.log('wazap');
    }
  };

  useEffect(() => {
    getEpisodes();
  }, [currentId]);
  // useEffect(() => {
  //   getParticipatingChars();
  // });

  return (
    <div>
      <div className="char-page">
        <button
          onClick={() => {
            setCurrentId(currentId === '1' ? '51' : `${Number(currentId) - 1}`);
            navigate(currentId === '1' ? '/episodes/51' : `/episodes/${Number(currentId) - 1}`);
          }}
          className="button-all"
        >
          prev
        </button>
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
        <button
          onClick={() => {
            setCurrentId(currentId === '51' ? '1' : `${Number(currentId) + 1}`);
            navigate(currentId === '51' ? '/episodes/1' : `/episodes/${Number(currentId) + 1}`);
          }}
          className="button-all"
        >
          next
        </button>
      </div>
      <div className="all-chars-container">
        {participatingChars && participatingChars.map(({
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
export default EpisodePage;
