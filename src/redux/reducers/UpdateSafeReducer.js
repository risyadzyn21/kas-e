const initialState = {
    updateSafe: false,
    updateSafeLoading: false,
    updateSafeError: false
  };
  
  function UpdateSafeReducer(state = initialState, action) {
    // const { type, payload } = action
    switch (action.type) {
      case ' updateSafe/get-start':
        return {
          ...state,
          loading: true
        }
      case ' updateSafe/get-success':
        return {
          ...state,
          updateSafe: action.payload.updateSafe,
          loading: false,
          error: ''
        }
      case ' updateSafe/get-failed':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
      default:
        return state
    }
  }
  
  
  export default UpdateSafeReducer;

