import userReducer from "./UserReducer";
import transactionReducer from './TransactionReducer'
import incomeReducer from './IncomeReducer'
import editCategoryLimitReducer from './EditCategoryLimitReducer'
import { combineReducers } from "redux";
import UpdateSafeReducer from "./UpdateSafeReducer";
import DeleteSafesReducer from "./DeleteSafesReducer";
import GetTransactionReducer from './GetTransactionReducer'

const rootReducer = combineReducers({
  userReducer,
  transactionReducer,
  incomeReducer,
  editCategoryLimitReducer,
  UpdateSafeReducer,
  DeleteSafesReducer,
  GetTransactionReducer

});

export default rootReducer;