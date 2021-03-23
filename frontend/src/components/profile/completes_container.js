import { connect } from "react-redux";
import Completes from "./completes";
import { completeSelector } from "../../reducers/completes_selector";
import { getAllCompletes } from "../../actions/complete_actions";
import { getTasks } from "../../actions/task_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser.user,
    tasks: state.entities.tasks,
    tasksCompleted: completeSelector(state),
    completes: state.entities.completes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCompletes: () => dispatch(getAllCompletes()),
    getTasks: () => dispatch(getTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Completes);
