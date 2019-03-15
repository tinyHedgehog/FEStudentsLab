import { connect } from 'react-redux';
import Favorites from '../components/favorites_page/Favorites';
import {
  removeFromFavorite,
  getExactBeer
} from '../actions/index';

const mapStateToProps = state => {
  return {
    favorite: state.favorite
  };
};

const mapDispatchToProps = {
  removeFromFavorite,
  getExactBeer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
