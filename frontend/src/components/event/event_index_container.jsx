import { connect } from "react-redux";
import EventIndex from "./event_index";
import {
  createJoin,
  deleteJoin,
  getJoins,
  getEventJoins,
} from "../../actions/join_actions";
import {
  getEvents,
  getUserEvents,
  updateEvent,
} from "../../actions/event_actions";
import { fetchUsers } from "../../actions/user_actions";
import { countSelector } from "../../reducers/joins_selectors";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    events: state.entities.events,
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
    getEvents: () => dispatch(getEvents()),
    getUserEvents: (userId) => dispatch(getUserEvents(userId)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    createJoin: (join) => dispatch(createJoin(join)),
    deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
    getJoins: () => dispatch(getJoins()),
    getEventJoins: (eventId) => dispatch(getEventJoins(eventId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(EventIndex);
