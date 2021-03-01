import { combineReducers } from "redux";
import houses from "./houses_reducer";
import posts from "./posts_reducer";
import chores from "./chores_reducer";
import photos from "./photo_reducer";

const entitiesReducer = combineReducers({
  houses,
  posts,
  chores,
  photos,
});

export default entitiesReducer;
