import React from 'react';
import './Menu.css';
import {
  NavLink
} from 'react-router-dom';

const Menu = () => (
  <div className='menu'>
    <div className='menu-header'></div>
    <div className='menu-navigation'>
      <nav>
        <ul>
          <li className='menu-li'><img /><NavLink to='/'>Home</NavLink></li>
          <li className='menu-li'><img /><NavLink to='/favorites_page'>Favorites</NavLink></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Menu;