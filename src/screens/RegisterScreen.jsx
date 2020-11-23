import React from 'react';
import githubLogo from '../assets/github-logo.png';
import gmailLogo from '../assets/gmail-logo.png';

export const RegisterScreen = () => {
  return (
    <section className="auth__container">
      <h1>Register</h1>
      <h2>Access Account</h2>
      <div className="auth__img">
        <img src={gmailLogo} alt="google"/>
        <img src={githubLogo} alt="github"/>
      </div>

      <form className="auth__form" action="" autoComplete="off">

        <label htmlFor="input-email-login">Email</label>
        <input
          type="text"
          id="input-email-login"
          name="email"
          placeholder="example@mail.com"
        />

        <label htmlFor="input-email-login">Password</label>
        <input
          type="password"
          id="input-email-login"
          name="password"
          placeholder="Password"
        />

        <label htmlFor="input-email-login">Repeat Password</label>
        <input
          type="password"
          id="input-email-login"
          name="re_password"
          placeholder="Password"
        />

        <button type="button" className="auth__button" >Continue</button>

      </form>

    </section>
  )
}
