import {
  RECEIVE_ALL_TASKS,
  RECEIVE_USER_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  CLEAR_TASK,
} from "../actions/task_actions";

const taskReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      let i;
      for (i = 0; i < action.tasks.data.length; i++) {
        newState[action.tasks.data[i]._id] = action.tasks.data[i];
      }
      return newState;
    case RECEIVE_USER_TASKS:
      let j;
      for (j = 0; j < action.tasks.data.length; j++) {
        newState[action.tasks.data[j]._id] = action.tasks.data[j];
      }
      return newState;
    case RECEIVE_TASK:
      return Object.assign(newState, {
        [action.task.data._id]: action.task.data,
      });
    case REMOVE_TASK:
      delete newState[action.taskId];
      return newState;
    case CLEAR_TASK:
      return {};
    default:
      return state;
  }
};

export default taskReducer;
