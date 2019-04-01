import React from 'react';
import BeerCard from './BeerCard';
import { 
  HOME_LOCATION,
  INITIAL_PAGE_SCROLL,
  NO_ITEMS
} from '../../constants';
import upIcon from './up_icon.png';
import './Home.css';

class Home extends React.PureComponent {
  scrollToTop = () => {
    window.scrollTo(INITIAL_PAGE_SCROLL, INITIAL_PAGE_SCROLL);
  }

  render() {
    let isCatalogDisplayed = this.props.catalog && this.props.catalog.length;
    let isUpPanelDisplayed = window.location.hash === HOME_LOCATION &&
      document.documentElement.scrollTop > INITIAL_PAGE_SCROLL;

    return (
      <div className='search-result'>
        {isUpPanelDisplayed && 
        <div className='up-panel' onClick={this.scrollToTop}>
          <img className='up-icon' src={upIcon} />
          <span className='up-panel-text'>Up</span>
        </div>}
        {isCatalogDisplayed && 
          this.props.catalog.length !== NO_ITEMS ?
          this.props.catalog.map((item) => (
            <BeerCard
              key={item.id}
              item={item}
              isFavorite={this.props.favorite.some((favItem) => favItem.id == item.id )}
              addToFavorite={this.props.addToFavorite}
              removeFromFavorite={this.props.removeFromFavorite}
              getExactBeer={this.props.getExactBeer}
            />
          )) :
          <h1 className='no-items-placeholder'>
            There is no beers with this name.
          </h1>
        }
      </div>
    );
  }
}

export default Home;
