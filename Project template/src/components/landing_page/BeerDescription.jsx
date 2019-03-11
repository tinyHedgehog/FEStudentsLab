import React, { useCallback } from 'react';
import './BeerDescription.css';
import { NavLink } from 'react-router-dom';

const BeerDescription = (props) => {
  const addToFavorite = useCallback(() => {
    props.addToFavorite(props.itemInfo)
  },[]); 

  const removeFromFavorite = useCallback(() => {
    props.removeFromFavorite(props.itemInfo.id)
  },[]); 

  return(
    <div className='beer-description'>
    <p className='beer-title'>{props.title}</p>
    <p className='beer-tagline'>{props.tagline}</p>
    <button className='beer-buttons'><NavLink to={`/details/${props.itemInfo.id}`}>Open</NavLink></button>
    {!props.isFavorite && 
      <button 
        className='beer-buttons' 
        onClick={addToFavorite}
      >
      Favorite
      </button>
    }
    {props.isFavorite && 
      <button 
        className='beer-buttons'
        onClick={removeFromFavorite}
      >
      Remove Favorite
      </button>
    }
  </div>
  )
}

export default BeerDescription;
