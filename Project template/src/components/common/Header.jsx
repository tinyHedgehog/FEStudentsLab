import React from 'react';
import MenuButton from './MenuButton';
import SearchBar from './SearchBar';
import { HOME_LOCATION } from '../../constants';
import './Header.css';

const Header = (props) => (
  <header className="Header">
    <MenuButton
      favorite={props.favorite}
      favoritePage={props.favoritePage}
    />
    <h1>Beer catalog</h1>
    {window.location.hash === HOME_LOCATION && 
      <SearchBar 
        searchBeers={props.searchBeers}
        requestData={props.requestData}
        applyFilters={props.applyFilters}
      />
    }
    
  </header>
);

export default Header;
