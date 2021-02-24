import { RECEIVE_HOUSES, RECEIVE_USER_HOUSES, RECEIVE_NEW_HOUSE } from '../actions/house_actions';
  
  const HousesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_HOUSES:
        newState.all = action.houses.data;
        return newState;
      case RECEIVE_USER_HOUSES:
        newState.user = action.houses.data;
        return newState;
      case RECEIVE_NEW_HOUSE:
        newState.new = action.house.data
        return newState;
      default:
        return state;
    }
  };
  
  export default HousesReducer;