import axios from "axios";

// get all posts
export const getPosts = () => {
  return axios.get("/api/posts");
};

// get all users posts
export const getUserPosts = (id) => {
  return axios.get(`/api/posts/user/${id}`);
};

// get an individual post
export const getPost = (id) => {
  return axios.get(`/api/posts/${id}`);
};

// create a post
export const writePost = (data) => {
  return axios.post("/api/posts/", data);
};

// update a post
export const changePost = (data) => {
  return axios.patch(`/api/posts/${data.id}`, data);
};

// delete a post
export const destroyPost = (id) => {
  return axios.delete(`/api/posts/${id}`);
};
