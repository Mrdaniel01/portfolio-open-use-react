import React from 'react';
import { Link } from 'react-router-dom';
import { startRegister } from '../actions/auth';
import githubLogo from '../assets/github-logo.png';
import gmailLogo from '../assets/gmail-logo.png';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";


export const RegisterScreen = () => {

  const dispatch = useDispatch()

  const  [ formRegisterValues, handleRegisterInputChange] = useForm({
		name: '',
		email: '',
		password: '',
    password2: '',
    github_profile: '',
    twitter_username: '',
    bio: '',
    location: '',
    phone: '',
  });
  
  const { name, email, password, password2, github_profile, twitter_username, bio, location, phone } = formRegisterValues;

  const handleRegister = (e) => {
		e.preventDefault()

		if ( password !== password2 ){
      return Swal.fire("Made By", 'Passwords does not match', "error");
		} 

		dispatch( startRegister( name, email, password, github_profile, twitter_username, bio, location, phone ))
    //console.log( name, email, password, password2, github_profile, twitter_usernam, bio, location, phone );
	}

  return (
    <section className="auth__container">
      <h1>Register</h1>
      <h2>Access Account</h2>
      <div className="auth__img">
        <img src={gmailLogo} alt="google"/>
        <img src={githubLogo} alt="github"/>
      </div>

      <form
        className="auth__form"
        autoComplete="off"
        onSubmit={handleRegister}
      >

        <label htmlFor="input-name-login">Name</label>
        <input
          type="text"
          id="input-name-login"
          name="name"
          value={name}
          onChange={handleRegisterInputChange}
          placeholder="Jhon Doe"
        />

        <label htmlFor="input-email-login">Email</label>
        <input
          type="text"
          id="input-email-login"
          name="email"
          value={email}
          onChange={handleRegisterInputChange}
          placeholder="example@mail.com"
        />

        <label htmlFor="input-pass-login">Password</label>
        <input
          type="password"
          id="input-pass-login"
          name="password"
          value={password}
          onChange={handleRegisterInputChange}
          placeholder="Password"
        />

        <label htmlFor="input-pass2-login">Repeat Password</label>
        <input
          type="password"
          id="input-pass2-login"
          name="password2"
          value={password2}
          onChange={handleRegisterInputChange}
          placeholder="Password"
        />

        <label htmlFor="input-github-login">Github Link</label>
        <input
          type="text"
          id="input-github-login"
          name="github_profile"
          value={github_profile}
          onChange={handleRegisterInputChange}
          placeholder="github.com/xVyrus"
        />

        <label htmlFor="input-twitter-login">Twitter Profile</label>
        <input
          type="text"
          id="input-twitter-login"
          name="twitter_username"
          value={twitter_username}
          onChange={handleRegisterInputChange}
          placeholder="@xVyrus"
        />

        <label htmlFor="input-bio-login">Bio</label>
        <input
          type="text"
          id="input-bio-login"
          name="bio"
          value={bio}
          onChange={handleRegisterInputChange}
          placeholder="Backend developer and pizza lover!"
        />
        

        <label htmlFor="input-location-login">Location</label>
        <input
          type="text"
          id="input-location-login"
          name="location"
          value={location}
          onChange={handleRegisterInputChange}
          placeholder="Guadalajara - MX"
        />
        <label htmlFor="input-location-login">Phone</label>
        <input
          type="text"
          id="input-location-login"
          name="phone"
          value={phone}
          onChange={handleRegisterInputChange}
          placeholder="+57 310 123 4567"
        />

        <button type="submit" className="auth__button" >Continue</button>
        <p className='auth__change-view'>I have an account <Link to="/login">Login</Link></p>
      </form>

    </section>
  )
}
