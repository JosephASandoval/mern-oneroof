import { connect } from "react-redux";
import EditMeeting from "./meeting_edit";
import {
  getUserMeetings,
  updateMeeting,
  clearErrors,
  getMeetings,
} from "../../actions/meeting_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser.user,
    meetingId: ownProps.match.params.meetingId,
    meeting: state.entities.meetings[ownProps.match.params.meetingId],
    errors: state.errors.meetings,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    getUserMeetings: (userId) => dispatch(getUserMeetings(userId)),
    updateMeeting: (meeting) => dispatch(updateMeeting(meeting)),
    clearErrors: () => dispatch(clearErrors()),
    getMeetings: () => dispatch(getMeetings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(EditMeeting);
