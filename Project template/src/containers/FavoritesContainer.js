import { connect } from 'react-redux';
import Favorites from '../components/favorites_page/Favorites';
import { removeFromFavorite } from '../actions/index';

const mapStateToProps = state => {
  return {
    favorite: state.favoriteReducer.favorite
  };
};

const mapDispatchToProps = {
  removeFromFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
