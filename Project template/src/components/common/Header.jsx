import React from 'react';
import MenuButton from './MenuButton';
import './Header.css';

const Header = () => (
  <header className="Header">
    <MenuButton />
    <h1>Beer catalog</h1>
  </header>
);

export default Header;
