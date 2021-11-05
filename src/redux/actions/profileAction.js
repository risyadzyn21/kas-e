import { getProfile } from "../../services";

export const getProfileAsync = (token) => {
  return async (dispatch) => {
    dispatch({ type: "profile/get-start" });
    try {
      const response = await getProfile(token);
      if (response.data) {
        dispatch(getProfileSuccess(response.data));
      }
      return response;
    } catch (error) {
      dispatch(getProfileFailed(error.message));
      return error;
    }
  };
};

export const getProfileSuccess = (data) => ({
  type: "profile/get-success",
  payload: {
    data,
  },
});

export const getProfileFailed = (error) => ({
  type: "profile/get-failed",
  payload: {
    error,
  },
});
