const initialState = {
  createSafe: false,
  createSafeLoading: false,
  createSafeError: false
};

function SafesReducer(state = initialState, action) {
  // const { type, payload } = action
  switch (action.type) {
    case 'createSafe/get-start':
      return {
        ...state,
        loading: true
      }
    case 'createSafe/get-success':
      // console.log(action.payload)
      return {
        ...state,
        createSafe: action.payload.createSafe,
        loading: false,
        error: ''
      }
    case 'createSafe/get-failed':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}


export default SafesReducer;