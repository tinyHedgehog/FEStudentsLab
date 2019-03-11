import React from 'react';
import Header from './common/Header';
import { 
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import SearchResultContainer from '../containers/SearchResultContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import DetailsContainer from '../containers/DetailsContainer';
import './App.css';

const App = () => (
  <HashRouter>
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={SearchResultContainer}  /> 
        <Route path='/favorites_page' component={FavoritesContainer} />
        <Route path='/details/:id' component={DetailsContainer} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
