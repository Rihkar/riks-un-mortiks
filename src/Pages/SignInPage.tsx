/* eslint-disable max-len */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SignInPageProps={
  onSignIn: ()=> void
  emailprop:string[]
  passwordprop:string[]
}

const SignInPage = ({ onSignIn, emailprop, passwordprop }:SignInPageProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const signin = () => {
    if (email === '' && password === '') {
      setError(true);
    } else if (email === 'rihards' && password === 'karlauskis') {
      navigate('/locations'); onSignIn();
    } else if (email === 'roberts' && password === 'lode') {
      navigate('/episodes'); onSignIn();
    } else if (email === 'davis' && password === 'sleja') {
      navigate('/chars'); onSignIn();
    } else if (emailprop.join('').includes(email) && passwordprop.join('').includes(password)) {
      navigate(`/chars/${Math.floor(Math.random() * 800).toString()}`); onSignIn();
    } else {
      setError(true);
    }
  };

  return (

    <div>

      <div className="sign-in">
        {error && (<div className="button-dead">OOPS, try again</div>)}
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="button-all" type="text" placeholder="e-mail" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="button-all" type="password" placeholder="••••••••" />
        <button onClick={() => signin()} className="button-all">Sign In</button>
        <div className="button-alive smal">
          <div>Não é um membro?</div>
          <div onClick={() => navigate('/signuppage')} className="registre-se">Registre-se</div>
        </div>
      </div>

    </div>

  );
};

export default SignInPage;
