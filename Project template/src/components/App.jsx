import React from 'react';
import Header from './common/Header';
import { 
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import SearchResultContainer from '../containers/SearchResultContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import BeerDetailsContainer from '../containers/BeerDetailsContainer';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentRequestPage: 3,
    }

    window.onscroll = () => {
      if (
        Math.round(window.innerHeight + document.documentElement.scrollTop)
        === document.documentElement.offsetHeight &&
        window.location.hash === '#/'
      ) {
        this.props.addNextItems(this.state.currentRequestPage);
        this.updateRequestParams();
      }
    }
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
          <Header />
          <Switch>
            <Route exact path='/' component={SearchResultContainer}  /> 
            <Route path='/favorites_page' component={FavoritesContainer} />
            <Route path='/details/:id' component={BeerDetailsContainer} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
