import React from 'react';
import BeerDescription from './BeerDescription';
import img from './beer.png';
import './DisplayBeer.css'

const DisplayBeer = () => (
  <div className="display-beer">
    <img className='beer-image' src={img}/>
    <BeerDescription />
  </div>
);

export default DisplayBeer;
