import { REQUEST_DATA } from '../actions/index';

const requestData = (
  state = [],
  action
) => {
  switch(action.type) {
    case REQUEST_DATA:
      return action.data;
    default:
      return state;
  }
};

export default requestData;
