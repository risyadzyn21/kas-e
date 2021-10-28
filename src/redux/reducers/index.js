import userReducer from "./UserReducer";
import { combineReducers } from "redux";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  userReducer,
  profileReducer,
});

export default rootReducer;
