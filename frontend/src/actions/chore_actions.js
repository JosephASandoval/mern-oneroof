import * as ChoreAPIUtil from '../util/chore_api_util';

export const RECEIVE_CHORES = "RECEIVE_CHORES";
export const RECEIVE_USER_CHORES = "RECEIVE_USER_CHORES";
export const RECEIVE_NEW_CHORE = "RECEIVE_NEW_CHORE";
export const REMOVE_CHORE = 'REMOVE_CHORE';
export const RECEIVE_FILTERED_CHORES = 'RECEIVE_FILTERED_CHORES'

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

export const removeChore = choreId => ({
  type: REMOVE_CHORE,
  choreId
})

export const receiveFilteredChores = (priority, chores) => {
  return {
    type: RECEIVE_FILTERED_CHORES,
    filteredChores: priority === 'All' ? (chores.data) : (chores.data.filter(chore => chore.priority === priority))
  }
  }
;

// thunk actions
export const fetchAllChores = () => dispatch => (
  ChoreAPIUtil.getChores()
    .then(chores => dispatch(receiveChores(chores)))
    .catch(err => console.log(err))
);

export const fetchFilteredChores = (priority) => dispatch => {
  return ChoreAPIUtil.getChores()
    .then(chores => {
      return dispatch(receiveFilteredChores(priority, chores))
    })
    .catch(err => console.log(err))
}
  


export const fetchUserChores = id => dispatch => (
  ChoreAPIUtil.getUserChores(id)
    .then(chores => dispatch(receiveUserChores(chores)))
    .catch(err => console.log(err))
);

export const composeChore = data => dispatch => (
  ChoreAPIUtil.writeChore(data)
    .then(chore => dispatch(receiveNewChore(chore)))
    .catch(err => console.log(err))
);

export const deleteChore = choreId => dispatch => (
  ChoreAPIUtil.deleteChore(choreId)
    .then(() => dispatch(removeChore(choreId)))
    .catch(err => console.log(err))
)