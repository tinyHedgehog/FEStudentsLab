import { connect } from 'react-redux';
import App from '../components/App';
import { addNextItems } from '../actions/index';

const mapDispatchToProps = {
  addNextItems
};

export default connect(
  null,
  mapDispatchToProps
)(App);
