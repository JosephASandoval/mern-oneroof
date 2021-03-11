import { connect } from 'react-redux';
import ChoreList from './chore_list';

// Actions
import { fetchAllChores, composeChore, deleteChore } from '../../actions/chore_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    chores: Object.values(state.chores.all)
  }
};

const mapDispatchToProps = dispatch => ({
  composeChore: data => dispatch(composeChore(data)),
  fetchAllChores: () => dispatch(fetchAllChores()),
  deleteChore: choreId => dispatch(deleteChore(choreId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreList);
