import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers?page=1&per_page=10';

const getFirstItems = () => {
  return axios.get(API);
};

export default {
  getFirstItems
};
