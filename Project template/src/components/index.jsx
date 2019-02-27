import React from 'react';
import Header from './common/Header';
<<<<<<< HEAD
import Home from './landing_page/index'
import FavoritesPage from './favorites_page/index';
import { 
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import './index.css';

const App = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} /> 
        <Route path='/favorites_page' component={FavoritesPage} />
      </Switch>
    </div>
  </HashRouter>
=======
import SearchBar from './landing_page/SearchBar';
import DisplayBeer from './landing_page/DisplayBeer';
import './index.css';

const App = () => (
  <div>
    <Header />
    <SearchBar />
    <div className='search-result'>
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
      <DisplayBeer />
    </div>
  </div>
>>>>>>> 0a3b859... Adding simple implementation of the landing page.
);

export default App;
