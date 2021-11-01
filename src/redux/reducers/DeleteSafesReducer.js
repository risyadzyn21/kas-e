const initialState = {
    deleteSafe: false,
    deleteSafeLoading: false,
    deleteSafeError: false
  };
  
  function DeleteSafesReducer(state = initialState, action) {
    // const { type, payload } = action
    switch (action.type) {
      case ' deleteSafe/get-start':
        return {
          ...state,
          loading: true
        }
      case ' deleteSafe/get-success':
        return {
          ...state,
          deleteSafe: state.deleteSafe.filter(item => item.id !== action.payload),    
          loading: false,
          error: ''
        }
      case ' deleteSafe/get-failed':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
      default:
        return state
    }
  }
  
  
  export default DeleteSafesReducer;

