import { connect } from 'react-redux';
import ChoreList from './chore_list';

// Actions
import { fetchChores } from '../../actions/chore_actions';

const mapStateToProps = state => ({
  chores: Object.values(state.chores.all)
});

const mapDispatchToProps = dispatch => ({
  fetchChores: () => dispatch(fetchChores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreList);
