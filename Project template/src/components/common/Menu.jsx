import React from 'react';
import './Menu.css';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  NavLink
} from 'react-router-dom';
=======
>>>>>>> 0a3b859... Adding simple implementation of the landing page.
=======
import {
  NavLink
} from 'react-router-dom';
>>>>>>> be1c9ff... Adding landing page and favorites page.

const Menu = () => (
  <div className='menu'>
    <div className='menu-header'></div>
    <div className='menu-navigation'>
      <nav>
        <ul>
<<<<<<< HEAD
<<<<<<< HEAD
          <li><img /><NavLink to='/'>Home</NavLink></li>
          <li><img /><NavLink to='/favorites_page'>Favorites</NavLink></li>
        </ul>
=======
          <li><img /><a>Home</a></li>
          <li><img /><a>Favorites</a></li>
        </ul> 
>>>>>>> 0a3b859... Adding simple implementation of the landing page.
=======
          <li><img /><NavLink to='/'>Home</NavLink></li>
          <li><img /><NavLink to='/favorites_page'>Favorites</NavLink></li>
        </ul>
>>>>>>> be1c9ff... Adding landing page and favorites page.
      </nav>
    </div>
  </div>
);

export default Menu;