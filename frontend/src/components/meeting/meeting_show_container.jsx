import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting,
} from "../../actions/meeting_actions";
import MeetingShow from "./meeting_show";
import { joinSelector2 } from "../../reducers/joins_selectors";
import { createJoin, deleteJoin, getJoins } from "../../actions/join_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    meeting: state.entities.meetings[ownProps.match.params.meetingId],
    meetingId: ownProps.match.params.meetingId,
    joinedMeeting: joinSelector2(state, ownProps.match.params.meetingId),
    joins: state.entities.joins,
    meetings: state.entities.meetings,
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: () => dispatch(getMeetings()),
    getMeeting: (meetingId) => dispatch(getMeeting(meetingId)),
    updateMeeting: (meeting) => dispatch(updateMeeting(meeting)),
    deleteMeeting: (meetingId) => dispatch(deleteMeeting(meetingId)),
    createJoin: (join) => dispatch(createJoin(join)),
    getJoins: () => dispatch(getJoins()),
    deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MeetingShow)
);
