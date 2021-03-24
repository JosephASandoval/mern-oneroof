import axios from "axios";

export const uploadPhoto = (data) => {
  return axios.post("/api/photos/upload", data);
};

export const getPhotos = () => {
  return axios.get("/api/photos");
};

export const getPhoto = (photoId) => {
  return axios.get(`/api/photos/${photoId}`);
};

export const deletePhoto = (photoId) => {
  return axios.delete(`/api/photos/delete/${photoId}`);
};
