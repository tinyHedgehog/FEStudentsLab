import axios from 'axios';
import { requestData } from '../actions';

export default function fetchData() {
    return dispatch => {
      return axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=10')
        .then(response => dispatch(requestData(response.data)));
    };
  }
