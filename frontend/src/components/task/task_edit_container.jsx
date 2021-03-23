import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getUserTasks,
  updateTask,
  deleteTask,
  getTasks,
} from "../../actions/task_actions";
import TaskEdit from "./task_edit";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser.user,
    task: state.entities.tasks[ownProps.match.params.taskId],
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    getUserTasks: (authorId) => dispatch(getUserTasks(authorId)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    getTasks: () => dispatch(getTasks()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProp)(TaskEdit)
);
