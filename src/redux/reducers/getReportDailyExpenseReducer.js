import * as actions from '../actions'
import { isToday, isYesterday, isThisMonth } from 'date-fns';
const initialState = {
  reportsDailyExpense: [],
  filtered: [],
  isLoading: false,
  hasErrors: false
};


function GetReportDailyExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_REPORT_DAILY_EXPENSE:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_REPORT_DAILY_EXPENSE_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        reportsDailyExpense: action.payload,
        isLoading: false

      };
    case actions.GET_REPORT_DAILY_EXPENSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };
    case actions.GET_REPORT_DAILY_EXPENSE_FILTER_BY:
      if (action.payload === 'today') {
        return {
          ...state,
          filtered: state.reportsDailyExpense.map(reportDailyExpense => ({ ...reportDailyExpense, updatedAt: new Date(reportDailyExpense.updatedAt) }))
            .filter(reportDailyExpense => isToday(reportDailyExpense.updatedAt))
        }
      } else if (action.payload === 'yesterday') {
        return {
          ...state,
          filtered: state.reportsDailyExpense.map(reportDailyExpense => ({ ...reportDailyExpense, updatedAt: new Date(reportDailyExpense.updatedAt) }))
            .filter(reportDailyExpense => isYesterday(reportDailyExpense.updatedAt))
        }
      }
      return {
        ...state,
        filtered: state.reportsDailyExpense.filter((reportDailyExpense) => {
          return reportDailyExpense.totalExpense.includes(action.filter);
        })
      };
    default:
      return state;
  }
}

export default GetReportDailyExpenseReducer