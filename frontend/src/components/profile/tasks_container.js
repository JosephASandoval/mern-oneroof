import { connect } from "react-redux";
import { getUserTasks, getTasks, clearTasks } from "../../actions/task_actions";
import Tasks from "./tasks";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser.user,
    tasks: state.entities.tasks,
    tasksPosted: state.entities.users.tasksPosted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserTasks: (userId) => dispatch(getUserTasks(userId)),
    clearTasks: () => dispatch(clearTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
