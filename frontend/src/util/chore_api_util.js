import axios from 'axios';

export const getChores = () => {
  return axios.get('/api/chores')
};

export const getUserChores = id => {
  return axios.get(`/api/chores/user/${id}`)
};

export const writeChore = data => {
  return axios.post('/api/chores/', data)
}

export const deleteChore = id => {
  return axios.get(`/api/chores/user/${id}`)
}