import userReducer from "./UserReducer";
import transactionReducer from './TransactionReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer, transactionReducer
});

export default rootReducer;