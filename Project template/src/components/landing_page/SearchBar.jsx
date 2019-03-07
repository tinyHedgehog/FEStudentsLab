import React from 'react';
import AdvancedFilters from './AdvancedFilters';
import searchIcon from './search-icon.png';
import './SearchBar.css';

class SearchBar extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      areFiltersHidden: true
    }
  }

  render() {
    let showFilters = () => {
      this.setState({
        areFiltersHidden: !this.state.areFiltersHidden
      })
    }

    return (
      <div className='search-container'>
        <div className='search-align'>
          <input type='text' placeholder='Search beers...' className='search-input'/>
          <input className='search-icon' type='image' src={searchIcon} />
          <input type='button' value='Advanced Filters' onClick={showFilters} />
        </div> 
        {!this.state.areFiltersHidden && <AdvancedFilters />}
      </div>
    );
  }
}

export default SearchBar;
