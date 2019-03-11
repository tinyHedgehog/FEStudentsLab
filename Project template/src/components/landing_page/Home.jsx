import React from 'react';
import SearchBar from './SearchBar';
import BeerCard from './BeerCard';
import './Home.css';

class Home extends React.PureComponent {
  render() {
    let isCatalogDisplayed = this.props.catalog && this.props.catalog.length;

    return (
      <div>
        <SearchBar />
        <div className='search-result'>
          {isCatalogDisplayed && this.props.catalog.map((item) => (
            <BeerCard
              key={item.id}
              item={item}
              isFavorite={this.props.favorite.some((favItem) => favItem.id == item.id )}
              addToFavorite={this.props.addToFavorite}
              removeFromFavorite={this.props.removeFromFavorite}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
