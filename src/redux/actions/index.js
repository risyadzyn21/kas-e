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
  getTransaction,
  getCategory,
  getReportMonthly,
  getReportDaily
} from "../../services";

import { getProfileSuccess, getProfileFailed } from "../actions/profileAction";

export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const GET_TRANSACTIONS_SUCCESS = "GET_TRANSACTIONS_SUCCESS";
export const GET_TRANSACTIONS_FAILURE = "GET_TRANSACTIONS_FAILURE";
export const TRANSACTIONS_FILTER_BY = "TRANSACTIONS_FILTER_BY";

export const GET_SAFES = "GET_SAFES";
export const GET_SAFES_SUCCESS = "GET_SAFES_SUCCESS";
export const GET_SAFES_FAILURE = "GET_SAFES_FAILURE";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const GET_REPORT_DAILY_EXPENSE = "GET_REPORT_DAILY_EXPENSE";
export const GET_REPORT_DAILY_EXPENSE_SUCCESS = "GET_REPORT_DAILY_EXPENSE_SUCCESS";
export const GET_REPORT_DAILY_EXPENSE_FAILURE = "GET_REPORT_DAILY_EXPENSE_FAILURE";
export const GET_REPORT_DAILY_EXPENSE_FILTER_BY = "GET_REPORT_DAILY_EXPENSE_FILTER_BY";

export const GET_REPORT_MONTHLY_EXPENSE = "GET_REPORT_MONTHLY_EXPENSE";
export const GET_REPORT_MONTHLY_EXPENSE_SUCCESS = "GET_REPORT_MONTHLY_EXPENSE_SUCCESS";
export const GET_REPORT_MONTHLY_EXPENSE_FAILURE = "GET_REPORT_MONTHLY_EXPENSE_FAILURE";
export const GET_REPORT_MONTHLY_EXPENSE_FILTER_BY = "GET_REPORT_MONTHLY_EXPENSE_FILTER_BY";


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

export const getTransactionAsync = (cb) => {
  return async (dispatch) => {
    dispatch(getTransactions());
    try {
      const res = await getTransaction();

      dispatch(getTransactionsSuccess(res.data.data.transactions));
      cb()
      console.log(res.data)
    } catch (error) {
      dispatch(getTransasctionsFailure(error));
    }
  };
};

// Get Safe 2
export const getSafes2 = () => ({
  type: GET_SAFES
});

export const getSafesSuccess2 = (safes) => {
  return {
    type: GET_SAFES_SUCCESS,
    payload: safes
  };
};

export const getSafesFailure2 = (error) => {
  return {
    type: GET_SAFES_FAILURE,
    payload: error
  };
};

export const getSafesAsc2 = (token) => {
  return async (dispatch) => {
    dispatch(getSafes2(token));
    try {
      const res = await getSafe(token);

      dispatch(getSafesSuccess2(res.data));
      console.log(res.data)
    } catch (error) {
      dispatch(getSafesFailure2(error));
    }
  };
};


// Get Categories
export const getCategories = () => ({
  type: GET_CATEGORIES
});

export const getCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories
  };
};

export const getCategoriesFailure = (error) => {
  return {
    type: GET_CATEGORIES_FAILURE,
    payload: error
  };
};

export const getCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(getCategories());
    try {
      const res = await getCategory();

      dispatch(getCategoriesSuccess(res.data.data));
      console.log(res.data)
    } catch (error) {
      dispatch(getCategoriesFailure(error));
    }
  };
};

// Get Report Monthly Expense
export const getReportsMonthlyExpense = () => ({
  type: GET_REPORT_MONTHLY_EXPENSE
});

export const getReportsMonthlyExpenseSuccess = (reportMonthlyExpense) => {
  return {
    type: GET_REPORT_MONTHLY_EXPENSE_SUCCESS,
    payload: reportMonthlyExpense
  };
};

export const getReportsMonthlyExpenseFailure = (error) => {
  return {
    type: GET_REPORT_MONTHLY_EXPENSE_FAILURE,
    payload: error
  };
};

export const filterReportsMonthlyExpense = (filter) => {
  return {
    type: GET_REPORT_MONTHLY_EXPENSE_FILTER_BY,
    payload: filter
  };
};

export const getReportMonthlyExpenseAsync = () => {
  return async (dispatch) => {
    dispatch(getReportsMonthlyExpense());
    try {
      const res = await getReportMonthly();

      dispatch(getReportsMonthlyExpenseSuccess(res.data.expense));
      console.log(res.data)
    } catch (error) {
      dispatch(getReportsMonthlyExpenseFailure(error));
    }
  };
};

// Get Report Daily Expense
export const getReportsDailyExpense = () => ({
  type: GET_REPORT_DAILY_EXPENSE
});

export const getReportsDailyExpenseSuccess = (reportDailyExpense) => {
  return {
    type: GET_REPORT_DAILY_EXPENSE_SUCCESS,
    payload: reportDailyExpense
  };
};

export const getReportsDailyExpenseFailure = (error) => {
  return {
    type: GET_REPORT_DAILY_EXPENSE_FAILURE,
    payload: error
  };
};

export const filterReportsDailyExpense = (filter) => {
  return {
    type: GET_REPORT_DAILY_EXPENSE_FILTER_BY,
    payload: filter
  };
};

export const getReportDailyExpenseAsync = () => {
  return async (dispatch) => {
    dispatch(getReportsDailyExpense());
    try {
      const res = await getReportDaily();

      dispatch(getReportsDailyExpenseSuccess(res.data.expense));
      console.log(res.data)
    } catch (error) {
      dispatch(getReportsDailyExpenseFailure(error));
    }
  };
};


