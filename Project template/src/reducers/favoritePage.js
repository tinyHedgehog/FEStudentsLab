import { CHANGE_PAGE } from '../actions/actionTypes';
import { BEERS_PER_PAGE } from '../constants';


const favoritePage = (
  state = {},
  action
) => {
  const lastBeerIndex = action.currentPage * BEERS_PER_PAGE;
  const firstBeerIndex = lastBeerIndex - BEERS_PER_PAGE;
  switch(action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPage: action.currentPage,
        thisPageBeers: [...action.thisPageBeers.slice(firstBeerIndex, lastBeerIndex)]
      });
    default:
      return state;
  }
};

export default favoritePage;
