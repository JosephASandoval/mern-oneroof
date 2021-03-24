import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import TaskErrorsReducer from "./tasks_errors_reducer";
import MeetingErrorsReducer from "./meetings_errors_reducer";
import JoinErrorsrReducer from "./joins_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  tasks: TaskErrorsReducer,
  meetings: MeetingErrorsReducer,
  joins: JoinErrorsrReducer,
});
