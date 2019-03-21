import { combineReducers } from 'redux';
import exactBeer from './exactBeer';
import requestData from './requestData';
import favorite from './favorite';
import favoritePage from './favoritePage';

const rootReducer = combineReducers({
  exactBeer,
  requestData,
  favorite,
  favoritePage
});

export default rootReducer;
