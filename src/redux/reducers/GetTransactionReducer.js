import * as actions from '../actions'

const initialState = {
  tabVariant: 'day',
  transactions: [],
  isLoading: false,
  hasErrors: false
};


function GetTransactionReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TRANSACTIONS_DAILY:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_TRANSACTIONS_DAILY_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isLoading: false

      };
    case actions.GET_TRANSACTIONS_DAILY_FAILURE:
      return {
        ...state,
        isLoading: false,
        transactions: [],
        hasErrors: action.error
      };
    case actions.DELETE_TRANSACTIONS:
      return {
        ...state,
        isLoading: true
      };
    case actions.DELETE_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isLoading: false

      };
    case actions.DELETE_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };
    case actions.GET_TRANSACTIONS_MONTHLY:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_TRANSACTIONS_MONTHLY_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isLoading: false
      };
    case actions.GET_TRANSACTIONS_MONTHLY_FAILURE:
      return {
        ...state,
        isLoading: false,
        transactions: [],
        hasErrors: action.error
      };
    case 'addtransaction/get-start':
      return {
        ...state,
        isLoading: true
      }
    case 'addtransaction/get-success':
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transaction],
        isLoading: false,
        error: ''
      }
    case 'addtransaction/get-failed':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    case 'addincome/get-start':
      return {
        ...state,
        isLoading: true
      }
    case 'addincome/get-success':
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transactions],
        isLoading: false,
        error: ''
      }
    case 'addincome/get-failed':
      return {
        ...state,
        transactions: initialState.transactions,
        isLoading: false,
        error: action.payload.error
      }

    case 'UPDATE_TAB_VARIANT':
      return {
        ...state,
        tabVariant: action.payload
      }
    default:
      return state;
  }
}

export default GetTransactionReducer
