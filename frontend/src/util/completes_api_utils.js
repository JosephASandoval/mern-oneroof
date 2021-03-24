import axios from "axios";

export const getCompletes = () => {
  return axios.get("/api/completes/");
};

export const getTaskCompletes = (taskId) => {
  return axios.get(`/api/completes/task/${taskId}`);
};

export const createComplete = (complete) => {
  return axios.post(`/api/completes/new`, complete);
};

export const deleteComplete = (completeId) => {
  return axios.delete(`/api/completes/${completeId}`);
};
