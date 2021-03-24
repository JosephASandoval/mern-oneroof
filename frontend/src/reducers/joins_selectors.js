export const joinSelector = (state, ownProps) => {
  if (state.session.isAuthenticated === false) {
    return null;
  }

  let arr = Object.values(state.entities.joins);
  let res = [];
  arr.forEach((obj) => {
    if (
      obj.meetingId === ownProps.meeting._id &&
      obj.joinerId === state.session.currentUser.user._id
    ) {
      res.push(obj);
    }
  });
  return res[0];
};

export const joinSelector2 = (state, ownProps) => {
  if (state.session.isAuthenticated === false) {
    return null;
  }

  let arr = Object.values(state.entities.joins);
  let res = [];
  arr.forEach((obj) => {
    if (
      obj.meetingId === ownProps &&
      obj.joinerId === state.session.currentUser.user._id
    ) {
      res.push(obj);
    }
  });
  return res[0];
};

export const countSelector = (state) => {
  let arr = Object.values(state.entities.joins);
  let res = { meetingId: 0 };
  arr.forEach((obj) => {
    if (res[obj.meetingId] === undefined) {
      res[obj.meetingId] = 1;
    } else {
      res[obj.meetingId] += 1;
    }
  });
  return res;
};

export const meetingSelector = (state) => {
  if (state.session.currentUser.user === undefined) {
    return null;
  }

  let arr = Object.values(state.entities.joins);
  let res = [];
  arr.forEach((obj) => {
    if (obj.joinerId === state.session.currentUser.user._id) {
      res.push(obj);
    }
  });

  let meetingList = [];
  res.forEach((id) => {
    meetingList.push(id.meetingId);
  });

  let arr2 = Object.values(state.entities.meetings);
  let result = [];
  arr2.forEach((pojo) => {
    if (meetingList.includes(pojo._id)) {
      result.push(pojo);
    }
  });

  return result;
};
