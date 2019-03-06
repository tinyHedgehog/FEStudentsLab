import React from 'react';
import './BeerDescription.css';

class BeerDescription extends React.Component {
  render() {
    return (
      <div className='beer-description'>
        <p className='beer-title'>{this.props.title}</p>
        <p className='beer-tagline'>{this.props.tagline}</p>
        <button className='beer-buttons'>OPEN</button>
        {!this.props.isFavorite && 
          <button 
            className='beer-buttons' 
            onClick={e => this.props.addToFavorite(this.props.itemInfo)}
          >
            FAVORITE
          </button>
        }
        {this.props.isFavorite && 
          <button 
            className='beer-buttons'
            onClick={e => this.props.removeFromFavorite(this.props.itemInfo.id)}
          >
            REMOVE FAVORITE
          </button>}
      </div>
    );
  }
}

export default BeerDescription;
