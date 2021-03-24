import { connect } from "react-redux";
import { createMeeting, clearErrors } from "../../actions/meeting_actions";
import MeetingForm from "./meeting_create";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser.user,
    errors: state.errors.meetings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMeeting: (meeting) => dispatch(createMeeting(meeting)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingForm);
