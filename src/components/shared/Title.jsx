import React from 'react'

export const Title = () => {
  return (
    <section className='title__container'>
      <div className='title__container--logo'>
        <h1>My Port</h1>
        <h4>Your portoflio online, easy, fast.</h4>
      </div>
      <div className='title__container--input'>
        <label htmlFor='input-search'>Search with github</label>
        <input type="search" placeholder='@j.doe' id='input-search'/>
      </div>
    </section>
  )
}
