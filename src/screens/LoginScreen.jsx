import React from 'react'
import { Link } from 'react-router-dom';
import githubLogo from '../assets/github-logo.png';
import gmailLogo from '../assets/gmail-logo.png';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const  [ formLoginValues, handleLoginInputChange] = useForm({
		email: 'j@gmail.com',
		password: 'Mrdaniel01*',
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
		e.preventDefault()
    dispatch( startLogin(email, password ));
//console.log( name, email, password, password2, github_profile, twitter_usernam, bio, location, phone );
	}


  return (
    <section className="auth__container">
      <h1>Login</h1>
      <h2>Access Account</h2>
      <div className="auth__img">
        <img src={gmailLogo} alt="google"/>
        <img src={githubLogo} alt="github"/>
      </div>

      <form
        className="auth__form"
        autoComplete="off"
        onSubmit={handleLogin} 
      >

        <label htmlFor="input-email-login">Email</label>
        <input
          type="text"
          id="input-email-login"
          name="email"
          value={email}
          onChange={handleLoginInputChange}
          placeholder="example@mail.com"
        />

        <label htmlFor="input-pass-login">Password</label>
        <input
          type="password"
          id="input-pass-login"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleLoginInputChange}
        />

        <button type="submit" className="auth__button" >Continue</button>
        <p className='auth__change-view'>I do not have an account <Link to="/register">Register</Link></p>
      </form>

    </section>
  )
}
