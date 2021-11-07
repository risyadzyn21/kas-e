import axios from 'axios'

const token = localStorage.getItem("token");

export const login = (email, password) => {
  const data = {
    email,
    password,
  };
  return axios({
    method: "POST",
    url: "https://kas-e.herokuapp.com/api/v1/user/login",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
};

export const register = (
  email,
  password,
  confirmPassword,
  fullName,
  gender,
  age
) => {
  const data = {
    email,
    password,
    confirmPassword,
    fullName,
    gender,
    age,
  };

  return axios({
    method: "POST",
    url: "https://kas-e.herokuapp.com/api/v1/user/register",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
};

export const profile = () => {
  return axios({
    method: "GET",
    url: "https://kas-e.herokuapp.com/api/v1/profile",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getSafe = async () => {
  const url = `https://kas-e.herokuapp.com/api/v1/safe`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};


export const createSafe = (safeName, amount) => {
  const url = `https://kas-e.herokuapp.com/api/v1/safe/create`
  const data = {
    safeName,
    amount,
  };
  try {

    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateSafe = (safeName, amount) => {
  const url = `https://kas-e.herokuapp.com/api/v1/safe`;
  const data = {
    safeName,
    amount,
  };
  try {
    const response = fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteSafeId = (id) => {
  const data = {
    id,
  }
  return axios({
    method: "DELETE",
    url: `https://kas-e.herokuapp.com/api/v1/safe/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
};

export const getTransaction = () => {
  return axios({
    method: "GET",
    url: "https://kas-e.herokuapp.com/api/v1/transaction",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getTransactionDaily = (date) => {
  return axios({
    method: "GET",
    url: `https://kas-e.herokuapp.com/api/v1/transaction/daily?date=${date}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getTransactionMonthly = (date) => {
  return axios({
    method: "GET",
    url: `https://kas-e.herokuapp.com/api/v1/transaction/monthly?date=${date}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const addTransaction = (
  category_id,
  detailExpense,
  expense,
  safe_id
) => {
  const data = {
    category_id,
    detailExpense,
    expense,
    safe_id,
  };

  return axios({
    method: "POST",
    url: "https://kas-e.herokuapp.com/api/v1/transaction",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
};

export const deleteTransaction = (id_transaction) => {
  return axios({
    method: 'DELETE',
    url: `https://kas-e.herokuapp.com/api/v1/transaction/${id_transaction}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
}

export const getCategory = () => {
  return axios({
    method: "GET",
    url: "https://kas-e.herokuapp.com/api/v1/limit",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getProfile = (token) => {
  return axios({
    method: "GET",
    url: "https://kas-e.herokuapp.com/api/v1/profile",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const addIncome = (safe_id, expense) => {
  const data = {
    safe_id,
    expense: parseInt(expense),
  };

  return axios({
    method: "POST",
    url: "https://kas-e.herokuapp.com/api/v1/transaction/addincome",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data,
  });
};

// export const getReportDaily = () => {
//   return axios({
//     method: "GET",
//     url: "https://kas-e.herokuapp.com/api/v1/report/daily",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   });
// };


export const editCategoryLimit = (category_id, limit) => {
  const data = {
    category_id,
    limit,
  };

  return axios({
    method: "PUT",
    url: "https://kas-e.herokuapp.com/api/v1/limit",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
};

export const limitFirst = (params) => {

  return axios({
    method: "POST",
    url: "https://kas-e.herokuapp.com/api/v1/limit",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(params),
  });
};

export const getReportDaily = (date) => {
  return axios({
    method: "GET",
    url: `https://kas-e.herokuapp.com/api/v1/report/daily?date=${date}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getReportMonthly = (date) => {
  return axios({
    method: "GET",
    url: `https://kas-e.herokuapp.com/api/v1/report/monthly?date=${date}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
