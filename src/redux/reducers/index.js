import userReducer from "./UserReducer";
import editCategoryLimitReducer from "./EditCategoryLimitReducer";
import { combineReducers } from "redux";
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
