import React from 'react';
import {userMock} from '../../mock';

export const Title = () => {
  return (
    <section className='title__container'>
      <div className='title__container--logo'>
        <h1>Made By</h1>
        <h4>{userMock.name}</h4>
      </div>
      {/* <div className='title__container--input'>
        <label htmlFor='input-search'>Search with github</label>
        <input type="search" placeholder='@j.doe' id='input-search'/>
      </div> */}
    </section>
  )
}
