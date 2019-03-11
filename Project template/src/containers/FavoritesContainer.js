import { connect } from 'react-redux';
import Favorites from '../components/favorites_page/Favorites';
import { removeFromFavorite } from '../actions/index';

const mapStateToProps = state => {
  return {
    favorite: state.favorite
  };
};

const mapDispatchToProps = {
  removeFromFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
