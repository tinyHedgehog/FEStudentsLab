import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { requestData, getExactBeer } from './actions';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import AppContainer from './containers/AppContainer';
import './index.css';

const STATE = 'state';

const loggerMiddleware = createLogger();
const persistedState = localStorage.getItem(STATE) ? 
  JSON.parse(localStorage.getItem(STATE)) : {};

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(requestData());
store.dispatch(getExactBeer(1));

if(window.location.hash.split('/')[1] == 'details') {
  store.dispatch(getExactBeer(window.location.hash.split('/')[2]))
}

store.subscribe(() => {
  localStorage.setItem(STATE, JSON.stringify(store.getState()))
});

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
