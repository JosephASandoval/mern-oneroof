import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import houses from "./houses_reducer";
import posts from "./posts_reducer";
import chores from "./chores_reducer";
import photos from "./photo_reducer";
import expenses from "./expenses_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  houses,
  posts,
  chores,
  photos,
  expenses
});

export default RootReducer;