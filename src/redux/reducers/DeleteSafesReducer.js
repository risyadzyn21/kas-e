const initialState = {
    deleteSafeId: false,
    deleteSafeLoading: false,
    deleteSafeError: false
  };
  
  function DeleteSafesReducer(state = initialState, action) {
    switch (action.type) {
      case 'deleteSafeId/get-start':
        return {
          ...state,
          loading: true
        }
      case 'deleteSafeId/get-success':
        return {
          ...state,
          deleteSafeId: action.payload.deleteSafeId,    
          loading: false,
          error: ''
        }
      case ' deleteSafeId/get-failed':
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

