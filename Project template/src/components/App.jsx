import React from 'react';
import Header from './common/Header';
import { 
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import SearchResultContainer from '../containers/SearchResultContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import './App.css';

const App = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={SearchResultContainer}  /> 
        <Route path='/favorites_page' component={FavoritesContainer} />
      </Switch>
    </div>
  </HashRouter>
)

export default App;
