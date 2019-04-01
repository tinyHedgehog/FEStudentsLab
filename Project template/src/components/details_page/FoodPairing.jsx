import React from 'react';
import './FoodPairing.css';

const FoodPairing = (props) => {
  return(
    <ul className='food-pairing'>
      <h2>Food pairing</h2>
      {props.foodPairing.map((pair, index) => {
        return <li key={`food_${index}`} className='food-pairing-description'>{pair}</li>
      })}
    </ul>
  )
}

export default FoodPairing;
