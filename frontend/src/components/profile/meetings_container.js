import { connect } from "react-redux";
import { getMeetings, getUserMeetings } from "../../actions/meeting_actions";
import { fetchUsers } from "../../actions/user_actions";
import Meetings from "./meetings";
import { countSelector, meetingSelector } from "../../reducers/joins_selectors";
import { getJoins, getUserJoins } from "../../actions/join_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser.user,
    meetings: state.entities.meetings,
    user: state.entities.users[state.session.currentUser.user._id],
    users: state.entities.users,
    count: countSelector(state),
    meetingJoined: meetingSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: () => dispatch(getMeetings()),
    getUserMeetings: (userId) => dispatch(getUserMeetings(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    getJoins: () => dispatch(getJoins()),
    getUserJoins: (userId) => dispatch(getUserJoins(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);
