/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Char, Results,
} from '../../Data/CharsData';

const CharsPage = () => {
  const [visibleChars, setVisibleChars] = useState<Results[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [nextPage, setNextPage] = useState<string>();
  const [hasMore, setHasMore] = useState<boolean>(true);

  const navigate = useNavigate();

  const getCharacters = async () => {
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?${searchParams}`);
      const { results, info } = data;

      setVisibleChars(results);

      if (info.next === null) {
        setHasMore(false);
      } else {
        setNextPage(info.next);
        setHasMore(true);
      }
    } catch (error) {
      navigate('/chars');
    }
  };

  const getMoreCharacters = async () => {
    try {
      if (nextPage) {
        const response = await axios.get(nextPage);
        setNextPage(response.data.info.next);
        const data = response.data.results;
        return data;
      }
      setHasMore(false);
    } catch (error) {
      navigate('/chars');
    }
    return [];
  };

  const fetchData = async () => {
    const moreCharacters = await getMoreCharacters();
    console.log(moreCharacters);
    if (visibleChars) {
      setVisibleChars([...visibleChars, ...moreCharacters]);
    }
  };
  useEffect(() => {
    getCharacters();
  }, [searchParams]);

  return (
    <div>
      <div className="button-container">
        <button className="button-all" onClick={() => setSearchParams({})}>all</button>
        <button className="button-alive" onClick={() => setSearchParams({ status: 'alive' })}>alive</button>
        <button className="button-dead" onClick={() => setSearchParams({ status: 'dead' })}>dead</button>
        <button className="button-unknown" onClick={() => setSearchParams({ status: 'unknown' })}>unknown</button>

      </div>

      <div>
        {visibleChars && (
        <InfiniteScroll
          dataLength={visibleChars.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className="all-chars-container"
        >

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
        </InfiniteScroll>
        )}

      </div>
    </div>
  );
};
export default CharsPage;
