import {
  RECEIVE_ALL_COMPLETES,
  RECEIVE_TASK_COMPLETES,
  RECEIVE_COMPLETE,
  REMOVE_COMPLETE,
  CLEAR_COMPLETES,
} from "../actions/complete_actions";

const completesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_COMPLETES:
      let j;
      for (j = 0; j < action.completes.data.length; j++) {
        newState[action.completes.data[j]._id] = action.completes.data[j];
      }
      return newState;
    case RECEIVE_TASK_COMPLETES:
      let i;
      for (i = 0; i < action.completes.data.length; i++) {
        newState[action.completes.data[i]._id] = action.completes.data[i];
      }
      return newState;
    case RECEIVE_COMPLETE:
      return Object.assign(newState, {
        [action.complete.data._id]: action.complete.data,
      });
    case REMOVE_COMPLETE:
      delete newState[action.completeId];
      return newState;
    case CLEAR_COMPLETES:
      return {};
    default:
      return state;
  }
};

export default completesReducer;
