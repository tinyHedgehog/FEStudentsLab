import React from 'react';
import {
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import Header from './common/Header';
import Home from './landing_page/index';
import FavoritesPage from './favorites_page/index';
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
);

export default App;
