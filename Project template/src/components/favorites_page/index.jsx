import React from 'react';
import FavoriteBeer from './FavoriteBeer';

class FavoritesPage extends React.Component {
  render() {
    return(
      <div className='search-result'>
        <FavoriteBeer />
        <FavoriteBeer />
        <FavoriteBeer />
        <FavoriteBeer />
        <FavoriteBeer />
      </div>
    );
  }
}

export default FavoritesPage;
