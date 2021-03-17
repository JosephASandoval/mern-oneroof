import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ImageErrorsReducer from "./image_error_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  imageErrors: ImageErrorsReducer,
});
