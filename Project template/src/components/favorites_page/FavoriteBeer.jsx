import React from 'react';
import img from './beer.png';
import './FavoriteBeer.css';

class FavoriteBeer extends React.Component {
  render() {
    return (
      <div className='favorite-beer'>
        <img className='favbeer-image' src={img} />
        <h3>Punk IPA 2007 - 2010</h3>
        <p className='favbeer-p'>Post Modern Classic. Spilky. Tropica. Happy.</p>
        <p className='favbeer-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed 
            purus dui. Quisque sit amet massa nisi. Aliquam erat volutpat. 
            Donec laoreet tincidunt urna nec posuere. Vestibulum ante ipsum 
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
            Etiam rutrum a enim sit amet sollicitudin. Aliquam erat volutpat. 
            Aenean vitae blandit dolor. Curabitur mi elit, egestas quis bibendum id, fermentum sed nisi.</p>
        <button>OPEN</button>
        <button>REMOVE FAVORITE</button>
      </div>
    );
  }
}

export default FavoriteBeer;
