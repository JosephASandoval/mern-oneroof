import axios from "axios";

export const getMeetings = () => {
  return axios.get(`/api/meetings`);
};

export const getUserMeetings = (hostId) => {
  return axios.get(`/api/meetings/host/${hostId}`);
};

export const getMeeting = (meetingId) => {
  return axios.get(`/api/meetings/${meetingId}`);
};

export const createMeeting = (meeting) => {
  return axios.post(`/api/meetings/new`, meeting);
};

export const updateMeeting = (meeting) => {
  return axios.patch(`/api/meetings/edit/${meeting._id}`, meeting);
};

export const deleteMeeting = (meetingId) => {
  return axios.delete(`/api/meetings/${meetingId}`);
};
