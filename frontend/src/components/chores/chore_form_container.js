import { connect } from 'react-redux';
import ChoreForm from './chore_form';
import { composeChore } from '../../actions/chore_actions';

const mSTP = state => {
  return {
    currentUser: state.session.user,
    // newChore: state.chores.new
    chores: Object.values(state.chores.all)
  }
}

const mDTP = dispatch => {
  return {
    composeChore: data => dispatch(composeChore(data))
  }
}

export default connect(mSTP, mDTP)(ChoreForm);