import {
  REQUEST_DATA,
  GET_NEXT_ITEMS,
  SEARCH_BEERS,
  APPLY_FILTERS
} from '../actions/actionTypes';

const requestData = (
  state = [],
  action
) => {
  switch(action.type) {
    case REQUEST_DATA:
      return action.data;
    case GET_NEXT_ITEMS:
      return [...state, ...action.nextItems];
    case SEARCH_BEERS:
      return action.searchResult;
    case APPLY_FILTERS:
      return action.filteredResult;
    default:
      return state;
  }
};

export default requestData;
