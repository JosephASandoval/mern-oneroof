import axios from 'axios';

export const getExpenses = () => {
  return axios.get('/api/expenses')
};

export const getUserExpenses = id => {
  return axios.get(`/api/expenses/user/${id}`)
};

export const writeExpense = data => {
  return axios.post('/api/expenses/', data)
};

export const deleteExpense = (id) => {
  return axios.delete(`/api/expenses/${id}`);
};