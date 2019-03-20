import React, { Fragment } from 'react';
import { BEERS_PER_PAGE } from '../../constants'
import arrow from './arrow_left.png';
import './Paginator.css';

class Paginator extends React.PureComponent {
  constructor(props) {
    super(props);
  
    this.state = {
      currentPage: this.props.currentPage,
      beersPerPage: BEERS_PER_PAGE,
      maxPagesNumber: Math.ceil(this.props.favorite.length / BEERS_PER_PAGE)
    }
  }

  changePage = (e) => {
    this.props.changePage(
      Number(e.target.id),
      this.props.favorite
    )
  }
    
  handleLeftArrowClick = () => {
    if(this.state.currentPage !== 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }
  }
    
  handleRightArrowClick = () => {
    if(this.state.currentPage !== this.state.maxPagesNumber){
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  render() {   
    const pageNumbers = [];

    for(let i = 1; i <= this.state.maxPagesNumber; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            className='page-number'
            key={number}
            id={number}
            onClick={this.changePage}
          >
            {number}
          </li>
        );
    });

    return(
      <Fragment>
        <ul className='page-numbers-list'>
          {pageNumbers.length > 1 && 
            <Fragment>
              <img className='arrow-left' 
                src={arrow} 
                onClick={this.handleLeftArrowClick} 
              />
              {renderPageNumbers}
              <img className='arrow-right'
                src={arrow}
                onClick={this.handleRightArrowClick} />
            </Fragment>
          }
        </ul>
      </Fragment>
    );
  }
}

export default Paginator;