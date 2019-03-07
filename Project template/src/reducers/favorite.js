import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../actions/index';

const favorite = (
  state = [],
  action
) => {
  switch(action.type) {
    case ADD_TO_FAVORITE:
      return [
        ...state,
        action.favorite
      ];
    case REMOVE_FROM_FAVORITE:
      return [
        ...state.filter(item => item.id !== action.favorite)
      ];
    default:
      return state;
  }
};

export default favorite;
