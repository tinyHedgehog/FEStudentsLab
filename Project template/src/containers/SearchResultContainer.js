import { connect } from 'react-redux';
import Home from '../components/landing_page/Home';
import {
  requestData,
  addToFavorite,
  removeFromFavorite,
  getExactBeer,
  searchBeers,
  applyFilters
} from '../actions/index';

const mapStateToProps = state => {
  return {
    catalog: state.requestData,
    favorite: state.favorite
  };
};

const mapDispatchToProps = {
  requestData,
  addToFavorite,
  removeFromFavorite,
  getExactBeer,
  searchBeers,
  applyFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
