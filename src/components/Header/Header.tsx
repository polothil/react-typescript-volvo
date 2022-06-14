import React from 'react';
import './Header.css';
import { Logo } from 'vcc-ui';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='nav'>
      <Link to='/'>
        <Logo type='spreadmark' height={14} />
      </Link>
    </nav>
  );
};

export default Header;
