import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <span>HomePage</span>
      <button onClick={() => navigate('/about')}>go to about page</button>
      <button onClick={() => navigate('/chars')}>go to Chars</button>

    </div>
  );
};
export default HomePage;
