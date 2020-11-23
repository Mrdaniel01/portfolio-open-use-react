import React from 'react';
import githubLogo from '../../assets/github-logo.png';
import gmailLogo from '../../assets/gmail-logo.png';
import twitterLogo from '../../assets/twitter-logo.png';

export const CardProfile = () => {
  return (
    <section className='card-profile__container'>
      <div className='card-profile__user--img'>
        
      </div>
      <div className='card-profile__user--name'>
        <p>FullStack</p>
        <h2>Jhon Doe</h2>
      </div>

      <div className='card-profile__user--tech'>
        <div className='pill'>Node</div>
        <div className='pill'>UX/UI</div>
        <div className='pill'>Angular</div>
      </div>

      <div className='card-profile__user--social'>
        <img src={githubLogo} alt="github link"/>
        <img src={gmailLogo} alt="gmail link"/>
        <img src={twitterLogo} alt="twitter link"/>
      </div>

      <a className='card-profile__user--email' href="mailto:jd.riosdev@gmail.com">Send an e-mail</a>
    </section>
  )
}
