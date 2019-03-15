import React from 'react';
import AdvancedFilters from './AdvancedFilters';
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
    console.log(this.state);
    this.setState({
      searchRequest: e.target.value
    })
  }

  searchBeers = (e) => {
    if(e.key == 'Enter' || e.button == 0) {
      this.state.searchRequest == false ?
      this.props.requestData() :
      this.props.searchBeers(this.state.searchRequest)
    }
  }

  render() {
    return (
      <div className='search-container'>
        <div className='search-align'>
          <input type='text' placeholder='Search beers...' className='search-input'
            onChange={this.createSearchRequest}
            onKeyPress={this.searchBeers}
          />
          <input className='search-icon' type='image' src={searchIcon} onClick={this.searchBeers} />
          <input type='button' value='Advanced Filters' onClick={this.showFilters} />
        </div> 
        {!this.state.areFiltersHidden && 
          <AdvancedFilters applyFilters={this.props.applyFilters} />
        }
      </div>
    );
  }
}

export default SearchBar;
