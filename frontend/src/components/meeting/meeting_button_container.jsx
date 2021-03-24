import { connect } from "react-redux";
import MeetingButton from "./meeting_button";
import {
  createJoin,
  deleteJoin,
  getJoins,
  getMeetingJoins,
} from "../../actions/join_actions";
import { joinSelector } from "../../reducers/joins_selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser.user,
    joins: state.entities.joins,
    meetings: state.entities.meetings,
    joinedMeeting: joinSelector(state, ownProps),
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    createJoin: (join) => dispatch(createJoin(join)),
    deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
    getJoins: () => dispatch(getJoins()),
    getMeetingJoins: (meetingId) => dispatch(getMeetingJoins(meetingId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(MeetingButton);
