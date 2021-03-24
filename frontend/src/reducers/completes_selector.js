export const completeSelector = (state) => {
  let arr = Object.values(state.entities.completes);
  let res = [];
  arr.forEach((obj) => {
    if (obj.completerId === state.session.currentUser.user._id) {
      res.push(obj);
    }
  });

  let completeList = [];
  res.forEach((id) => {
    completeList.push(id.taskId);
  });

  let arr2 = Object.values(state.entities.tasks);
  let result = [];
  arr2.forEach((pojo) => {
    if (completeList.includes(pojo._id)) {
      result.push(pojo);
    }
  });

  return result;
};
