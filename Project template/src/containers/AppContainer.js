import { connect } from 'react-redux';
import App from '../components/App';
import {
  addNextItems,
  getExactBeer,
  favoritePage
} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite
  };
};

const mapDispatchToProps = {
  addNextItems,
  getExactBeer,
  favoritePage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
