import { REQUEST_DATA } from '../actions/index';

const requestData = (
  state = {
    catalog: []
  },
  action
) => {
  switch(action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        catalog: action.data
      });
    default:
      return state;
  }
};

export default requestData;
