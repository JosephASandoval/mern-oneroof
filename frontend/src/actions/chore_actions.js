import { getChores, getUserChores, writeChore } from '../util/chore_api_util';

export const RECEIVE_CHORES = "RECEIVE_CHORES";
export const RECEIVE_USER_CHORES = "RECEIVE_USER_CHORES";
export const RECEIVE_NEW_CHORE = "RECEIVE_NEW_CHORE";

export const receiveChores = chores => ({
  type: RECEIVE_CHORES,
  chores
});

export const receiveUserChores = chores => ({
  type: RECEIVE_USER_CHORES,
  chores
});

export const receiveNewChore = chore => ({
  type: RECEIVE_NEW_CHORE,
  chore
})

export const fetchChores = () => dispatch => (
  getChores()
    .then(chores => dispatch(receiveChores(chores)))
    .catch(err => console.log(err))
);

export const fetchUserChores = id => dispatch => (
  getUserChores(id)
    .then(chores => dispatch(receiveUserChores(chores)))
    .catch(err => console.log(err))
);

export const composeChore = data => dispatch => (
  writeChore(data)
    .then(chore => dispatch(receiveNewCjpre(chore)))
    .catch(err => console.log(err))
);