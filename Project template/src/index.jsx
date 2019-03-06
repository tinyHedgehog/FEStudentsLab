import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchData } from './actions';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './components/index';
import './index.css';

const loggerMiddleware = createLogger();
const persistedState = localStorage.getItem('state') ? 
  JSON.parse(localStorage.getItem('state')) : {};

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
  localStorage.setItem('state', JSON.stringify(store.getState()))
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
