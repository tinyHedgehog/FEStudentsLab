import React, { Fragment } from 'react';
import AdvancedFilters from './AdvancedFilters';
import {
  ENTER,
  LEFT_MOUSE_BUTTON
} from '../../constants';
import searchIcon from './search_icon.png';
import './SearchBar.css';

class SearchBar extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      areFiltersHidden: true,
      searchRequest: ''
    }
  }

  showFilters = () => {
    this.setState({
      areFiltersHidden: !this.state.areFiltersHidden
    })
  }

  createSearchRequest = (e) => {
    this.setState({
      searchRequest: e.target.value
    })
  }

  searchBeers = (e) => {
    if(e.keyCode == ENTER || e.button == LEFT_MOUSE_BUTTON) {
      this.state.searchRequest == false ?
      this.props.requestData() :
      this.props.searchBeers(this.state.searchRequest)
    }
  }

  render() {
    return (
      <Fragment>
        <div className='search-align'>
          <input type='text' placeholder='&nbsp;' 
            className='search-input'
            onChange={this.createSearchRequest}
            onKeyDown={this.searchBeers}
          />
          <span className="search-label">Search beers...</span>
          <span className="search-border"></span>
          <input type='image'
            className='search-icon'  
            src={searchIcon} 
            onClick={this.searchBeers} />
          <a className='filters-button'
            type='button'
            onClick={this.showFilters} />
        </div> 
        <AdvancedFilters
          className={this.state.areFiltersHidden ? '' : ' active'}
          applyFilters={this.props.applyFilters}
        />
      </Fragment>
    );
  }
}

export default SearchBar;
