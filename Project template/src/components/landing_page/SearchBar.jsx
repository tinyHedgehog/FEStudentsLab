import React from 'react';
import AdvancedFilters from './AdvancedFilters';
import searchIcon from './search-icon.png';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      areFiltersHidden: true
    }
    this.showFilters = this.showFilters.bind(this);
  }

  showFilters() {
    this.setState({
      areFiltersHidden: !this.state.areFiltersHidden
    })
  }

  render() {
    return (
      <div className='search-container'>
        <div className='search-align'>
          <input type='text' placeholder='Search beers...' className='search-input'/>
          <input className='search-icon' type='image' src={searchIcon} />
          <input type='button' value='Advanced Filters' onClick={this.showFilters} />
        </div> 
        {!this.state.areFiltersHidden && <AdvancedFilters />}
      </div>
    );
  }
}

export default SearchBar;
