import { connect } from 'react-redux';
import { fetchExpenses, destroyExpense } from '../../actions/expense_actions';
import Expenses from './expenses';

const mapStateToProps = (state) => {
  return {
    expenses: Object.values(state.expenses.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExpenses: () => dispatch(fetchExpenses()),
    destroyExpense: expenseId => dispatch(destroyExpense(expenseId)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
