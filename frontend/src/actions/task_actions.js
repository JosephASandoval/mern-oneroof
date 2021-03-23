import * as TaskApiUtil from "../util/task_api_util";

export const RECEIVE_ALL_TASKS_USING_CATEGORY =
  "RECEIVE_ALL_TASKS_USING_CATEGORY";
export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_USER_TASKS = "RECEIVE_USER_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
export const CLEAR_TASK_ERRORS = "CLEAR_TASK_ERRORS";
export const CLEAR_TASK = "CLEAR_TASK";

export const receiveAllTasksUsingCategory = (tasks) => {
  return {
    type: RECEIVE_ALL_TASKS_USING_CATEGORY,
    tasks,
  };
};

export const receiveAllTasks = (tasks) => {
  return {
    type: RECEIVE_ALL_TASKS,
    tasks,
  };
};

export const receiveUserTasks = (tasks) => {
  return {
    type: RECEIVE_USER_TASKS,
    tasks,
  };
};

export const receiveTask = (task) => {
  return {
    type: RECEIVE_TASK,
    task,
  };
};

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    taskId,
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_TASK_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_TASK_ERRORS,
});

export const clearTasks = () => ({
  type: CLEAR_TASK,
});

// Thunk action creators

export const getTasks = () => (dispatch) => {
  return TaskApiUtil.getTasks()
    .then((tasks) => dispatch(receiveAllTasks(tasks)))
    .catch((err) => console.log(err));
};

export const getTaskUsingCategory = (categoryName) => (dispatch) => {
  return TaskApiUtil.getTaskCategory(categoryName)
    .then((tasks) => dispatch(receiveAllTasksUsingCategory(tasks)))
    .catch((err) => console.log(err));
};

export const getUserTasks = (userId) => (dispatch) => {
  return TaskApiUtil.getUserTasks(userId)
    .then((tasks) => dispatch(receiveUserTasks(tasks)))
    .catch((err) => console.log(err));
};

export const getTask = (taskId) => (dispatch) => {
  return TaskApiUtil.getTask(taskId)
    .then((task) => dispatch(receiveTask(task)))
    .catch((err) => console.log(err));
};

export const createTask = (task) => (dispatch) => {
  return TaskApiUtil.createTask(task)
    .then((task) => dispatch(receiveTask(task)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const updateTask = (task) => (dispatch) => {
  return TaskApiUtil.updateTask(task)
    .then((task) => dispatch(receiveTask(task)))
    .catch((err) => console.log(err));
};

export const deleteTask = (taskId) => (dispatch) => {
  return TaskApiUtil.deleteTask(taskId)
    .then(() => dispatch(removeTask(taskId)))
    .catch((err) => console.log(err));
};
