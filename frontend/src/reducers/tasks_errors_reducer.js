import {
  RECEIVE_TASK_ERRORS,
  CLEAR_TASK_ERRORS,
} from "../actions/task_actions";

const _nullErrors = [];

const TaskErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors;
    case CLEAR_TASK_ERRORS:
      return [];
    default:
      return state;
  }
};

export default TaskErrorsReducer;
