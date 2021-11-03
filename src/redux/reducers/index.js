import userReducer from "./UserReducer";
import transactionReducer from "./TransactionReducer";
import incomeReducer from "./IncomeReducer";
import editCategoryLimitReducer from "./EditCategoryLimitReducer";
import { combineReducers } from "redux";
import UpdateSafeReducer from "./UpdateSafeReducer";
import DeleteSafesReducer from "./DeleteSafesReducer";
import GetTransactionReducer from './GetTransactionReducer'
import profileReducer from "./profileReducer";
import GetSafeReducer from './GetSafeReducer'
import GetCategoryReducer from "./GetCategoryReducer";
import GetReportDailyExpenseReducer from './getReportDailyExpenseReducer'
import GetReportMonthlyExpenseReducer from './getReportMonthlyExpenseReducer'

const rootReducer = combineReducers({
  userReducer,
  transactionReducer,
  incomeReducer,
  editCategoryLimitReducer,
  UpdateSafeReducer,
  DeleteSafesReducer,
  GetTransactionReducer,
  profileReducer,
  GetSafeReducer,
  GetCategoryReducer,
  GetReportDailyExpenseReducer,
  GetReportMonthlyExpenseReducer
});

export default rootReducer;
