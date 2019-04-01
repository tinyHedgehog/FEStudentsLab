import React, { useCallback } from 'react';
import defaultImg from '../common/default_image.png';
import './CommonBeerInfo.css';

const CommonBeerInfo = (props) => {
  const addToFavorite = useCallback(() => {
    props.addToFavorite(props.item)
  },[props.item]);

  const removeFromFavorite = useCallback(() => {
    props.removeFromFavorite(props.item.id)
  },[props.item.id]); 

  return(
    <div className='common-beer-info'>
      {props.img == undefined ?
        <img className='beer-details-img' src={defaultImg} /> :
        <img className='beer-details-img' src={props.img} />
      }
      <h2>{props.title}</h2>
      <p className='beer-details-tagline'>{props.tagline}</p>
      {!props.isFavorite &&
        <button
          className='beer-details-buttons'
          onClick={addToFavorite}
        >
        Add to favorites
        </button>
      }
      {props.isFavorite &&
        <button
          className='beer-details-buttons'
          onClick={removeFromFavorite}
        >Remove from favorites</button>
      }
      <p className='beer-details-description-paragraph'>{props.description}</p>
    </div>
  )
}

export default CommonBeerInfo;
