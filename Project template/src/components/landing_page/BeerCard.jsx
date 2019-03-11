import React from 'react';
import BeerDescription from './BeerDescription';
import './BeerCard.css';

class BeerCard extends React.PureComponent {
  render() {
    let item = this.props.item;

    return (
      <div className="beer-card"  id={item.id}>
        <img className='beer-image' src={item.image_url}/>
        <BeerDescription 
          itemInfo={item}
          title={item.name} 
          tagline={item.tagline}
          isFavorite={this.props.isFavorite}
          addToFavorite={this.props.addToFavorite}
          removeFromFavorite={this.props.removeFromFavorite} 
        />
      </div>
    );
  }
}

export default BeerCard;
