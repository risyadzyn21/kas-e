import { getProfile } from "../../services";

export const getProfileAsync = (token) => {
  return async (dispatch) => {
    dispatch({ type: "profile/get-start" });
    try {
      const response = await getProfile(token);
      console.log(response, "start");
      if (response.data) {
        dispatch(getProfileSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
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
