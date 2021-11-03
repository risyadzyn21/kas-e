import * as actions from '../actions'
import { isToday, isYesterday, isThisMonth } from 'date-fns';
const initialState = {
  reportsMonthly: [],
  filtered: [],
  isLoading: false,
  hasErrors: false
};


function GetReportMonthlyExpenseReducer(state = initialState, action) {
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
        reportsMonthly: action.payload,
        isLoading: false

      };
    case actions.GET_REPORT_MONTHLY_EXPENSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };
    case actions.GET_REPORT_MONTHLY_EXPENSE_FILTER_BY:
      if (action.payload === 'thisMonth') {
        return {
          ...state,
          filtered: state.transactions.map(transaction => ({ ...transaction, updatedAt: new Date(transaction.updatedAt) }))
            .filter(transaction => isThisMonth(transaction.updatedAt))
        }
      }
      return {
        ...state,
        filtered: state.transactions.filter((transactions) => {
          return transactions.detailExpense.includes(action.filter);
        })
      };
    default:
      return state;
  }
}

export default GetReportMonthlyExpenseReducer