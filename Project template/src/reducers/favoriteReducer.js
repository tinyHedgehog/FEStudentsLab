import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../actions/index';

const favoriteReducer = (
  state = {
    favorite: []
  },
  action
) => {
  switch(action.type) {
    case ADD_TO_FAVORITE:
      return Object.assign({}, state, {
        favorite: [
          ...state.favorite,
          action.favorite
        ]
      });
    case REMOVE_FROM_FAVORITE:
      return Object.assign({}, state, {
        favorite: [
          ...state.favorite.filter(item => item.id !== action.favorite)
        ]
      });
    default:
      return state;
  }
};

export default favoriteReducer;
