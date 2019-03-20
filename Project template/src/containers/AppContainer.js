import { connect } from 'react-redux';
import App from '../components/App';
import {
  addNextItems,
  getExactBeer,
  changePage
} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite
  };
};

const mapDispatchToProps = {
  addNextItems,
  getExactBeer,
  changePage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
