import React from 'react';
import FavoriteBeer from './FavoriteBeer';
import Paginator from './Paginator';
import { CURRENT_FAVORITE_PAGE } from '../../constants'

class FavoritesPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: CURRENT_FAVORITE_PAGE,
    }

    this.props.favoritePage(
      this.state.currentPage,
      this.props.favorite
    );
  }

  render() {
    return(
      <div className='search-result'>
        {this.props.pageInfo && 
          this.props.pageInfo.thisPageBeers.map(item => (
            <FavoriteBeer 
              key={item.id} item={item} 
              favorite={this.props.favorite}
              removeFromFavorite={this.props.removeFromFavorite}
              currentPage={this.props.pageInfo.currentPage}
              getExactBeer={this.props.getExactBeer}
              favoritePage={this.props.favoritePage}
            />
          ))
        }
      <Paginator
        favorite={this.props.favorite}
        favoritePage={this.props.favoritePage}
        currentPage={this.state.currentPage}
      />
    </div>
    );
  }
}

export default FavoritesPage;
