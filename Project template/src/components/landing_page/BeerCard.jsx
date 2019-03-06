import React from 'react';
import BeerDescription from './BeerDescription';
import img from './beer.png';
import './BeerCard.css';

const BeerCard = () => (
  <div className="display-beer">
    <img className='beer-image' src={img}/>
    <BeerDescription />
  </div>
);

export default BeerCard;
