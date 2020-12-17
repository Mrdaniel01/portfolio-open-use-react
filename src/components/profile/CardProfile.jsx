import React from 'react';
import githubLogo from '../../assets/github-logo.png';
//import gmailLogo from '../../assets/gmail-logo.png';
import twitterLogo from '../../assets/twitter-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';
import {userMock} from '../../mock';
import { useSelector } from 'react-redux';

export const CardProfile = () => {

  const {name, bio, twitter_username, github_profile, email } = useSelector(state => state.user)

  const twitterWithoutAt = twitter_username.replace('@', '')

  return (
    <section className='card-profile__container container'>
      <div className='card-profile__user--img'
        style={{
          backgroundImage: `url(${userMock.photo})`
        }}
      >
      </div>
      <div className='card-profile__user--name'>
        <h2>{name.toUpperCase()}</h2>
        <p>{bio}</p>
      </div>

      <div className='card-profile__user--tech'>
        {
          userMock.tecnologies.map((tech, i) => {
            return <div key={i} className='pill'>{tech}</div>
          })
        }

      </div>

      <div className='card-profile__user--social'>
        <a href={github_profile}>
          <img src={githubLogo} alt="github link"/>
        </a>

        <a href={userMock.linkedin_profile}>
          <img src={linkedinLogo} alt="Linkedin link"/>
        </a>

        <a href={`https://twitter.com/${twitterWithoutAt}`}>
          <img src={twitterLogo} alt="twitter link"/>
        </a>
      </div>

      <a
        className='card-profile__user--email a__custom'
        href={`mailto:${email}`}>
          Send an e-mail
      </a>
    </section>
  )
}
