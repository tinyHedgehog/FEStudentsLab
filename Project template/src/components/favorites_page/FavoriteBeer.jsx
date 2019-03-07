import React from 'react';
import './FavoriteBeer.css';

const FavoriteBeer = (props) => {
  let removeFromFavorite = () => {
    props.removeFromFavorite(props.item.id)
  }

  return(
    <div className='favorite-beer'>
      <img className='favbeer-image' src={props.item.image_url} />
      <h3>{props.item.name}</h3>
      <p className='favbeer-p'>{props.item.tagline}</p>
      <p className='favbeer-p'>{props.item.description}</p>
      <button className='beer-buttons-fav'>Open</button>
      <button className='beer-buttons-fav' onClick={removeFromFavorite}>Remove Favorite</button>
    </div>
  )
}

export default FavoriteBeer;
