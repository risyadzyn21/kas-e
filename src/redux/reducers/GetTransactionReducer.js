import * as actions from '../actions'
import { isToday, isYesterday, isThisMonth } from 'date-fns';

const initialState = {
  transactions: [],
  filtered: [],
  isLoading: false,
  hasErrors: false
};

const today = transactions => {
  transactions.map(transaction => ({ ...transaction, updateAt: new Date(transaction.updateAt) }))
    .filter(transaction => isToday(transaction.updatedAt))
}

const yesterday = transactions => {
  transactions.map(transaction => ({ ...transaction, updateAt: new Date(transaction.updateAt) }))
    .filter(transaction => isYesterday(transaction.updatedAt))
}


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

    // Ini untuk ngehandle filter
    case actions.TRANSACTIONS_FILTER_BY:
      if (action.payload === 'today') {
        return {
          ...state,
          filtered: state.transactions.map(transaction => ({ ...transaction, updatedAt: new Date(transaction.updatedAt) }))
            .filter(transaction => isToday(transaction.updatedAt))
        }
      } else if (action.payload === 'yesterday') {
        return {
          ...state,
          filtered: state.transactions.map(transaction => ({ ...transaction, updatedAt: new Date(transaction.updatedAt) }))
            .filter(transaction => isYesterday(transaction.updatedAt))
        }
      } else if (action.payload === 'thisMonth') {
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

export default GetTransactionReducer
