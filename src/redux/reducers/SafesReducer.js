const initialState = {
  data: [],
  loading: false,
  error: false,
};

const SafesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAFES/GET-DATA":
      return state;
      
    case "SAFES/GET-DATA-FAILED":
      return state;
    case "SAFES/GET-DATA-SUCCESS":
      return state;

    case "SAFES/ADD-DATA":
      return state;
    case "SAFES/ADD-DATA-FAILED":
      return state;
    case "SAFES/ADD-DATA-SUCCESS":
      return state;

    case "SAFES/UPDATE-DATA":
      return state;
    case "SAFES/UPDATE-DATA-FAILED":
      return state;
    case "SAFES/UPDATE-DATA-SUCCESS":
      return state;

    case "SAFES/DELETE-DATA":
      return state;
    case "SAFES/DELETE-DATA-FAILED":
      return state;
    case "SAFES/DELETE-DATA-SUCCESS":
      return state;
    default:
      return state;
  }
};

export default SafesReducer;
