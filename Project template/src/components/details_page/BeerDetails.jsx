import React from 'react';
import CommonBeerInfo from './CommonBeerInfo';
import Properties from './Properties';
import FoodPairing from './FoodPairing';
import Brewing from './Brewing';
import './BeerDetails.css';

const BeerDetails = (props) => {
  return(
    <div className='details-page'>
    <CommonBeerInfo
      itemInfo={props.item}
      title={props.item.name} 
      tagline={props.item.tagline}
      description={props.item.description}
      img={props.item.image_url}
      isFavorite={props.favorite.some((favItem) => favItem.id == props.item.id )}
      addToFavorite={props.addToFavorite}
      removeFromFavorite={props.removeFromFavorite}
    />
    <div className='props-and-food'>
      <Properties
        abv={props.item.abv}
        ibu={props.item.ibu}
        ebc={props.item.ebc}
      />
      <FoodPairing foodPairing={props.item.food_pairing} />
    </div>
    <Brewing
      brewersTips={props.item.brewers_tips}
      boilVolume={props.item.boil_volume}
      ingredients={props.item.ingredients}
      method={props.item.method}
    />
    </div>
  );
}

export default BeerDetails;
