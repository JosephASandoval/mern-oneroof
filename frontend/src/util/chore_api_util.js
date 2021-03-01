import axios from 'axios';

export const getChores = () => {
  return axios.get('/api/chores')
};

export const getUserChores = id => {
  return axios.get(`/api/chores/${id}`)
};

export const writeChore = data => {
  return axios.post('/api/chores/', data)
}

export const deleteChore = choreId => {
  return axios.delete(`/api/chores/${choreId}`)
}