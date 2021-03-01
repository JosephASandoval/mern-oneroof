import { connect } from 'react-redux';
import { deleteChore } from '../../actions/chore_actions';
import ChoreListItem from './chore_list_item';

const mSTP = state => {
  return {
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    deleteChore: choreId => dispatch(deleteChore(choreId))
  };
};

export default connect(mSTP, mDTP)(ChoreListItem);