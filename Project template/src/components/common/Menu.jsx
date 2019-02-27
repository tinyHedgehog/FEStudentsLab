import React from 'react';
import './Menu.css';

const Menu = () => (
  <div className='menu'>
    <div className='menu-header'></div>
    <div className='menu-navigation'>
      <nav>
        <ul>
          <li><img /><a>Home</a></li>
          <li><img /><a>Favorites</a></li>
        </ul> 
      </nav>
    </div>
  </div>
);

export default Menu;