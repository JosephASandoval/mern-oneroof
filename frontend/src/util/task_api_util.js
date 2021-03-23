import axios from "axios";

export const getTasks = () => {
  return axios.get(`/api/tasks`);
};

export const getUserTasks = (authorId) => {
  return axios.get(`/api/tasks/author/${authorId}`);
};

export const getTask = (taskId) => {
  return axios.get(`/api/tasks/${taskId}`);
};

export const createTask = (task) => {
  return axios.post(`/api/tasks/new`, task);
};

export const updateTask = (task) => {
  return axios.patch(`/api/tasks/edit/${task._id}`, task);
};

export const deleteTask = (taskId) => {
  return axios.delete(`/api/tasks/${taskId}`);
};

export const getTaskCategory = (categoryName) => {
  return axios.get(`/api/tasks/category/${categoryName}`);
};
