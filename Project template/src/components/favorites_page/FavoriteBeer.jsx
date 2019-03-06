import React from 'react';
import './FavoriteBeer.css';

class FavoriteBeer extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className='favorite-beer'>
        <img className='favbeer-image' src={item.image_url} />
        <h3>{item.name}</h3>
        <p className='favbeer-p'>{item.tagline}</p>
        <p className='favbeer-p'>{item.description}</p>
        <button>OPEN</button>
        <button onClick={e => this.props.removeFromFavorite(item.id)}>REMOVE FAVORITE</button>
      </div>
    );
  }
}

export default FavoriteBeer;
