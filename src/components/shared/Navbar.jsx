import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="header__container container">

        <Link to="/">
          Home
        </Link>


      <nav className='navbar__container'>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/register">Register</Link> */}
      </nav>

    </header>
  )
}
