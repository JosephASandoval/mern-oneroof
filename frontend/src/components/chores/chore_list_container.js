import { connect } from 'react-redux';
import ChoreList from './chore_list';

// Actions
import { fetchAllChores } from '../../actions/chore_actions';

const mapStateToProps = state => ({
  currentUser: state.session.user,
  chores: Object.values(state.chores.all)
});

const mapDispatchToProps = dispatch => ({
  fetchAllChores: () => dispatch(fetchAllChores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreList);
