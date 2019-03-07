import { connect } from 'react-redux';
import Home from '../components/landing_page/Home';
import {
  addToFavorite,
  removeFromFavorite
} from '../actions/index';

const mapStateToProps = state => {
  return {
    catalog: state.requestData,
    favorite: state.favorite
  };
};

const mapDispatchToProps = {
  addToFavorite,
  removeFromFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
