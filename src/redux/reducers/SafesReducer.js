const initialState = {
  createSafe: false,
  updateSafe: false,
  deleteIdSafe: false,
  safeLoading: false,
  safeError: false,
};

function SafesReducer(state = initialState, action) {
  switch (action.type) {
    //Create Safe
    case "createSafe/get-start":
      return {
        ...state,
        loading: true,
      };
    case "createSafe/get-success":
      return {
        ...state,
        createSafe: action.payload.createSafe,
        loading: false,
        error: "",
      };
    case "createSafe/get-failed":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Update Safe
    case " updateSafe/get-start":
      return {
        ...state,
        loading: true,
      };
    case " updateSafe/get-success":
      return {
        ...state,
        updateSafe: action.payload.updateSafe,
        loading: false,
        error: "",
      };
    case " updateSafe/get-failed":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    //Delete Safe
    case "deleteSafeId/get-start":
      return {
        ...state,
        loading: true,
      };
    case "deleteSafeId/get-success":
      return {
        ...state,
        deleteSafeId: action.payload.deleteSafeId,
        loading: false,
        error: "",
      };
    case " deleteSafeId/get-failed":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default SafesReducer;
