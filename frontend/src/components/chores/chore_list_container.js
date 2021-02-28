import { connect } from 'react-redux';
import ChoreList from './chore_list';

// Actions
import { fetchAllChores, composeChore, removeChore } from '../../actions/chore_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    chores: Object.values(state.chores.all)
  }
};

const mapDispatchToProps = dispatch => ({
  composeChore: data => dispatch(composeChore(data)),
  fetchAllChores: () => dispatch(fetchAllChores()),
  removeChore: chore => dispatch(removeChore(chore))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreList);
