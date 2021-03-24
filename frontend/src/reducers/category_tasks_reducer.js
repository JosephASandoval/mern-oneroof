import { RECEIVE_ALL_TASKS_USING_CATEGORY } from "../actions/task_actions";

const categoryTasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({});

  switch (action.type) {
    case RECEIVE_ALL_TASKS_USING_CATEGORY:
      let r;
      for (r = 0; r < action.tasks.data.length; r++) {
        newState[action.tasks.data[r]._id] = action.tasks.data[r];
      }
      return newState;
    default:
      return state;
  }
};

export default categoryTasksReducer;
