import { connect } from 'react-redux';
import BeerDetails from '../components/details_page/BeerDetails';
import {
  addToFavorite,
  removeFromFavorite
} from '../actions/index';

const mapStateToProps = (state, onwProps) => {
  return {
    catalog: state.requestData,
    favorite: state.favorite,
    item: state.requestData[Number(onwProps.match.params.id) - 1] ,
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
