import { combineReducers } from "redux";
import user from "./user";
import toilet from "./toilet";

const rootReducer = combineReducers({
  user,
  toilet
});

export default rootReducer;
