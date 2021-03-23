import axios from "axios";

export const getComments = () => {
  return axios.get(`/api/comments`);
};

export const getTaskComments = (taskId) => {
  return axios.get(`/api/comments/${taskId}`);
};

export const createComment = (comment) => {
  return axios.post(`/api/comments/new`, comment);
};

export const updateComment = (comment) => {
  return axios.patch(`/api/tasks/edit/${comment._id}`, comment);
};

export const deleteComment = (commentId) => {
  return axios.delete(`/api/comments/${commentId}`);
};
