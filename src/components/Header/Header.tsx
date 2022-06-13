import React from 'react';
import './Header.css';
import { Logo } from 'vcc-ui';

const Header = () => {
  return (
    <nav className='nav'>
      <h1>
        <a href='/'>
          <Logo type='spreadmark' height={14} />
        </a>
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
