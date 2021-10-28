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

export const getSafe = async (token) => {
  const url = `https://kas-e.herokuapp.com/api/v1/safe`

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const getCreateAcc = async ( safeName, amount, token) => {
  const url = `https://kas-e.herokuapp.com/api/v1/safe/create`
    const data = {
      safeName: safeName,
      amount: amount
    }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};


export const getUpdateSafe = async ( id, safeName, amount ) => {
  const url = `https://kas-e.herokuapp.com/api/v1/safe/create`
    const data = {
      id,
      safeName,
      amount,
    }
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getLimitFirst = async (id, limit) => {
  const url = `https://kas-e.herokuapp.com/api/v1/limit`
    const data = {
     id,
     limit
    }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
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

export const addTransaction = (category_id, detailExpense, expense, safe_id) => {
  const data = {
    category_id,
    detailExpense,
    expense,
    safe_id
  }

  return axios({
    method: 'POST',
    url: 'https://kas-e.herokuapp.com/api/v1/transaction',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
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
