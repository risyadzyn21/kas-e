import axios from "axios";

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
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getTransaction = async () => {
  return axios({
    method: "GET",
    url: "https://kas-e.herokuapp.com/api/v1/transaction",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
