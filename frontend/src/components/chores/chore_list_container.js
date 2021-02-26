import { connect } from 'react-redux';
import ChoreList from './chore_list';

// Actions
import { fetchUserChores } from '../../actions/chore_actions';

const mapStateToProps = state => ({
  chores: Object.values(state.chores.all)
});

const mapDispatchToProps = dispatch => ({
  fetchUserChores: (id) => dispatch(fetchUserChores(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreList);
