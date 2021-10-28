import axios from 'axios'

const token = localStorage.getItem('token')

export const login = (email, password) => {

  const data = {
    email,
    password
  }
  return axios({
    method: 'POST',
    url: 'https://kas-e.herokuapp.com/api/v1/user/login',
    headers: {
      'Authorization': `Bearer ${token}`,
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
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
}

export const profile = () => {
  return axios({
    method: 'GET',
    url: 'https://kas-e.herokuapp.com/api/v1/',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

export const getSafe = async () => {
  const url = 'http://kas-e.herokuapp.com/api/v1/safe'

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getTransaction = () => {

  return axios({
    method: 'GET',
    url: 'https://kas-e.herokuapp.com/api/v1/transaction',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

export const getCategory = () => {

  return axios({
    method: 'GET',
    url: 'https://kas-e.herokuapp.com/api/v1/limit',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

export const getProfile = () => {

  return axios({
    method: 'GET',
    url: 'http://kas-e.herokuapp.com/api/v1/profile',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

export const addIncome = () => {

  return axios({
    method: 'POST',
    url: 'https://kas-e.herokuapp.com/api/v1/safe/income',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}
