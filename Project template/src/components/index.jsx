import React from 'react';
import Header from './common/Header';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be1c9ff... Adding landing page and favorites page.
import Home from './landing_page/index'
import FavoritesPage from './favorites_page/index';
import { 
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
<<<<<<< HEAD
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
=======
>>>>>>> be1c9ff... Adding landing page and favorites page.
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
<<<<<<< HEAD
  </div>
>>>>>>> 0a3b859... Adding simple implementation of the landing page.
=======
  </HashRouter>
>>>>>>> be1c9ff... Adding landing page and favorites page.
);

export default App;
