import { connect } from "react-redux";
import MeetingIndex from "./meeting_index";
import {
  createJoin,
  deleteJoin,
  getJoins,
  getMeetingJoins,
} from "../../actions/join_actions";
import {
  getMeetings,
  getUserMeetings,
  updateMeeting,
} from "../../actions/meeting_actions";
import { fetchUsers } from "../../actions/user_actions";
import { countSelector } from "../../reducers/joins_selectors";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    meetings: state.entities.meetings,
    users: state.entities.users,
    auth: state.session.currentUser,
    joins: state.entities.joins,
    count: countSelector(state),
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    getMeetings: () => dispatch(getMeetings()),
    getUserMeetings: (userId) => dispatch(getUserMeetings(userId)),
    updateMeeting: (meeting) => dispatch(updateMeeting(meeting)),
    createJoin: (join) => dispatch(createJoin(join)),
    deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
    getJoins: () => dispatch(getJoins()),
    getMeetingJoins: (meetingId) => dispatch(getMeetingJoins(meetingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(MeetingIndex);
