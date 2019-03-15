import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import defaultImg from '../common/default_image.png';
import './FavoriteBeer.css';

const FavoriteBeer = (props) => {
  const getExactBeer = useCallback(() => {
    props.getExactBeer(props.item.id)
  },[]);

  const removeFromFavorite = useCallback(() => {
    props.removeFromFavorite(props.item.id)
  },[]);

  return(
    <div className='favorite-beer'>
      {props.item.image_url == undefined ?
      <img className='favbeer-image' src={defaultImg} /> :
      <img className='favbeer-image' src={props.item.image_url} />
      }
      <h3>{props.item.name}</h3>
      <p className='favbeer-p'>{props.item.tagline}</p>
      <p className='favbeer-p'>{props.item.description}</p>
      <button className='beer-buttons-fav' onClick={getExactBeer}><NavLink to={`/details/${props.item.id}`}>Open</NavLink></button>
      <button className='beer-buttons-fav' onClick={removeFromFavorite}>Remove Favorite</button>
    </div>
  )
}

export default FavoriteBeer;
