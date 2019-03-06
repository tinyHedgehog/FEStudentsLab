import { combineReducers } from 'redux';
import requestData from './requestData';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  requestData,
  favoriteReducer
});

export default rootReducer;
