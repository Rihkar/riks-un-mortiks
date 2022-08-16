/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SignUpPageProps={
    onSignUp: (newUser:string)=> void
}
const SignUpPage = ({ onSignUp }:SignUpPageProps) => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>();
  const [newEmail, setNewEmail] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [confirmEmail, setConfirmEmail] = useState<string>();
  const [error, setError] = useState(false);
  const [seePasword, setSeePassword] = useState(false);
  const [seeConfirmedPasword, setSeeConfirmedPassword] = useState(false);

  return (
    <div>

      <form
        className="sign-in"
        onSubmit={(e) => {
          e.preventDefault();
          if ((newEmail === confirmEmail) && (newPassword === confirmPassword)) {
            onSignUp(`${newEmail} ${newPassword}`); navigate('/signinpage');
          } else {
            setError(true);
          }
        }}
      >
        {error && (<div className="button-dead">OOPS, try again</div>)}
        <input type="text" placeholder="e-mail" className="button-all" onChange={(e) => setNewEmail(e.target.value)} />
        <input type="text" placeholder="confirm e-mail" className="button-all" onChange={(e) => setConfirmEmail(e.target.value)} />
        <div>
          <input type={seePasword ? 'text' : 'password'} placeholder="password" className="button-all" onChange={(e) => setNewPassword(e.target.value)} />
          <button className={seePasword ? 'button-dead' : 'button-alive'} onClick={(e) => { e.preventDefault(); setSeePassword(!seePasword); }}>{seePasword ? 'hide' : 'see'}</button>
        </div>
        <div>
          <input type={seeConfirmedPasword ? 'text' : 'password'} placeholder="confirm password" className="button-all" onChange={(e) => setConfirmPassword(e.target.value)} />
          <button className={seeConfirmedPasword ? 'button-dead' : 'button-alive'} onClick={(e) => { e.preventDefault(); setSeeConfirmedPassword(!seeConfirmedPasword); }}>{seeConfirmedPasword ? 'hide' : 'see'}</button>
        </div>

        <button className="button-all">Sign Up</button>
      </form>

    </div>
  );
};

export default SignUpPage;
