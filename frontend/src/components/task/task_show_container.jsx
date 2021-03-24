import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getTasks,
  getTask,
  getUserTasks,
  updateTask,
  deleteTask,
} from "../../actions/task_actions";
import { fetchUsers } from "../../actions/user_actions";
import {
  getAllCompletes,
  getTaskCompletes,
  createComplete,
  deleteComplete,
  clearCompletes,
} from "../../actions/complete_actions";
import TaskShow from "./task_show";

const mapStateToProps = (state, ownProps) => {
  const task = state.entities.tasks[ownProps.match.params.taskId];
  return {
    currentUser: state.session.currentUser,
    task: task,
    authors: state.entities.users,
    taskId: ownProps.match.params.taskId,
    completes: state.entities.completes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(getTasks()),
    getTask: (taskId) => dispatch(getTask(taskId)),
    getUserTasks: (authorId) => dispatch(getUserTasks(authorId)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    fetchUsers: () => dispatch(fetchUsers()),
    getTaskCompletes: (taskId) => dispatch(getTaskCompletes(taskId)),
    createComplete: (complete) => dispatch(createComplete(complete)),
    deleteComplete: (completeId) => dispatch(deleteComplete(completeId)),
    getAllCompletes: () => dispatch(getAllCompletes()),
    clearCompletes: () => dispatch(clearCompletes()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TaskShow)
);
