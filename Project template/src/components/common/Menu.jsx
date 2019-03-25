import React, { useCallback } from 'react';
import { CURRENT_FAVORITE_PAGE } from '../../constants'
import {
  NavLink
} from 'react-router-dom';
import homeImage from './home_image.png';
import favoriteImage from './favorite_image.png';
import './Menu.css';

const Menu = (props) => {
  const favoritePage = useCallback(() => {
    props.favoritePage(
      CURRENT_FAVORITE_PAGE,
      props.favorite
    )
  },[props.favorite]);

  return(
    <div className={'menu' + props.className}>
      <div className='menu-header'>
        <span className='menu-header-text'>Beer catalog</span>
      </div>
      <div className='menu-navigation'>
        <nav>
          <ul>
            <NavLink className='menu-home-link' to='/'> 
              <li className='menu-home'>
                <img className='menu-home-image' src={homeImage} />
                <span className='menu-home-text'>Home</span>
              </li>
            </NavLink>
            <NavLink className='menu-favorite-link' to='/favorites_page'>
              <li className='menu-favorite' onClick={favoritePage}>
                <img className='menu-favorite-image' src={favoriteImage} />
                <span className='menu-favorite-text'>Favorites</span>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  )

};

export default Menu;
