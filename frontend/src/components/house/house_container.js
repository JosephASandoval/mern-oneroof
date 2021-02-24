import { connect } from 'react-redux';
import { fetchUserHouses } from '../../actions/house_actions';
import House from './house';

const mapStateToProps = (state) => {
  return {
    houses: Object.values(state.houses.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserHouses: () => dispatch(fetchUserHouses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(House);
