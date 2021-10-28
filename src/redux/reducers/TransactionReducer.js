const initialState = {
  addTransaction: false,
  addTransactionLoading: false,
  addTransactionError: false
};

function transactionReducer(state = initialState, action) {
  // const { type, payload } = action
  switch (action.type) {
    case 'addtransaction/get-start':
      return {
        ...state,
        loading: true
      }
    case 'addtransaction/get-success':
      return {
        ...state,
        addTransaction: action.payload.addTransaction,
        loading: false,
        error: ''
      }
    case 'addtransaction/get-failed':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}


export default transactionReducer;