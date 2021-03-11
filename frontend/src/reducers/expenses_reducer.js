import { RECEIVE_EXPENSES, RECEIVE_USER_EXPENSES, RECEIVE_NEW_EXPENSE, REMOVE_EXPENSE } from '../actions/expense_actions';
  
  const expensesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_EXPENSES:
        newState.all = action.expenses.data;
        return newState;
      case RECEIVE_USER_EXPENSES:
        newState.user = action.expenses.data;
        return newState;
      case RECEIVE_NEW_EXPENSE:
        newState.all.unshift(action.expense.data)
        return newState;
      case REMOVE_EXPENSE:
        let expenseToDelete = newState.all.filter(expense => {
          return expense._id === action.expenseId
        })[0];
        let idx = newState.all.indexOf(expenseToDelete)
        if (idx !== -1) {
          newState.all.splice(idx, 1)
        }
        return newState;
      default:
        return state;
    }
  };
  
  export default expensesReducer;