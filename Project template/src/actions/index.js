export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = data => ({
  type: REQUEST_DATA,
  data
});

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
