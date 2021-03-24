import {
  RECEIVE_MEETING_ERRORS,
  RECEIVE_MEETING,
  CLEAR_MEETING_ERRORS,
} from "../actions/meeting_actions";

const _nullErrors = [];

const MeetingErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEETING_ERRORS:
      return action.errors;
    case RECEIVE_MEETING:
      return _nullErrors;
    case CLEAR_MEETING_ERRORS:
      return [];
    default:
      return state;
  }
};

export default MeetingErrorsReducer;
