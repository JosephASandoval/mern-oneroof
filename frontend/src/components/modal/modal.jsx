import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import HomePageModalLoginContainer from "./home_page_modal_login_container";
import MeetingLoginContainer from "../meeting/meeting_modal_login_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "LogIn":
      component = <HomePageModalLoginContainer />;
      break;
    case "meetingLogIn":
      component = <MeetingLoginContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
