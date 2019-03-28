import React from 'react';
import Header from './common/Header';
import { 
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import BeerDetailsContainer from '../containers/BeerDetailsContainer';
import {
  CURRENT_REQUEST_PAGE,
  HOME_LOCATION,
  DETAILS_LOCATION
} from '../constants';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentRequestPage: CURRENT_REQUEST_PAGE,
    }

    if(this.particularBeerSelected()){
      this.switchToBeerDetails();
    }

    window.onscroll = () => {
      const nextItemsRequested = Math.round(window.innerHeight + document.documentElement.scrollTop)
      === document.documentElement.offsetHeight &&
      window.location.hash === HOME_LOCATION;

      if (nextItemsRequested) {
        this.props.addNextItems(this.state.currentRequestPage);
        this.updateRequestParams();
      }
    }
  }

  particularBeerSelected = () => {
    return window.location.hash.split('/')[1] == DETAILS_LOCATION;
  }

  switchToBeerDetails = () => {
    this.props.getExactBeer(window.location.hash.split('/')[2])
  }

  updateRequestParams = () => {
    this.setState({
      currentRequestPage: ++this.state.currentRequestPage,
    })
  }

  render() {
    return(
      <HashRouter>
        <div className='app'>
          <Header 
            favorite={this.props.favorite}
            favoritePage={this.props.favoritePage}
            searchBeers={this.props.searchBeers}
            requestData={this.props.requestData}
            applyFilters={this.props.applyFilters}
            exactBeer={this.props.exactBeer}
          />
          <Switch>
            <Route exact path='/' component={HomeContainer}  /> 
            <Route path='/favorites_page' component={FavoritesContainer} />
            <Route path='/details/:id' component={BeerDetailsContainer} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
