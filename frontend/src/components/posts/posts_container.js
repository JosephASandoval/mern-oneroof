import { startSession } from 'mongoose';
import { connect } from 'react-redux';
import { fetchPosts, removePost } from '../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    posts: Object.values(state.posts.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    removePost: post => dispatch(removePost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
