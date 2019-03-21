import {
  REQUEST_DATA,
  GET_NEXT_ITEMS,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_EXACT_BEER,
  SEARCH_BEERS,
  APPLY_FILTERS,
  CHANGE_PAGE
} from './actionTypes';
import api from '../api_level/api';

export function requestData() {
  return dispatch => api.getFirstItems()
    .then(response => dispatch({
      type: REQUEST_DATA,
      data: response.data
    }));
}

export function addNextItems(currentRequestPage) {
  return dispatch => api.getNextItems(currentRequestPage)
    .then(response => dispatch({
      type: GET_NEXT_ITEMS,
      nextItems: response.data,
      currentRequestPage
    }));
}

export function getExactBeer(beerId) {
  return dispatch => api.getExactBeer(beerId)
    .then(response => dispatch({
      type: GET_EXACT_BEER,
      exactBeer: response.data,
      beerId
    }));
}

export function searchBeers(beerName) {
  return dispatch => api.searchBeers(beerName)
    .then(response => dispatch({
      type: SEARCH_BEERS,
      searchResult: response.data,
      beerName
    }));
}

export function applyFilters(abvValue, ebcValue, ibuValue) {
  return dispatch => api.applyFilters(abvValue, ebcValue, ibuValue)
    .then(response => dispatch({
      type: APPLY_FILTERS,
      filteredResult: response.data,
      abvValue,
      ebcValue,
      ibuValue
    }));
}

export const addToFavorite = favorite => ({
  type: ADD_TO_FAVORITE,
  favorite
});

export const removeFromFavorite = favorite => ({
  type: REMOVE_FROM_FAVORITE,
  favorite
});

export const favoritePage = (currentPage, thisPageBeers) => ({
  type: CHANGE_PAGE,
  currentPage,
  thisPageBeers
});
