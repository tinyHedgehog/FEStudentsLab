import React from 'react';
import SearchBar from './SearchBar';
import BeerCard from './BeerCard';
import './Home.css';

class Home extends React.Component { 
  render() {
    let display;

    if(this.props.catalog == undefined){
      display = false;
    } else {
      display = true;
    }

    return (
      <div>
        <SearchBar />
        <div className='search-result'>
          {display && this.props.catalog.map((item) => (
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
