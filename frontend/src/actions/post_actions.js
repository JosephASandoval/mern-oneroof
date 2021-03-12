import * as PostAPIUtil from "../util/post_api_util";

export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";


export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receiveUserPosts = (posts) => ({
  type: RECEIVE_USER_POSTS,
  posts,
});

export const receiveNewPost = (post) => ({
  type: RECEIVE_NEW_POST,
  post,
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId,
});


// thunk actions
export const fetchPosts = () => (dispatch) => {
  return PostAPIUtil.getPosts()
    .then((posts) => dispatch(receivePosts(posts)))
    .catch((err) => console.log(err));
};

export const fetchUserPosts = (id) => (dispatch) => {
  return PostAPIUtil.getUserPosts(id)
    .then((posts) => dispatch(receiveUserPosts(posts)))
    .catch((err) => console.log(err));
};

export const composePost = (data) => (dispatch) => {
  return PostAPIUtil.writePost(data)
    .then((post) => dispatch(receiveNewPost(post)))
    .catch((err) => console.log(err));
};

export const deletePost = (postId) => (dispatch) => {
  return PostAPIUtil.destroyPost(postId)
    .then(() => dispatch(removePost(postId)))
    .catch((err) => console.log(err));
};

export const updatePost = (data) => (dispatch) => {
  return PostAPIUtil.changePost(data)
    .then((post) => dispatch(receivePost(post)))
    .catch((err) => console.log(err));
};
