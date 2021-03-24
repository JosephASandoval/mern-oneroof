import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    isAuthenticated: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
