import { connect } from "react-redux";
import Chat from "./chat";

const mSTP = (state) => {
  const name = state.session.currentUser.username;
  return {
    name,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(Chat);
