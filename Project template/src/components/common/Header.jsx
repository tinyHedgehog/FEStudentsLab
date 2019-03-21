import React from 'react';
import MenuButton from './MenuButton';
import './Header.css';

const Header = (props) => (
  <header className="Header">
    <MenuButton
      favorite={props.favorite}
      favoritePage={props.favoritePage}
    />
    <h1>Beer catalog</h1>
  </header>
);

export default Header;
