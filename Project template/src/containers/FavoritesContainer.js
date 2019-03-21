import { connect } from 'react-redux';
import Favorites from '../components/favorites_page/Favorites';
import {
  removeFromFavorite,
  getExactBeer,
  favoritePage
} from '../actions/index';

const mapStateToProps = state => {
  return {
    favorite: state.favorite,
    pageInfo: state.favoritePage
  };
};

const mapDispatchToProps = {
  removeFromFavorite,
  getExactBeer,
  favoritePage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
