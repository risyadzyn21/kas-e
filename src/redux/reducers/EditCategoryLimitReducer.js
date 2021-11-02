const initialState = {
  editCategory: false,
  editCategoryLoading: false,
  editCategoryError: false
};

function editCategoryLimitReducer(state = initialState, action) {
  // const { type, payload } = action
  switch (action.type) {
    case 'editcategory/get-start':
      return {
        ...state,
        loading: true
      }
    case 'editcategory/get-success':
      return {
        ...state,
        editCategoryLimit: action.payload.editCategoryLimit,
        loading: false,
        error: ''
      }
    case 'editcategory/get-failed':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}


export default editCategoryLimitReducer;