import { combineReducers } from 'redux';
import requestData from './requestData';
import favorite from './favorite';

const rootReducer = combineReducers({
  requestData,
  favorite
});

export default rootReducer;
