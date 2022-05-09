import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import charsData, { getChar, Char, Results } from '../Data/CharsData';

const CharPage = () => {
  const [currentChar, setCurrentChar] = useState<Results>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const char = getChar(Number(id));
    if (char) {
      setCurrentChar(char);
    } else {
      navigate('/chars');
    }
  }, []);
  return (
    <div className="char-container">
      <div className="image" style={{ backgroundImage: `url(${currentChar?.image})` }}>      </div>

      <div className="char">
        <span>
          ID:
          {currentChar?.id}

        </span>
        <span>
          NAME:
          {currentChar?.name}

        </span>
        <span>
          Status:
          {currentChar?.status}

        </span>
        <span>
          species:
          {currentChar?.species}

        </span>
        <span>
          type:
          {currentChar?.type || 'unknown'}

        </span>
        <span>
          gender:
          {currentChar?.gender}

        </span>
      </div>

    </div>

  );
};
export default CharPage;
