import React from 'react';
import BeerDescription from './BeerDescription';
import defaultImg from '../common/default_image.png';
import './BeerCard.css';

class BeerCard extends React.PureComponent {
  render() {
    let item = this.props.item;

    return (
      <div className="beer-card"  id={item.id}>
        {item.image_url == undefined ?
        <img className='beer-image' src={defaultImg}/> :
        <img className='beer-image' src={item.image_url}/>}
        <BeerDescription 
          item={item}
          title={item.name} 
          tagline={item.tagline}
          isFavorite={this.props.isFavorite}
          addToFavorite={this.props.addToFavorite}
          removeFromFavorite={this.props.removeFromFavorite}
          getExactBeer={this.props.getExactBeer}
        />
      </div>
    );
  }
}

export default BeerCard;
