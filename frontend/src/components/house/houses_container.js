import { connect } from 'react-redux';
import { fetchHouses } from '../../actions/house_actions';
import Houses from './houses';

const mapStateToProps = (state) => {
  return {
    houses: Object.values(state.houses.all),
    currentUser: state.session.user

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHouses: () => dispatch(fetchHouses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
