import axios from 'axios';

export const REQUEST_DATA = 'REQUEST_DATA';

const requestData = data => ({
  type: REQUEST_DATA,
  data
});

export function fetchData() {
  return dispatch => {
    return axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=10')
      .then(response => dispatch(requestData(response.data)));
  };
}

export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';

export const addToFavorite = favorite => ({
  type: ADD_TO_FAVORITE,
  favorite
});

export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const removeFromFavorite = favorite => ({
  type: REMOVE_FROM_FAVORITE,
  favorite
});
