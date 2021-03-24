import { connect } from "react-redux";
import {
  getComments,
  getTaskComments,
  createComment,
  updateComment,
  deleteComment,
  clearComments,
} from "../../actions/comment_actions";
import CommentIndex from "./comment_index";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    comments: Object.values(state.entities.comments),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: () => dispatch(getComments()),
    getTaskComments: (taskId) => dispatch(getTaskComments(taskId)),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    clearComments: () => dispatch(clearComments()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
);
