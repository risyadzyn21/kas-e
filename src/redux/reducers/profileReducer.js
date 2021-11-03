import * as action from "../actions/profileAction";

const initialState = {
  profileData: {},
};

function profileReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "profile/get-start":
      return {
        ...state,
      };
    case "profile/get-success":
      return {
        ...state,
        profileData: payload.data,
        error: "",
      };
    case "profile/get-failed":
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}

export default profileReducer;
