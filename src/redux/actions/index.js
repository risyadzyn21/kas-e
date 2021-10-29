import axios from "axios";
import { login, register, addTransaction } from "../../services";
import { getProfileFailed, getProfileSuccess } from "./profileAction";

// Login

export const getLoginAsync = (email, password, cb) => {
  return async (dispatch) => {
    dispatch({ type: "login/get-start" });
    try {
      const response = await login(email, password, cb);
      console.log(response, "start");
      if (response.data) {
        dispatch(getLoginSuccess(response.data));
        localStorage.setItem("token", response.data.token);
        cb(response.data.token);
        axios({
          method: "GET",
          url: "http://kas-e.herokuapp.com/api/v1/profile",
          headers: {
            Authorization: `Bearer ${response.data.token}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response.data);
            dispatch(getProfileSuccess(response.data));
          })
          .catch((error) => {
            console.log(error);
            dispatch(getProfileFailed(error));
          });
      }
      return response;
    } catch (error) {
      console.log(error);
      dispatch(getLoginFailed(error.message));
      return error;
    }
  };
};

export const getLoginSuccess = (login) => ({
  type: "login/get-success",
  payload: {
    login,
  },
});

export const getLoginFailed = (error) => ({
  type: "login/get-failed",
  payload: {
    error,
  },
});

// Register

export const getRegisterAsync = (
  email,
  password,
  confirmPassword,
  fullName,
  gender,
  age,
  cb
) => {
  return async (dispatch) => {
    dispatch({ type: "register/get-start" });
    try {
      const response = await register(
        email,
        password,
        confirmPassword,
        fullName,
        gender,
        age
      );
      console.log(response, "start");
      if (response.data) {
        dispatch(getRegisterSuccess(response.data));
        cb();
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(getRegisterFailed(error.message));
      return error;
    }
  };
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

// Transaction

export const addTransactionAsync = (
  category_id,
  detailExpense,
  expense,
  safe_id
) => {
  return async (dispatch) => {
    dispatch({ type: "addtransaction/get-start" });
    try {
      const response = await addTransaction(
        category_id,
        detailExpense,
        expense,
        safe_id
      );
      console.log(response, "start");
      if (response.data) {
        dispatch(addTransactionSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(addTransactionFailed(error.message));
      return error;
    }
  };
};

export const addTransactionSuccess = (addTransaction) => ({
  type: "addtransaction/get-success",
  payload: {
    addTransaction,
  },
});

export const addTransactionFailed = (error) => ({
  type: "addtransaction/get-failed",
  payload: {
    error,
  },
});
