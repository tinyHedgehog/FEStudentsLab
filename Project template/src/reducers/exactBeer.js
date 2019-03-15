import { GET_EXACT_BEER } from '../actions/actionTypes';

const exactBeer = (
  state = [],
  action
) => {
    switch(action.type) {
      case GET_EXACT_BEER:
        return action.exactBeer;
      default:
        return state;
    }
};

export default exactBeer;
