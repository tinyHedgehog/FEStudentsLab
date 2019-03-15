import React, {Fragment } from 'react';
import FavoriteBeer from './FavoriteBeer';
import arrow from './arrow_left.png';
import './Favorites.css';

class FavoritesPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      beersPerPage: 5
    }
  }

  changePage = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    })
  }

  handleLeftArrowClick = () => {
    if(this.state.currentPage !== 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }
  }

  handleRightArrowClick = () => {
    if(this.state.currentPage !== Math.ceil(this.props.favorite.length / this.state.beersPerPage)){
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  render() {
    const { currentPage, beersPerPage } = this.state;

    const indexOfLastBeer = currentPage * beersPerPage;
    const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
    const currentBeers = this.props.favorite.slice(indexOfFirstBeer, indexOfLastBeer);

    const renderBeers = currentBeers.map((beer) => {
      return <FavoriteBeer key={beer.id} item={beer} 
        removeFromFavorite={this.props.removeFromFavorite}
        getExactBeer={this.props.getExactBeer} 
      />
    })

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(this.props.favorite.length / beersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.changePage}
        >
          {number}
        </li>
      );
    });

    return(
      <div className='search-result'>
        {renderBeers}
        <ul className='page-numbers'>
          {pageNumbers.length > 1 && 
            <Fragment><img className='arrow-left' src={arrow} onClick={this.handleLeftArrowClick} />
            {renderPageNumbers}
            <img className='arrow-right' src={arrow} onClick={this.handleRightArrowClick} />
            </Fragment>
          }
        </ul>
      </div>
    );
  }
};

export default FavoritesPage;
