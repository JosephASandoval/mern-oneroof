import { connect } from "react-redux";
import { createTask, clearErrors } from "../../actions/task_actions";
import TaskForm from "./task_form";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser.user,
    instructions: [],
    errors: state.errors.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
