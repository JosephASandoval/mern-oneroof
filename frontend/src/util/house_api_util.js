import axios from 'axios';

export const getHouses = () => {
  return axios.get('/api/houses')
};

export const getUserHouses = id => {
  return axios.get(`/api/houses/user/${id}`)
};

export const makeHouse = data => {
  return axios.post('/api/houses/', data)
}