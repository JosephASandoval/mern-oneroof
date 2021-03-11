import { getExpenses, getUserExpenses, writeExpense, deleteExpense } from '../util/expense_api_util';

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_USER_EXPENSES = "RECEIVE_USER_EXPENSES";
export const RECEIVE_NEW_EXPENSE = "RECEIVE_NEW_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE EXPENSE"

export const receiveExpenses = expenses => {
  return {
  type: RECEIVE_EXPENSES,
  expenses
};
}

export const receiveUserExpenses = expenses => ({
  type: RECEIVE_USER_EXPENSES,
  expenses
});

export const receiveNewExpense = expense => ({
  type: RECEIVE_NEW_EXPENSE,
  expense
});

export const removeExpense = (expenseId) => {
  return {
    type: REMOVE_EXPENSE,
    expenseId
  }
}

export const fetchExpenses = () => dispatch => {
  return getExpenses()
    .then(expenses => dispatch(receiveExpenses(expenses)))
    .catch(err => console.log(err))
};
    


export const fetchUserExpenses = id => dispatch => (
  getUserExpenses(id)
    .then(expenses => dispatch(receiveUserExpenses(expenses)))
    .catch(err => console.log(err))
);

export const createExpense = data => dispatch => (
  writeExpense(data)
    .then(expense => dispatch(receiveNewExpense(expense)))
    .catch(err => console.log(err))
);

export const destroyExpense = expenseId => dispatch => {
  return deleteExpense(expenseId)
    .then(() => dispatch(removeExpense(expenseId)))
};