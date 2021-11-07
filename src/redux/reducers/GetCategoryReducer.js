import * as actions from '../actions'
const initialState = {
  categories: [],
  filtered: [],
  isLoading: false,
  hasErrors: false
};


function GetCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CATEGORIES:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        filtered: action.payload,
        categories: action.payload,
        isLoading: false

      };
    case actions.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };
    default:
      return state;
  }
}

export default GetCategoryReducer