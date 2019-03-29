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
    <NavLink to={`/details/${props.item.id}`} 
      className='beer-buttons-open'
      onClick={getExactBeer}>
        Open
    </NavLink>
    {!props.isFavorite && 
      <button 
        className='beer-buttons-favorite' 
        onClick={addToFavorite}
      >
      Favorite
      </button>
    }
    {props.isFavorite && 
      <button 
        className='beer-buttons-favorite'
        onClick={removeFromFavorite}
      >
      Remove Favorite
      </button>
    }
  </div>
  )
}

export default BeerDescription;
