import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './BeerDescription.css';

const BeerDescription = (props) => {
  const addToFavorite = useCallback(() => {
    props.addToFavorite(props.item)
  },[]); 

  const removeFromFavorite = useCallback(() => {
    props.removeFromFavorite(props.item.id)
  },[]);

  const getExactBeer = useCallback(() => {
    props.getExactBeer(props.item.id)
  },[]);

  return(
    <div className='beer-description'>
    <p className='beer-title'>{props.title}</p>
    <p className='beer-tagline'>{props.tagline}</p>
    <button className='beer-buttons' onClick={getExactBeer}><NavLink to={`/details/${props.item.id}`}>Open</NavLink></button>
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
