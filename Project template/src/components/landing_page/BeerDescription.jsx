import React from 'react';
import './BeerDescription.css';

const BeerDescription = () => (
  <div className='beer-description'>
    <p className='beer-title'>Punk IPA 2007-2010</p>
    <p className='beer-tagline'>Post Modern Classic. Spilky. Tropica. Happy.</p>
    <button className='beer-buttons'>OPEN</button>
    <button className='beer-buttons'>FAVORITE</button>
  </div>
);

export default BeerDescription;
