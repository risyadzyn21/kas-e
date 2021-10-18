import { Login } from "../../services";

export const getLoginAsync = (email, password, cb) => {
  return async (dispatch) => {
    dispatch({ type: "login/get-start" });
    try {
      const response = await Login(email, password, cb)
      console.log(response, "start")
      if (response.data) {
        dispatch(getLoginSuccess(response.data));
        localStorage.setItem('token', response.data.token)
        cb(response.data.token)
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
