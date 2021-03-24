import * as MeetingApiUtil from "../util/meeting_api_utils";

export const RECEIVE_ALL_MEETINGS = "RECEIVE_ALL_MEETINGS";
export const RECEIVE_MEETING_ERRORS = "RECEIVE_MEETING_ERRORS";
export const RECEIVE_USER_MEETINGS = "RECEIVE_USER_MEETINGS";
export const RECEIVE_MEETING = "RECEIVE_MEETING";
export const REMOVE_MEETING = "REMOVE_MEETING";
export const CLEAR_MEETING_ERRORS = "CLEAR_MEETING_ERRORS";
export const JOIN = "JOIN";
export const UNJOIN = "UNJOIN";

export const receiveAllMeetings = (meetings) => {
  return {
    type: RECEIVE_ALL_MEETINGS,
    meetings,
  };
};

export const receiveUserMeetings = (meetings) => {
  return {
    type: RECEIVE_USER_MEETINGS,
    meetings,
  };
};

export const receiveMeeting = (meeting) => {
  return {
    type: RECEIVE_MEETING,
    meeting,
  };
};

export const removeMeeting = (meetingId) => {
  return {
    type: REMOVE_MEETING,
    meetingId,
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_MEETING_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_MEETING_ERRORS,
});

// thunk action creators

export const getMeetings = () => (dispatch) => {
  return MeetingApiUtil.getMeetings()
    .then((meetings) => dispatch(receiveAllMeetings(meetings)))
    .catch((err) => console.log(err));
};

export const getUserMeetings = (userId) => (dispatch) => {
  return MeetingApiUtil.getUserMeetings(userId)
    .then((meetings) => dispatch(receiveUserMeetings(meetings)))
    .catch((err) => console.log(err));
};

export const getMeeting = (meetingId) => (dispatch) => {
  return MeetingApiUtil.getMeeting(meetingId)
    .then((meeting) => dispatch(receiveMeeting(meeting)))
    .catch((err) => console.log(err));
};

export const createMeeting = (meeting) => (dispatch) => {
  return MeetingApiUtil.createMeeting(meeting)
    .then((meeting) => dispatch(receiveMeeting(meeting)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const updateMeeting = (meeting) => (dispatch) => {
  return MeetingApiUtil.updateMeeting(meeting)
    .then((meeting) => dispatch(receiveMeeting(meeting)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const deleteMeeting = (meetingId) => (dispatch) => {
  return MeetingApiUtil.deleteMeeting(meetingId)
    .then(() => dispatch(removeMeeting(meetingId)))
    .catch((err) => console.log(err));
};
