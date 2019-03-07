import React from 'react';
import FavoriteBeer from './FavoriteBeer';

class FavoritesPage extends React.PureComponent {
  render() {
    return(
      <div className='search-result'>
        {this.props.favorite.map(item => (
          <FavoriteBeer key={item.id} item={item} removeFromFavorite={this.props.removeFromFavorite}/>
        ))}
      </div>
    );
  }
};

export default FavoritesPage;
