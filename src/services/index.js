import axios from 'axios'

export const login = (email, password) => {
  const data = {
    email,
    password
  }
  return axios({
    method: 'POST',
    url: 'https://kas-e.herokuapp.com/api/v1/user/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
}

export const register = (email, password, confirmPassword, fullName, gender, age) => {
  const data = {
    email,
    password,
    confirmPassword,
    fullName,
    gender,
    age
  }

  return axios({
    method: 'POST',
    url: 'https://kas-e.herokuapp.com/api/v1/user/register',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
}

export const profile = () => {
  return axios({
    method: 'GET',
    url: 'http://kas-e.herokuapp.com/api/v1/'
  })
}

export const getSafe = async () => {
  const url = `http://kas-e.herokuapp.com/api/v1/safe`

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
