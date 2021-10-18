import { Login } from "../../services";

export const getLoginAsync = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "login/get-start" });
    try {
      const response = await Login(email, password)
      console.log(response, "start")
      if (response.data) {
        dispatch(getLoginSuccess(response.data));
        localStorage.setItem('token', response.data.data)
      }
      return response
    } catch (error) {
      console.log(error);
      dispatch(getLoginFailed(error.message));
      return error
    }
  }
};

export const getLoginSuccess = (login) => ({
  type: 'login/get-success',
  payload: {
    login
  }
})

export const getLoginFailed = (error) => ({
  type: 'login/get-failed',
  payload: {
    error
  }
})
