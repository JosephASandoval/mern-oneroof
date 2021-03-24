import { connect } from "react-redux";
import { getMeeting, getMeetings } from "../../actions/meeting_actions";
import { fetchUsers } from "../../actions/user_actions";
import HomePageMeeting from "./home_page_meeting";
import { closeModal, openModal } from "../../actions/modal_actions";
import { countSelector } from "../../reducers/joins_selectors";
import {
  createJoin,
  deleteJoin,
  getJoins,
  getMeetingJoins,
} from "../../actions/join_actions";
import { joinSelector } from "../../reducers/joins_selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    meetings: state.entities.meetings,
    users: state.entities.users,
    count: countSelector(state),
    joins: state.entities.joins,
    joinedMeeting: joinSelector(state, ownProps),
    auth: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: () => dispatch(getMeetings()),
    getMeeting: (meetingId) => dispatch(getMeeting(meetingId)),
    fetchUsers: () => dispatch(fetchUsers()),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    createJoin: (join) => dispatch(createJoin(join)),
    deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
    getJoins: () => dispatch(getJoins()),
    getMeetingJoins: (meetingId) => dispatch(getMeetingJoins(meetingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageMeeting);
