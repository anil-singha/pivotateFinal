import counterReducer from "./counter";
import currentUser from "./currentUser";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducer,
  currentUser,
});

export default allReducers;
