import React from 'react';
import './Menu.css';
<<<<<<< HEAD
import {
  NavLink
} from 'react-router-dom';
=======
>>>>>>> 0a3b859... Adding simple implementation of the landing page.

const Menu = () => (
  <div className='menu'>
    <div className='menu-header'></div>
    <div className='menu-navigation'>
      <nav>
        <ul>
<<<<<<< HEAD
          <li><img /><NavLink to='/'>Home</NavLink></li>
          <li><img /><NavLink to='/favorites_page'>Favorites</NavLink></li>
        </ul>
=======
          <li><img /><a>Home</a></li>
          <li><img /><a>Favorites</a></li>
        </ul> 
>>>>>>> 0a3b859... Adding simple implementation of the landing page.
      </nav>
    </div>
  </div>
);

export default Menu;