import * as actions from '../actions'
import { isToday, isYesterday, isThisMonth } from 'date-fns';

const initialState = {
  tabVariant: 'day',
  transactions: [],
  filtered: [],
  isLoading: false,
  hasErrors: false
};


function GetTransactionReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TRANSACTIONS:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        transactions: action.payload,
        isLoading: false

      };
    case actions.GET_TRANSACTIONS_FAILURE:
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

    // Ini untuk ngehandle filter
    case actions.TRANSACTIONS_FILTER_BY:
      if (action.payload === 'today') {
        return {
          ...state,
          filtered: state.transactions?.map(transaction => ({ ...transaction, createdAt: new Date(transaction.createdAt) }))
            .filter(transaction => isToday(transaction.createdAt))
        }
      } else if (action.payload === 'yesterday') {
        return {
          ...state,
          filtered: state.transactions?.map(transaction => ({ ...transaction, createdAt: new Date(transaction.createdAt) }))
            .filter(transaction => isYesterday(transaction.createdAt))
        }
      } else if (action.payload === 'thisMonth') {
        return {
          ...state,
          filtered: state.transactions?.map(transaction => ({ ...transaction, createdAt: new Date(transaction.createdAt) }))
            .filter(transaction => isThisMonth(transaction.createdAt))
        }
      }
      return {
        ...state,
        filtered: state.transactions?.filter((transactions) => {
          return transactions?.detailExpense?.includes(action?.filter);
        })
      };
    default:
      return state;
  }
}

export default GetTransactionReducer
