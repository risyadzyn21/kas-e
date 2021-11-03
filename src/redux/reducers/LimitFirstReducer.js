const initialState = {
    limitFirst: false,
    limitFirstLoading: false,
    limitFirstError: false
  };
  
  function LimitFirstReducer(state = initialState, action) {
    switch (action.type) {
      case 'limitFirst/get-start':
        return {
          ...state,
          loading: true
        }
      case 'limitFirst/get-success':
        return {
          ...state,
          limitFirst: action.payload.limitFirst,
          loading: false,
          error: ''
        }
      case 'limitFirst/get-failed':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
      default:
        return state
    }
  }
  
  
  export default LimitFirstReducer;