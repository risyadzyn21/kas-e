import userReducer from "./UserReducer";
import { combineReducers } from "redux";
import CreateSafeReducer from "./CreateSafeReducer";

const rootReducer = combineReducers({
  userReducer, CreateSafeReducer,
});

export default rootReducer;