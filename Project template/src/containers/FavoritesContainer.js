import { connect } from 'react-redux';
import Favorites from '../components/favorites_page/Favorites';
import {
  removeFromFavorite,
  getExactBeer,
  changePage
} from '../actions/index';

const mapStateToProps = state => {
  return {
    favorite: state.favorite,
    pageInfo: state.changePage
  };
};

const mapDispatchToProps = {
  removeFromFavorite,
  getExactBeer,
  changePage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
