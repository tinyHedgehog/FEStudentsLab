import React from 'react';
import CommonBeerInfo from './CommonBeerInfo';
import Properties from './Properties';
import FoodPairing from './FoodPairing';
import Brewing from './Brewing';
import './Details.css';

const Details = (props) => {
  const item = props.catalog[parseInt(props.match.params.id) - 1];

  return(
    <div className='details-page'>
    <CommonBeerInfo
      itemInfo={item}
      title={item.name} 
      tagline={item.tagline}
      description={item.description}
      img={item.image_url}
      isFavorite={props.favorite.some((favItem) => favItem.id == item.id )}
      addToFavorite={props.addToFavorite}
      removeFromFavorite={props.removeFromFavorite}
    />
    <div className='props-and-food'>
      <Properties
        abv={item.abv}
        ibu={item.ibu}
        ebc={item.ebc}
      />
      <FoodPairing foodPairing={item.food_pairing} />
    </div>
    <Brewing
      brewersTips={item.brewers_tips}
      boilVolume={item.boil_volume}
      ingredients={item.ingredients}
      method={item.method}
    />
    </div>
  );
}

export default Details;
