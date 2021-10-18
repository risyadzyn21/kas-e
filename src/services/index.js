import axios from 'axios'

export const Login = (email, password) => {
  const data = {
    email,
    password
  }
  return axios({
    method: 'POST',
    url: 'http://kas-e.herokuapp.com/api/v1/user/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
}

