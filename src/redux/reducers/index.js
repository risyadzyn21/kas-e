import userReducer from "./UserReducer";
import transactionReducer from './TransactionReducer'
import { combineReducers } from "redux";
import CreateSafeReducer from "./CreateSafeReducer";

const rootReducer = combineReducers({
  userReducer, CreateSafeReducer, transactionReducer
 
});

export default rootReducer;