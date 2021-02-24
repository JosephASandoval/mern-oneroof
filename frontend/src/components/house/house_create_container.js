import { connect } from 'react-redux';
import { createHouse } from '../../actions/house_actions';
import HouseCreate from './house_create';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newHouse: state.houses.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createHouse: data => dispatch(createHouse(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseCreate);
