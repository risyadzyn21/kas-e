import axios from 'axios'

export const Login = (email, password) => {
  const data = {
    email,
    password
  }
  return axios({
    method: 'POST',
    url: 'https://movieapp-glints.herokuapp.com/api/v1/users/signin',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
}

