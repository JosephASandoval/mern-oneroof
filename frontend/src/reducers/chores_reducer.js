import { RECEIVE_CHORES, RECEIVE_USER_CHORES, RECEIVE_NEW_CHORE, REMOVE_CHORE } from '../actions/chore_actions';
  
  const choresReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_CHORES:
        newState.all = action.chores.data;
        return newState;
      case RECEIVE_USER_CHORES:
        newState.user = action.chores.data;
        return newState;
      case RECEIVE_NEW_CHORE:
        newState.all.unshift(action.chore.data);
        return newState;
      case REMOVE_CHORE:
        newState = Object.assign({}, state)
        delete newState[action.chore.id]
        return newState;
      default:
        return state;
    }
  };
  
  export default choresReducer;