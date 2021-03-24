import { combineReducers } from "redux";
import photosReducer from "./photo_reducer";
import taskReducer from "./task_reducer";
import usersReducer from "./users_reducer";
import meetingsReducer from "./meetings_reducer";
import commentsReducer from "./comments_reducer";
import joinsReducer from "./joins_reducer";
import categoryTasksReducer from "./category_tasks_reducer";
import completesReducer from "./completes_reducer";

const entitiesReducer = combineReducers({
  photos: photosReducer,
  tasks: taskReducer,
  users: usersReducer,
  meetings: meetingsReducer,
  comments: commentsReducer,
  joins: joinsReducer,
  categoryTasks: categoryTasksReducer,
  completes: completesReducer,
});

export default entitiesReducer;
