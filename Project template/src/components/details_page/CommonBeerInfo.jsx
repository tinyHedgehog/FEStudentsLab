import React, { useCallback } from 'react';
import './CommonBeerInfo.css';

const CommonBeerInfo = (props) => {
  const addToFavorite = useCallback(() => {
    props.addToFavorite(props.itemInfo)
  },[]); 

  const removeFromFavorite = useCallback(() => {
    props.removeFromFavorite(props.itemInfo.id)
  },[]); 

  return(
    <div className='common-beer-info'>
      <img className='beer-details-img' src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.tagline}</p>
      {!props.isFavorite &&
        <button
          className='beer-buttons-description'
          onClick={addToFavorite}
        >
        Add to favorites
        </button>
      }
      {props.isFavorite &&
        <button
          className='beer-buttons-description'
          onClick={removeFromFavorite}
        >Remove from favorites</button>
      }
      <p>{props.description}</p>
    </div>
  )
}

export default CommonBeerInfo;
