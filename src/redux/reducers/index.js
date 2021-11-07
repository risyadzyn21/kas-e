import userReducer from "./UserReducer";
import transactionReducer from "./GetTransactionReducer";
import incomeReducer from "./IncomeReducer";
import editCategoryLimitReducer from "./EditCategoryLimitReducer";
import { combineReducers } from "redux";
import UpdateSafeReducer from "./UpdateSafeReducer";
import DeleteSafesReducer from "./DeleteSafesReducer";
import SafesReducer from "./SafesReducer";
import GetTransactionReducer from './GetTransactionReducer'
import LimitFirstReducer from "./LimitFirstReducer";
import profileReducer from "./profileReducer";
import GetSafeReducer from './GetSafeReducer'
import GetCategoryReducer from "./GetCategoryReducer";
import GetReportDailyExpenseReducer from './getReportDailyExpenseReducer'
import GetReportMonthlyExpenseReducer from './GetReportReducer'
import getReportDailyIncomeReducer from "./getReportDailyIncomeReducer";
import GetReportReducer from './GetReportReducer'

const rootReducer = combineReducers({
  userReducer,
  // transactionReducer,
  // incomeReducer,
  editCategoryLimitReducer,
  UpdateSafeReducer,
  DeleteSafesReducer,
  SafesReducer,
  GetTransactionReducer,
  LimitFirstReducer,
  profileReducer,
  GetSafeReducer,
  GetCategoryReducer,
  GetReportDailyExpenseReducer,
  GetReportMonthlyExpenseReducer,
  GetReportReducer,
  getReportDailyIncomeReducer
});

export default rootReducer;
