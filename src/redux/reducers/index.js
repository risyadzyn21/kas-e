import userReducer from "./UserReducer";
import transactionReducer from "./TransactionReducer";
import { combineReducers } from "redux";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  userReducer,
  profileReducer,
  transactionReducer,
});

export default rootReducer;
