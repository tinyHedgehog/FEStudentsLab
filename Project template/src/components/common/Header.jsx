import React from 'react';
import MenuButton from './MenuButton';
import SearchBar from './SearchBar';
import {
  HOME_LOCATION,
  FAVORITE_LOCATION,
  DETAILS_LOCATION
} from '../../constants';
import './Header.css';

const Header = (props) => {
  const isHome = window.location.hash === HOME_LOCATION;
  const isFavoritePage = window.location.hash.split('/')[1] === FAVORITE_LOCATION;
  const isDetails = window.location.hash.split('/')[1] === DETAILS_LOCATION;

  return(
    <header className="Header">
    <MenuButton
      favorite={props.favorite}
      favoritePage={props.favoritePage}
    />
    {isHome &&
      <h1 className='header-tagline home'>Beer catalog</h1>
    }
    {isFavoritePage &&
      <h1 className='header-tagline favorite'>Favorite beers</h1>
    }
    {isDetails &&
      <h1 className='header-tagline details'>{props.exactBeer.name}</h1>
    }
    {window.location.hash === HOME_LOCATION && 
      <SearchBar 
        searchBeers={props.searchBeers}
        requestData={props.requestData}
        applyFilters={props.applyFilters}
      />
    }
  </header>
  );
  
};

export default Header;
