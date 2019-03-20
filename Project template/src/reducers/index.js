import { combineReducers } from 'redux';
import exactBeer from './exactBeer';
import requestData from './requestData';
import favorite from './favorite';
import changePage from './changePage';

const rootReducer = combineReducers({
  exactBeer,
  requestData,
  favorite,
  changePage
});

export default rootReducer;
