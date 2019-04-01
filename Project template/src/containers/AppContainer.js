import { connect } from 'react-redux';
import App from '../components/App';
import {
  addNextItems,
  getExactBeer,
  favoritePage,
  searchBeers,
  requestData,
  applyFilters
} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite,
    exactBeer: state.exactBeer[0]
  };
};

const mapDispatchToProps = {
  addNextItems,
  getExactBeer,
  favoritePage,
  searchBeers,
  requestData,
  applyFilters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
