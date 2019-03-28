import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import defaultImg from '../common/default_image.png';
import { CURRENT_FAVORITE_PAGE } from '../../constants';
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
    props.favoritePage(
      props.currentPage,
      props.favorite.filter(item => item.id !== props.item.id)
    )
  },[props.currentPage, props.favorite]);

  const remainingBeersController = useCallback((e) => {
    const noBeersOnPage = e.target.parentNode.parentNode.children.length == 2;
    const twoPagesRemaining = props.currentPage === CURRENT_FAVORITE_PAGE + 1;

    if(noBeersOnPage && twoPagesRemaining) {
      const listToDelete = document.getElementById(props.currentPage).parentNode;

      props.favoritePage(props.currentPage - 1, props.favorite);
      while(listToDelete.firstChild) {
        listToDelete.removeChild(listToDelete.firstChild);
      }
    } else if(noBeersOnPage) {
      props.favoritePage(props.currentPage - 1, props.favorite);
      document.getElementById(props.currentPage).remove();
    }
  },[props.currentPage, props.favorite]);

  return(
    <div className='favorite-beer'>
      {props.item.image_url == undefined ?
      <img className='favbeer-image' src={defaultImg} /> :
      <img className='favbeer-image' src={props.item.image_url} />
      }
      <h3 className='favbeer-name'>{props.item.name}</h3>
      <p className='favbeer-tagline'>{props.item.tagline}</p>
      <p className='favbeer-description'>{props.item.description}</p>
      <NavLink to={`/details/${props.item.id}`} 
        className='favbeer-button-open'
        onClick={getExactBeer}>
          Open
      </NavLink>
      <button className='favbeer-button' onClick={removeFromFavorite}>
        Remove Favorite
      </button>
    </div>
  )
}

export default FavoriteBeer;
