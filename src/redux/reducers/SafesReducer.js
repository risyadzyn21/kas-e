const initialState = {
  safes: [],
  activeSafe: null,
  safeLoading: false,
  safeError: false,
};

function SafesReducer(state = initialState, action) {
  switch (action.type) {
    
    // Get safe
    case "getSafe/get-start":
      return {
        ...state,
        loading: true,
      };
    case "getSafe/get-success":
      return {
        ...state,
        safes: action.payload.safes,
        activeSafe: action.payload.safes[0],
        loading: false,
        error: "",
      };
    case "getSafe/get-failed":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //Create Safe
    case "createSafe/get-start":
      return {
        ...state,
        loading: true,
      };
    case "createSafe/get-success":
      console.log(action.payload, "ACTION YA")
      return {
        ...state,
        activeSafe: action.payload.activeSafe,
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
    case "updateSafe/get-start":
      return {
        ...state,
        loading: true,
      };
    case "updateSafe/get-success":
      console.log(action.payload, "TEST")
      return {
        ...state,
       activeSafe: action.payload.safe,
        loading: false,
        error: "",
      };
    case "updateSafe/get-failed":
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
        activeSafe: null,
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
