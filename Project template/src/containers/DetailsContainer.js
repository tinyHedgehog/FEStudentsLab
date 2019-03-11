import { connect } from 'react-redux';
import Details from '../components/details_page/Details';
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

const mapDisaptchToProps = {
  addToFavorite,
  removeFromFavorite
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(Details);
