import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import fetchData from './api_level/api';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';
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

store.dispatch(fetchData());

store.subscribe(() => {
  localStorage.setItem(STATE, JSON.stringify(store.getState()))
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
