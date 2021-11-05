import axios from "axios";
import {
  login,
  register,
  addTransaction,
  getSafe,
  createSafe,
  updateSafe,
  deleteSafe,
  addIncome,
  editCategoryLimit,
} from "../../services";

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
  return async (dispatch) => {
    dispatch({ type: "createSafe/get-start" });
    try {
      const response = await createSafe(safeName, amount);
      console.log(response, "start");
      if (response.data) {
        dispatch(createSafeSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(createSafeFailed(error.message));
      return error;
    }
  };
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

// update safe

export const updateSafeAsync = (safeName, amount) => {
  return async (dispatch) => {
    dispatch({ type: "updateSafe/get-start" });
    try {
      const response = await updateSafe(safeName, amount);
      console.log(response, "start");
      if (response.data.data) {
        dispatch(updateSafeSuccess(response.data.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(updateSafeFailed(error.message));

      return error;
    }
  };
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

export const deleteSafeAsync = (id) => {
  return async (dispatch) => {
    dispatch({ type: "deleteSafe/get-start" });
    try {
      const response = await deleteSafe(id);
      console.log(response, "start");
      if (response.data) {
        dispatch(deleteSafeSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(deleteSafeFailed(error.message));

      return error;
    }
  };
};
export const deleteSafeSuccess = (deleteSafe) => ({
  type: "deleteSafe/get-success",
  payload: {
    deleteSafe,
  },
});

export const deleteSafeFailed = (error) => ({
  type: "deleteSafe/get-failed",
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

      return error;
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
