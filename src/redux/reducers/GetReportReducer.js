import * as actions from '../actions'
import { isToday, isYesterday, isThisMonth } from 'date-fns';
const initialState = {
  tabVariant: 'day',
  reportsExpense: [],
  reportsIncome: [],
  filtered: [],
  isLoading: false,
  hasErrors: false
};


function GetReportReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_REPORT_MONTHLY_EXPENSE:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_REPORT_MONTHLY_EXPENSE_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        reportsExpense: action.payload,
        isLoading: false

      };
    case actions.GET_REPORT_MONTHLY_EXPENSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };
    case actions.GET_REPORT_MONTHLY_INCOME:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_REPORT_MONTHLY_INCOME_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        reportsIncome: action.payload,
        isLoading: false

      };
    case actions.GET_REPORT_MONTHLY_INCOME_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };
    case actions.GET_REPORT_DAILY_EXPENSE:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_REPORT_DAILY_EXPENSE_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        reportsExpense: action.payload,
        isLoading: false

      };
    case actions.GET_REPORT_DAILY_EXPENSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };

    case actions.GET_REPORT_DAILY_INCOME:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_REPORT_DAILY_INCOME_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        reportsIncome: action.payload,
        isLoading: false

      };
    case actions.GET_REPORT_DAILY_INCOME_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };

    case 'UPDATE_TAB_VARIANT':
      return {
        ...state,
        tabVariant: action.payload
      }

    default:
      return state;
  }
}

export default GetReportReducer