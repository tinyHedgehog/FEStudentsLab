import { connect } from 'react-redux';
import BeerDetails from '../components/details_page/BeerDetails';
import {
  addToFavorite,
  removeFromFavorite,
  getExactBeer
} from '../actions/index';

const mapStateToProps = (state, onwProps) => {
  return {
    catalog: state.requestData,
    favorite: state.favorite,
    item: state.exactBeer[0].id === Number(onwProps.match.params.id) ?
    state.exactBeer[0] :
    getExactBeer(Number(onwProps.match.params.id))[0],
    isFavorite: state.favorite.some((favItem) => favItem.id === Number(onwProps.match.params.id))
  };
};

const mapDisaptchToProps = {
  addToFavorite,
  removeFromFavorite
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(BeerDetails);
