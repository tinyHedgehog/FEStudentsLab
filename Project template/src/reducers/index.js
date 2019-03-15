import { combineReducers } from 'redux';
import exactBeer from './exactBeer';
import requestData from './requestData';
import favorite from './favorite';

const rootReducer = combineReducers({
  exactBeer,
  requestData,
  favorite
});

export default rootReducer;
