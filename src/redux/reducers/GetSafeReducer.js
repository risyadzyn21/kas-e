import * as actions from '../actions'
const initialState = {
  safes: [],
  filtered: [],
  isLoading: false,
  hasErrors: false
};


function GetSafeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SAFES:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_SAFES_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        safes: action.payload,
        isLoading: false

      };
    case actions.GET_SAFES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };
    default:
      return state;
  }
}

export default GetSafeReducer