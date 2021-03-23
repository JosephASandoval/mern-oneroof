import { connect } from 'react-redux';
import { fetchHouses } from '../../actions/house_actions';
import House from './house';

const mapStateToProps = (state) => {
  return {
    houses: Object.values(state.houses.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHouses: () => dispatch(fetchHouses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(House);
