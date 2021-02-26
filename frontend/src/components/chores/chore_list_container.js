import { connect } from 'react-redux';
import ChoreList from './chore_list';

// Actions
import { fetchAllChores, composeChore } from '../../actions/chore_actions';

const mapStateToProps = state => {
  debugger
  return {
    currentUser: state.session.user,
    chores: Object.values(state.chores.all)
  }
};

const mapDispatchToProps = dispatch => ({
  composeChore: data => dispatch(composeChore(data)),
  fetchAllChores: () => dispatch(fetchAllChores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreList);
