import axios from "axios";

export const fetchUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};

export const fetchUsers = () => {
  return axios.get("/api/users/");
};

export const updateUser = (user) => {
  return axios.patch(`/api/users/edit/${user._id}`, user);
};

export const join = (meeting) => {
  return axios.post(`/api/users/${meeting}/join`);
};

export const unjoin = (meeting) => {
  return axios.delete(`/api/users/${meeting}/unjoin`);
};
