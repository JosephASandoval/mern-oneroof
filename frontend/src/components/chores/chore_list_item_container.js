import { connect } from 'react-redux';
import { removeChore } from '../../actions/chore_actions';
import ChoreListItem from './chore_list_item';

const mSTP = state => {
  return {
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    removeChore: chore => dispatch(removeChore(chore))
  };
};

export default connect(mSTP, mDTP)(ChoreListItem);