import userReducer from "./UserReducer";
import transactionReducer from './TransactionReducer'
import incomeReducer from './IncomeReducer'
import editCategoryLimitReducer from './EditCategoryLimitReducer'
import { combineReducers } from "redux";
import UpdateSafeReducer from "./UpdateSafeReducer";
import DeleteSafesReducer from "./DeleteSafesReducer";
import SafesReducer from "./SafesReducer";

const rootReducer = combineReducers({
  userReducer, transactionReducer, incomeReducer, editCategoryLimitReducer, UpdateSafeReducer, DeleteSafesReducer, SafesReducer,

});

export default rootReducer;