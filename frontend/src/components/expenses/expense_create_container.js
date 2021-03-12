import { connect } from 'react-redux';
import { createExpense } from '../../actions/expense_actions';
import ExpenseCreate from './expense_create';

const mapStateToProps = (state) => {
  return {
    expense: {
        body: '',
        amount: ''
    },
    formType: 'Create Expense'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createExpense: (data) => dispatch(createExpense(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCreate);