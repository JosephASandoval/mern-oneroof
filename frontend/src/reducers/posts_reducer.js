import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST,
  RECEIVE_POST,
  REMOVE_POST,
} from "../actions/post_actions";

const PostsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      newState.all = action.posts.data;
      return newState;
    case RECEIVE_USER_POSTS:
      newState.user = action.posts.data;
      return newState;
    case RECEIVE_NEW_POST:
      newState.all.unshift(action.post.data)
      return newState;
    case RECEIVE_POST:
      newState.all.push(action.post.data);
      return newState;
    case REMOVE_POST:
      let postToDelete = newState.all.filter(post => {
        return post._id === action.postId
      })[0];
      let idx = newState.all.indexOf(postToDelete);
      if (idx !== -1) newState.all.splice(idx, 1);
      if (newState.user.includes(postToDelete)) {
        let userPostToDelete = newState.user.filter(post => {
        return post._id === action.postId
      })[0];
      let idx2 = newState.user.indexOf(userPostToDelete);
      if (idx2 !== -1) newState.user.splice(idx2, 1);
      }
      
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
