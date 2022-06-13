import React from 'react';
import './Header.css';
import { Logo } from 'vcc-ui';

const Header = () => {
  return (
    <nav className='nav'>
      <a href='/'>
        <Logo type='spreadmark' height={14} />
      </a>
    </nav>
  );
};

export default Header;
