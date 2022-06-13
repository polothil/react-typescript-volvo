import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='nav'>
      <h1>
        <a href='/'>VOLVO</a>
      </h1>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
