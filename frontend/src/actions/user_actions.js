import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const fetchUsers = () => (dispatch) => {
  return UserAPIUtil.fetchUsers().then((users) =>
    dispatch(receiveUsers(users))
  );
};

export const fetchUser = (userId) => (dispatch) => {
  return UserAPIUtil.fetchUser(userId).then((user) =>
    dispatch(receiveUser(user))
  );
};

export const updateUser = (userId) => (dispatch) => {
  return UserAPIUtil.updateUser(userId).then((user) =>
    dispatch(receiveUser(user))
  );
};

export const join = (event) => (dispatch) =>
  UserAPIUtil.join(event)
    .then((user) => dispatch(receiveUser(user.data)))
    .catch((err) => console.log(err));

export const unjoin = (event) => (dispatch) =>
  UserAPIUtil.unjoin(event)
    .then((user) => dispatch(receiveUser(user.data)))
    .catch((err) => console.log(err));
