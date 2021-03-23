import * as CompleteApiUtil from "../util/completes_api_utils";

export const RECEIVE_ALL_COMPLETES = "RECEIVE_COMPLETES";
export const RECEIVE_TASK_COMPLETES = "RECEIVE_TASK_COMPLETES";
export const RECEIVE_COMPLETE = "RECEIVE_COMPLETE";
export const REMOVE_COMPLETE = "REMOVE_COMPLETE";
export const CLEAR_COMPLETES = "CLEAR_COMPLETES";

// Regular action creators

export const receiveAllCompletes = (completes) => {
  return {
    type: RECEIVE_ALL_COMPLETES,
    completes,
  };
};

export const receiveTaskCompletes = (completes) => {
  return {
    type: RECEIVE_TASK_COMPLETES,
    completes,
  };
};

export const receiveComplete = (complete) => {
  return {
    type: RECEIVE_COMPLETE,
    complete,
  };
};

export const removeComplete = (completeId) => {
  return {
    type: REMOVE_COMPLETE,
    completeId,
  };
};

export const clearCompletes = () => {
  return {
    type: CLEAR_COMPLETES,
  };
};

// Thunk action creators

export const getAllCompletes = () => (dispatch) => {
  return CompleteApiUtil.getCompletes()
    .then((completes) => dispatch(receiveAllCompletes(completes)))
    .catch((err) => console.log(err));
};

export const getTaskCompletes = (taskId) => (dispatch) => {
  return CompleteApiUtil.getTaskCompletes(taskId)
    .then((completes) => dispatch(receiveTaskCompletes(completes)))
    .catch((err) => console.log(err));
};

export const createComplete = (complete) => (dispatch) => {
  return CompleteApiUtil.createComplete(complete)
    .then((complete) => dispatch(receiveComplete(complete)))
    .catch((err) => console.log(err));
};

export const deleteComplete = (completeId) => (dispatch) => {
  return CompleteApiUtil.deleteComplete(completeId)
    .then(() => dispatch(removeComplete(completeId)))
    .catch((err) => console.log(err));
};
