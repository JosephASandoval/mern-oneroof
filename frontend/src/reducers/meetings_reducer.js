import {
  RECEIVE_ALL_MEETINGS,
  RECEIVE_USER_MEETINGS,
  RECEIVE_MEETING,
  REMOVE_MEETING,
} from "../actions/meeting_actions";

const meetingReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_MEETINGS:
      let i;
      for (i = 0; i < action.meetings.data.length; i++) {
        newState[action.meetings.data[i]._id] = action.meetings.data[i];
      }
      return newState;
    case RECEIVE_USER_MEETINGS:
      newState.user = action.meetings.data;
      return newState;
    case RECEIVE_MEETING:
      return Object.assign(newState, {
        [action.meeting.data._id]: action.meeting.data,
      });
    case REMOVE_MEETING:
      delete newState[action.meetingId];
      return newState;
    default:
      return state;
  }
};

export default meetingReducer;
