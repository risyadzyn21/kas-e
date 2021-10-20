import { login, register } from "../../services";

export const getLoginAsync = (email, password, cb) => {
  return async (dispatch) => {
    dispatch({ type: "login/get-start" });
    try {
      const response = await login(email, password, cb)
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

export const getRegisterAsync = (email, password, confirmPassword, fullName, gender, age, cb) => {
  return async (dispatch) => {
    dispatch({ type: "register/get-start" });
    try {
      const response = await register(email, password, confirmPassword, fullName, gender, age)
      console.log(response, "start")
      if (response.data) {
        dispatch(getRegisterSuccess(response.data));
        cb()
      }
      return response
    } catch (error) {
      console.log(error.message);
      dispatch(getRegisterFailed(error.message));
      return error
    }
  }
};

export const getRegisterSuccess = (register) => ({
  type: "register/get-success",
  payload: {
    register,
  },
});

export const getRegisterFailed = (error) => ({
  type: "register/get-failed",
  payload: {
    error,
  },
});
