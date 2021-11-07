import userReducer from "./UserReducer";
import transactionReducer from "./TransactionReducer";
import incomeReducer from "./IncomeReducer";
import editCategoryLimitReducer from "./EditCategoryLimitReducer";
import { combineReducers } from "redux";
import SafesReducer from "./SafesReducer";
import GetTransactionReducer from './GetTransactionReducer'
import LimitFirstReducer from "./LimitFirstReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  userReducer,
  transactionReducer,
  incomeReducer,
  editCategoryLimitReducer,
  SafesReducer,
  GetTransactionReducer,
  LimitFirstReducer,
  profileReducer,
});

export default rootReducer;
