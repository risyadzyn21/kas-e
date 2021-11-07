import axios from "axios";
import { message } from 'antd';
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
  getTransaction,
  getCategory,
  getReportMonthly,
  getReportDaily,
  limitFirst,
  getTransactionDaily,
  getTransactionMonthly,
  deleteTransaction
} from "../../services";

export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const GET_TRANSACTIONS_SUCCESS = "GET_TRANSACTIONS_SUCCESS";
export const GET_TRANSACTIONS_FAILURE = "GET_TRANSACTIONS_FAILURE";
export const TRANSACTIONS_FILTER_BY = "TRANSACTIONS_FILTER_BY";

export const DELETE_TRANSACTIONS = "DELETE_TRANSACTIONS";
export const DELETE_TRANSACTIONS_SUCCESS = "DELETE_TRANSACTIONS_SUCCESS";
export const DELETE_TRANSACTIONS_FAILURE = "DELETE_TRANSACTIONS_FAILURE";

export const GET_SAFES = "GET_SAFES";
export const GET_SAFES_SUCCESS = "GET_SAFES_SUCCESS";
export const GET_SAFES_FAILURE = "GET_SAFES_FAILURE";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const GET_REPORT_DAILY_EXPENSE = "GET_REPORT_DAILY_EXPENSE";
export const GET_REPORT_DAILY_EXPENSE_SUCCESS = "GET_REPORT_DAILY_EXPENSE_SUCCESS";
export const GET_REPORT_DAILY_EXPENSE_FAILURE = "GET_REPORT_DAILY_EXPENSE_FAILURE";

export const GET_REPORT_DAILY_INCOME = "GET_REPORT_DAILY_INCOME";
export const GET_REPORT_DAILY_INCOME_SUCCESS = "GET_REPORT_DAILY_INCOME_SUCCESS";
export const GET_REPORT_DAILY_INCOME_FAILURE = "GET_REPORT_DAILY_INCOME_FAILURE";

export const GET_REPORT_MONTHLY_EXPENSE = "GET_REPORT_MONTHLY_EXPENSE";
export const GET_REPORT_MONTHLY_EXPENSE_SUCCESS = "GET_REPORT_MONTHLY_EXPENSE_SUCCESS";
export const GET_REPORT_MONTHLY_EXPENSE_FAILURE = "GET_REPORT_MONTHLY_EXPENSE_FAILURE";
export const GET_REPORT_MONTHLY_EXPENSE_FILTER_BY = "GET_REPORT_MONTHLY_EXPENSE_FILTER_BY";

export const GET_REPORT_MONTHLY_INCOME = "GET_REPORT_MONTHLY_INCOME";
export const GET_REPORT_MONTHLY_INCOME_SUCCESS = "GET_REPORT_MONTHLY_INCOME_SUCCESS";
export const GET_REPORT_MONTHLY_INCOME_FAILURE = "GET_REPORT_MONTHLY_INCOME_FAILURE";

export const GET_TRANSACTIONS_DAILY = "GET_TRANSACTIONS_DAILY"
export const GET_TRANSACTIONS_DAILY_SUCCESS = "GET_TRANSACTIONS_DAILY_SUCCESS"
export const GET_TRANSACTIONS_DAILY_FAILURE = "GET_TRANSACTIONS_DAILY_FAILURE"

export const GET_TRANSACTIONS_MONTHLY = "GET_TRANSACTIONS_MONTHLY"
export const GET_TRANSACTIONS_MONTHLY_SUCCESS = "GET_TRANSACTIONS_MONTHLY_SUCCESS"
export const GET_TRANSACTIONS_MONTHLY_FAILURE = "GET_TRANSACTIONS_MONTHLY_FAILURE"


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
            message.success(response.data.message)
          })
          .catch((error) => {
            console.log(error);
            dispatch(getProfileFailed(error));
          });
      }
      return response;
    } catch (error) {
      console.log(JSON.stringify(error.response.data));
      dispatch(getLoginFailed(error.message));
      return message.warning(error.response.data.message);
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
      if (response.data) {
        dispatch(getRegisterSuccess(response.data));
        cb();
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(getRegisterFailed(error.message));
      return message.warning(error.response.data.message);
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
      if (response.data) {
        // console.log(response.data.data.data, '3x data')
        dispatch(addTransactionSuccess(response.data.data.data));
        return response;
      }

    } catch (error) {
      console.log(error);
      dispatch(addTransactionFailed(error.message));
    }
  };
};

export const addTransactionSuccess = (transaction) => ({
  type: "addtransaction/get-success",
  payload: {
    transaction,
  },
});
export const addTransactionFailed = (error) => {
  console.log(error)
  return {
    type: "addtransaction/get-failed",
    payload: {
      error,
    },
  }
};

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
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          dispatch(createSafeSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(createSafeFailed(error.message));
        return message.warning(error.response.data.message)
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
        return response.json();
      })
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data) {
          dispatch(updateSafeSuccess(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(updateSafeFailed(error.message));
        return error;
      });
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

      return message.warning(error.response.data.message);
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
      return message.warning(error.response.data.message)
    }
  };
};
export const addIncomeSuccess = (transactions) => ({
  type: "addincome/get-success",
  payload: transactions
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
      const response = await limitFirst(params);
      console.log(response, "start");
      if (response.data) {
        dispatch(limitFirstSuccess(response.data));
      }
      return response;
    } catch (error) {
      console.log(error.message);
      dispatch(limitFirstFailed(error.message));
      return error;
    }
  };
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
      return message.warning(error.response.data.message);
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
  type: GET_TRANSACTIONS,
});

export const getTransactionsSuccess = (transactions) => {
  return {
    type: GET_TRANSACTIONS_SUCCESS,
    payload: transactions,
  };
};

export const getTransasctionsFailure = (error) => {
  return {
    type: GET_TRANSACTIONS_FAILURE,
    payload: error,
  };
};

export const filterTransactions = (filter) => {
  return {
    type: TRANSACTIONS_FILTER_BY,
    payload: filter,
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
      return message.warning(error.response.data.message)
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
      return message.warning(error.response.data.message)
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
      return message.warning(error.response.data.message)
    }
  };
};

// Get Report Monthly Expense
export const getReportsMonthlyExpense = () => ({
  type: GET_REPORT_MONTHLY_EXPENSE
});

export const getReportsMonthlyExpenseSuccess = (reportsExpense) => {
  return {
    type: GET_REPORT_MONTHLY_EXPENSE_SUCCESS,
    payload: reportsExpense
  };
};

export const getReportsMonthlyExpenseFailure = (error) => {
  return {
    type: GET_REPORT_MONTHLY_EXPENSE_FAILURE,
    payload: error
  };
};


export const getReportMonthlyExpenseAsync = (date) => {
  return async (dispatch) => {
    dispatch(getReportsMonthlyExpense());
    try {
      const res = await getReportMonthly(date);

      dispatch(getReportsMonthlyExpenseSuccess(res.data.expense));
      console.log(res.data)
    } catch (error) {
      dispatch(getReportsMonthlyExpenseFailure(error));
    }
  };
};

// Get Report Monthly Income
export const getReportsMonthlyIncome = () => ({
  type: GET_REPORT_MONTHLY_INCOME
});

export const getReportsMonthlyIncomeSuccess = (reportsIncome) => {
  return {
    type: GET_REPORT_MONTHLY_INCOME_SUCCESS,
    payload: reportsIncome
  };
};

export const getReportsMonthlyIncomeFailure = (error) => {
  return {
    type: GET_REPORT_MONTHLY_INCOME_FAILURE,
    payload: error
  };
};


export const getReportMonthlyIncomeAsync = (date) => {
  return async (dispatch) => {
    dispatch(getReportsDailyIncome());
    try {
      const res = await getReportMonthly(date);
      dispatch(getReportsMonthlyIncomeSuccess(res.data.addIncome));
    } catch (error) {
      dispatch(getReportsMonthlyIncomeFailure(error));
    }
  };
};

// Get Report Daily Expense
export const getReportsDailyExpense = () => ({
  type: GET_REPORT_DAILY_EXPENSE
});

export const getReportsDailyExpenseSuccess = (reportsExpense) => {
  return {
    type: GET_REPORT_DAILY_EXPENSE_SUCCESS,
    payload: reportsExpense
  };
};

export const getReportsDailyExpenseFailure = (error) => {
  return {
    type: GET_REPORT_DAILY_EXPENSE_FAILURE,
    payload: error
  };
};


export const getReportDailyExpenseAsync = (date) => {
  return async (dispatch) => {
    dispatch(getReportsDailyExpense());
    try {
      const res = await getReportDaily(date);

      dispatch(getReportsDailyExpenseSuccess(res.data.expense));
    } catch (error) {
      dispatch(getReportsDailyExpenseFailure(error));
      return message.warning(error.response.data.message)
    }
  };
};

// Get Report Daily Income
export const getReportsDailyIncome = () => ({
  type: GET_REPORT_DAILY_INCOME
});

export const getReportsDailyIncomeSuccess = (reportsIncome) => {
  return {
    type: GET_REPORT_DAILY_INCOME_SUCCESS,
    payload: reportsIncome
  };
};

export const getReportsDailyIncomeFailure = (error) => {
  return {
    type: GET_REPORT_DAILY_INCOME_FAILURE,
    payload: error
  };
};


export const getReportDailyIncomeAsync = (date) => {
  return async (dispatch) => {
    dispatch(getReportsDailyIncome());
    try {
      const res = await getReportDaily(date);
      console.log(res.data, 'yahooooo')
      dispatch(getReportsDailyIncomeSuccess(res.data.addIncome));
    } catch (error) {
      dispatch(getReportsDailyIncomeFailure(error));
      return message.warning(error.response.data.message)
    }
  };
};


// Get Transaction by Date
export const getTransactionsDailyStart = () => ({
  type: GET_TRANSACTIONS_DAILY
});

export const getTransactionsDailySuccess = (transactions) => {
  return {
    type: GET_TRANSACTIONS_DAILY_SUCCESS,
    payload: transactions
  };
};

export const getTransactionsDailyFailure = (error) => {
  return {
    type: GET_TRANSACTIONS_DAILY_FAILURE,
    payload: error
  };
};

export const getTransactionsDailyAsync = (date) => {
  return async (dispatch) => {
    dispatch(getTransactionsDailyStart())
    try {
      const res = await getTransactionDaily(date)

      dispatch(getTransactionsDailySuccess(res.data.data.transactions))
    } catch (error) {
      console.log(error)
      dispatch(getTransactionsDailyFailure(error))
    }

  }
}

export const getTransactionsMonthlyStart = () => ({
  type: GET_TRANSACTIONS_MONTHLY
});

export const getTransactionsMonthlySuccess = (transactions) => {
  return {
    type: GET_TRANSACTIONS_MONTHLY_SUCCESS,
    payload: transactions
  };
};

export const getTransactionsMonthlyFailure = (error) => {
  return {
    type: GET_TRANSACTIONS_MONTHLY_FAILURE,
    payload: error
  };
};

export const getTransactionsMonthlyAsync = (date) => {
  return async (dispatch) => {
    dispatch(getTransactionsMonthlyStart())
    try {
      const res = await getTransactionMonthly(date)

      dispatch(getTransactionsMonthlySuccess(res.data.data.transactions))
    } catch (error) {
      dispatch(getTransactionsMonthlyFailure(error))
    }

  }
}


// Delete Transaction
export const deleteTransactionStart = () => ({
  type: DELETE_TRANSACTIONS
});

export const deleteTransactionSuccess = (reportDailyExpense) => {
  return {
    type: DELETE_TRANSACTIONS_SUCCESS,
    payload: reportDailyExpense
  };
};

export const deleteTransactionFailure = (error) => {
  return {
    type: DELETE_TRANSACTIONS_FAILURE,
    payload: error
  };
};


export const deleteTransactionAsync = (id_transaction) => {
  return async (dispatch) => {
    dispatch(deleteTransactionStart());
    try {
      const res = await deleteTransaction(id_transaction);

      dispatch(deleteTransactionSuccess(res.data));
    } catch (error) {
      dispatch(deleteTransactionFailure(error));
    }
  };
};



