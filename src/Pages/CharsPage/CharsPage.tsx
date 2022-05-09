import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  getChars, Char, getChar, Results,
} from '../../Data/CharsData';

const CharsPage = () => {
  const [visibleChars, setVisibleChars] = useState<Results[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const chars = getChars();
    setVisibleChars(chars);
  }, []);

  return (
    <div className="all-chars-container">
      {visibleChars && visibleChars.map(({
        id, name, status, species, type, gender, image,
      }) => (
        <div className="char-container">
          <div className="image" style={{ backgroundImage: `url(${image})` }} />
          <div className="char">
            {' '}
            <span>
              ID:
              {id}
            </span>
            <span>
              name:
              {name}
            </span>
            <span>
              status:
              {status}
            </span>
            <span>
              species:
              {species}
            </span>
            <span>
              type:
              {type || 'unknown'}
            </span>
            <span>
              gender:
              {gender}
            </span>
            <button onClick={() => navigate(`/chars/${id}`)}>
              read more
            </button>

          </div>

        </div>
      ))}

    </div>
  );
};
export default CharsPage;
