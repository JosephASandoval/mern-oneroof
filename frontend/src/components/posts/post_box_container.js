import connect from 'react-redux';
import { removePost } from '../../actions/post_actions';
import PostBox from './post_box';

const mSTP = state => {
  return {
    session: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    removePost: post => dispatch(removePost(post))
  };
};

export default connect(mSTP, mDTP)(PostBox);