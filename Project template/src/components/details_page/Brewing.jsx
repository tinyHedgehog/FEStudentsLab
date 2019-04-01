import React from 'react';
import Ingredients from './Ingredients';
import Method from './Method';
import './Brewing.css';

const Brewing = (props) => {
  return(
    <div className='brewing'>
        <h2>Brewing</h2>
        <p className='brewing-tips'>{props.brewersTips}</p>
        <div className='brewing-description'>
          <Ingredients boilVolume={props.boilVolume} ingredients={props.ingredients} />
          <Method method={props.method} />
        </div>
    </div>
  )
}

export default Brewing;
