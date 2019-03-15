import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers';

const getFirstItems = () => {
  return axios.get(`${API}?page=1&per_page=10`);
};

const getNextItems = (currentRequestPage) => {
  return axios.get(`${API}?page=${currentRequestPage}&per_page=5`);
};

const getExactBeer = (beerId) => {
  return axios.get(`${API}/${beerId}`);
};

const searchBeers = (beerName) => {
  return axios.get(`${API}?beer_name=${beerName}`);
};

const applyFilters = (abvValue, ebcValue, ibuValue) => {
  return axios.get(`${API}?per_page=80&abv_gt=${abvValue}&ebc_gt=${ebcValue}&ibu_gt=${ibuValue}`);
};

export default {
  getFirstItems,
  getNextItems,
  getExactBeer,
  searchBeers,
  applyFilters
};
