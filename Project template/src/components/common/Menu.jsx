import React, { useCallback } from 'react';
import { CURRENT_FAVORITE_PAGE } from '../../constants'
import './Menu.css';
import {
  NavLink
} from 'react-router-dom';

const Menu = (props) => {
  const favoritePage = useCallback(() => {
    props.favoritePage(
      CURRENT_FAVORITE_PAGE,
      props.favorite
    )
  },[props.favorite]);

  return(
    <div className='menu'>
    <div className='menu-header'></div>
    <div className='menu-navigation'>
      <nav>
        <ul>
          <li className='menu-li'>
            <img />
            <NavLink to='/'>
              Home
            </NavLink>
          </li>
          <li className='menu-li' onClick={favoritePage}>
            <img />
            <NavLink to='/favorites_page'>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
  
};

export default Menu;