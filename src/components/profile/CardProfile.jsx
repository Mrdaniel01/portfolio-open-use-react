import React from 'react';
import githubLogo from '../../assets/github-logo.png';
//import gmailLogo from '../../assets/gmail-logo.png';
import twitterLogo from '../../assets/twitter-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';
import {user} from '../../mock';

export const CardProfile = () => {




  return (
    <section className='card-profile__container container'>
      <div className='card-profile__user--img'
        style={{
          backgroundImage: `url(${user.photo})`
        }}
      >
      </div>
      <div className='card-profile__user--name'>
        <p>{user.specialty}</p>
        <h2>{user.name}</h2>
      </div>

      <div className='card-profile__user--tech'>
        {
          user.tecnologies.map((tech, i) => {
            return <div key={i} className='pill'>{tech}</div>
          })
        }

      </div>

      <div className='card-profile__user--social'>
        <a href={user.github_profile}>
          <img src={githubLogo} alt="github link"/>
        </a>

        <a href={user.linkedin_profile}>
          <img src={linkedinLogo} alt="Linkedin link"/>
        </a>

        <a href={user.twitter_profile}>
          <img src={twitterLogo} alt="twitter link"/>
        </a>
      </div>

      <a
        className='card-profile__user--email a__custom'
        href={`mailto:${user.email}`}>
          Send an e-mail
      </a>
    </section>
  )
}
