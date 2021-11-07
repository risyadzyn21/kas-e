import axios from "axios";
import {
  login,
  register,
  addTransaction,
  getSafe,
  createSafe,
  updateSafe,
  deleteSafeId,
  addIncome,
  editCategoryLimit,
  limitFirst,
  getTransaction
} from "../../services";

import { getProfileSuccess, getProfileFailed } from "../actions/profileAction";

export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const GET_TRANSACTIONS_SUCCESS = "GET_TRANSACTIONS_SUCCESS";
export const GET_TRANSACTIONS_FAILURE = "GET_TRANSACTIONS_FAILURE";
export const TRANSACTIONS_FILTER_BY = "TRANSACTIONS_FILTER_BY";

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

// Add Transaction

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

// get safe

export const getSafeAsync = (token) => {
  return async (dispatch) => {
    dispatch({ type: "getSafe/get-start" });
    try {
      const response = await getSafe(token);
      console.log(response, "start");
      if (response.data) {
        dispatch(getSafeSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(getSafeFailed(error.message));
      return error;
    }
  };
};

export const getSafeSuccess = (getSafe) => ({
  type: "getSafe/get-success",
  payload: {
    getSafe,
  },
});

export const getSafeFailed = (error) => ({
  type: "getSafe/get-failed",
  payload: {
    error,
  },
});

// create safe

export const createSafeAsync = (safeName, amount) => {
  return (dispatch) => {
    dispatch({ type: "createSafe/get-start" });
     createSafe(safeName, amount)
     .then((response) => {
      return response.json()
     })
     .then((response) => {
       console.log(response)
      if (response.data) {
          dispatch(createSafeSuccess(response.data));
        }
     })
     .catch((error) => {
      console.log(error.message);
          dispatch(createSafeFailed(error.message));
          return error
     })
  }
};

export const createSafeSuccess = (createSafe) => ({
  type: "createSafe/get-success",
  payload: {
    createSafe,
  },
});

export const createSafeFailed = (error) => ({
  type: "createSafe/get-failed",
  payload: {
    error,
  },
});

// update safe test

export const updateSafeAsync = (safeName, amount) => {
  return (dispatch) => {
    dispatch({ type: "updateSafe/get-start" });
    updateSafe(safeName, amount)
     .then((response) => {
      return response.json()
     })
     .then((response) => {
      //  console.log(response.data.data)
      if (response.data.data) {
          dispatch(updateSafeSuccess(response.data.data));
        }
     })
     .catch((error) => {
      console.log(error.message);
          dispatch(updateSafeFailed(error.message));
          return error
     })
  }
};

export const updateSafeSuccess = (updateSafe) => ({
  type: "updateSafe/get-success",
  payload: {
    updateSafe,
  },
});

export const updateSafeFailed = (error) => ({
  type: "updateSafe/get-failed",
  payload: {
    error,
  },
});

// delete safe

export const deleteSafeIdAsync = (id) => {
  return async (dispatch) => {
    dispatch({ type: "deleteSafeId/get-start" });
    try {
      const response = await deleteSafeId(id);
      console.log(response, "start");
      if (response.data) {
        dispatch(deleteSafeIdSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(deleteSafeIdFailed(error.message));

      return error;
    }
  };
};
export const deleteSafeIdSuccess = (deleteSafeId) => ({
  type: "deleteSafeId/get-success",
  payload: {
    deleteSafeId,
  },
});

export const deleteSafeIdFailed = (error) => ({
  type: "deleteSafeId/get-failed",
  payload: {
    error,
  },
});

// Add Income
export const addIncomeAsync = (safe_id, expense) => {
  return async (dispatch) => {
    dispatch({ type: "addIncome/get-start" });
    try {
      const response = await addIncome(safe_id, expense);
      console.log(response, "start");
      if (response.data) {
        dispatch(addIncomeSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(addIncomeFailed(error.message));

      return error
    }
  };
};
export const addIncomeSuccess = (addIncome) => ({
  type: "addincome/get-success",
  payload: {
    addIncome,
  },
});

export const addIncomeFailed = (error) => ({
  type: "addincome/get-failed",
  payload: {
    error,
  },
});
 
// Limit First category

export const limitFirstAsync = (params) => {
  return async (dispatch) => {
    dispatch({ type: "limitFirst/get-start" });
    try {
      const response = await limitFirst(params)
      console.log(response, "start")
      if (response.data) {
        dispatch(limitFirstSuccess(response.data));
      }
      return response
    } catch (error) {
      console.log(error.message);
      dispatch(limitFirstFailed(error.message));
      return error
    }
  }
};

export const limitFirstSuccess = (limitFirst) => ({
  type: "limitFirst/get-success",
  payload: {
    limitFirst,
  },
});

export const limitFirstFailed = (error) => ({
  type: "limitFirst/get-failed",
  payload: {
    error,
  },
});

// Edit Category Limit
export const editCategoryLimitAsync = (category_id, limit) => {
  return async (dispatch) => {
    dispatch({ type: "editcategory/get-start" });
    try {
      const response = await editCategoryLimit(category_id, limit);
      console.log(response, "start");
      if (response.data) {
        dispatch(editCategoryLimitSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(editCategoryLimitFailed(error.message));
      return error;
    }
  };
};

export const editCategoryLimitSuccess = (editCategoryLimit) => ({
  type: "editcategory/get-success",
  payload: {
    editCategoryLimit,
  },
});

export const editCategoryLimitFailed = (error) => ({
  type: "editcategory/get-failed",
  payload: {
    error,
  },
});

// Get Transaction
export const getTransactions = () => ({
  type: GET_TRANSACTIONS
});

export const getTransactionsSuccess = (transactions) => {
  return {
    type: GET_TRANSACTIONS_SUCCESS,
    payload: transactions
  };
};

export const getTransasctionsFailure = (error) => {
  return {
    type: GET_TRANSACTIONS_FAILURE,
    payload: error
  };
};

export const filterTransactions = (filter) => {
  return {
    type: TRANSACTIONS_FILTER_BY,
    payload: filter
  };
};

// Async actions
export const getTransactionAsync = () => {
  return async (dispatch) => {
    dispatch(getTransactions());
    try {
      const res = await getTransaction();

      dispatch(getTransactionsSuccess(res.data.data.transactions));
      console.log(res.data)
    } catch (error) {
      dispatch(getTransasctionsFailure(error));
    }
  };
};
