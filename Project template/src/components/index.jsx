import React from 'react';
import Header from './common/Header';
import { 
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import SearchResultContainer from '../containers/SearchResultContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import './index.css';

class App extends React.Component {
  render() {
    return(
      <HashRouter>
        <div onClick={this.checkState}>
          <Header />
          <Switch>
            <Route exact path='/' component={SearchResultContainer}  /> 
            <Route path='/favorites_page' component={FavoritesContainer} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
