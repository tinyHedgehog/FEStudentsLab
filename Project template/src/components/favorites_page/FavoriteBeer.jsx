import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import defaultImg from '../common/default_image.png';
import './FavoriteBeer.css';

const FavoriteBeer = (props) => {
  const getExactBeer = useCallback(() => {
    props.getExactBeer(props.item.id)
  },[]);

  const removeFromFavorite = useCallback((e) => {
    props.removeFromFavorite(props.item.id);
    updatePage();
    remainingBeersController(e);
  },[props.item.id, props.favorite]);

  const updatePage = useCallback(() => {
    props.changePage(
      props.currentPage,
      props.favorite.filter(item => item.id !== props.item.id)
    )
  },[props.currentPage, props.favorite]);

  const remainingBeersController = useCallback((e) => {
    e.target.parentNode.parentNode.children.length == 2 ?
    props.changePage(props.currentPage - 1, props.favorite) : '';
  },[props.currentPage, props.favorite]);

  return(
    <div className='favorite-beer'>
      {props.item.image_url == undefined ?
      <img className='favbeer-image' src={defaultImg} /> :
      <img className='favbeer-image' src={props.item.image_url} />
      }
      <h3>{props.item.name}</h3>
      <p className='favbeer-tagline'>{props.item.tagline}</p>
      <p className='favbeer-description'>{props.item.description}</p>
      <button className='favbeer-button' onClick={getExactBeer}>
        <NavLink to={`/details/${props.item.id}`}>Open</NavLink>
      </button>
      <button className='favbeer-button' onClick={removeFromFavorite}>
        Remove Favorite
      </button>
    </div>
  )
}

export default FavoriteBeer;
