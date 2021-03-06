import { connect } from 'react-redux';
import { fetchUserHouses } from '../../actions/house_actions';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    houses: Object.values(state.houses.user),
    posts: Object.values(state.posts.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserHouses: id => dispatch(fetchUserHouses(id)),
    fetchUserPosts: id => dispatch(fetchUserPosts(id)),
    deletePost: post => dispatch(deletePost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
