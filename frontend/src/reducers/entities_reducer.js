import { combineReducers } from "redux";
import housesReducer from "./houses_reducer";
import postsReducer from "./posts_reducer";
import choresReducer from "./chores_reducer";
import photosReducer from "./photo_reducer";
import expensesReducer from "./expenses_reducer";
import taskReducer from "./task_reducer";
import usersReducer from "./users_reducer";
import eventsReducer from "./events_reducer";
import commentsReducer from "./comments_reducer";
import joinsReducer from "./joins_reducer";
import categoryTasksReducer from "./category_tasks_reducer";
import completesReducer from "./completes_reducer";

const entitiesReducer = combineReducers({
  houses: housesReducer,
  posts: postsReducer,
  chores: choresReducer,
  photos: photosReducer,
  expenses: expensesReducer,
  tasks: taskReducer,
  users: usersReducer,
  events: eventsReducer,
  comments: commentsReducer,
  joins: joinsReducer,
  categoryTasks: categoryTasksReducer,
  completes: completesReducer,
});

export default entitiesReducer;
