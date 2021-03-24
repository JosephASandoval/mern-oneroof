import { connect } from "react-redux";
import Chores from "./chores";
import { getTaskUsingCategory } from "../../actions/task_actions";

const mapStateToProps = (state) => {
  return {
    categoryTasks: state.entities.categoryTasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTaskUsingCategory: (categoryName) =>
      dispatch(getTaskUsingCategory(categoryName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chores);
