import userReducer from "./UserReducer";
import transactionReducer from './TransactionReducer'
import incomeReducer from './IncomeReducer'
import editCategoryLimitReducer from './EditCategoryLimitReducer'
import { combineReducers } from "redux";
import CreateSafeReducer from "./CreateSafeReducer";

const rootReducer = combineReducers({
  userReducer, CreateSafeReducer, transactionReducer, incomeReducer, editCategoryLimitReducer

});

export default rootReducer;