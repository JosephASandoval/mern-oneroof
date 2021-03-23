import * as CommentApiutil from "../util/comment_api.utils";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_TASK_COMMENTS = "RECEIVE_TASK_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR COMMENTS";

// Regular action creators

export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments,
  };
};

export const receiveTaskComments = (comments) => {
  return {
    type: RECEIVE_TASK_COMMENTS,
    comments,
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
  };
};

export const clearComments = () => {
  return {
    type: CLEAR_COMMENTS,
  };
};

// Thunk action reactors

export const getComments = () => (dispatch) => {
  return CommentApiutil.getComments()
    .then((comments) => dispatch(receiveAllComments(comments)))
    .catch((err) => console.log(err));
};

export const getTaskComments = (taskId) => (dispatch) => {
  return CommentApiutil.getTaskComments(taskId)
    .then((comments) => dispatch(receiveTaskComments(comments)))
    .catch((err) => console.log(err));
};

export const createComment = (comment) => (dispatch) => {
  return CommentApiutil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
    .catch((err) => console.log(err));
};

export const updateComment = (comment) => (dispatch) => {
  return CommentApiutil.updateComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
    .catch((err) => console.log(err));
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentApiutil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
    .catch((err) => console.log(err));
};
