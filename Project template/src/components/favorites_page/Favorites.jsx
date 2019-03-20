import React from 'react';
import FavoriteBeer from './FavoriteBeer';
import Paginator from './Paginator';
import { CURRENT_FAVORITE_PAGE } from '../../constants'

class FavoritesPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: CURRENT_FAVORITE_PAGE,
      renderBeers: []
    }

    this.props.changePage(
      this.state.currentPage,
      this.props.favorite
    );
  }

  render() {
    console.log(this.props);
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
              changePage={this.props.changePage}
            />
          ))
        }
      <Paginator
        favorite={this.props.favorite}
        changePage={this.props.changePage}
        currentPage={this.state.currentPage}
      />
    </div>
    );
  }
}

export default FavoritesPage;
