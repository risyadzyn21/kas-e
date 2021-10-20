import * as action from '../actions'

const initialState = {
  token: '',
  currentUser: {},
  userList: []
};

function userReducer(state = initialState, action) {
  const { type, payload } = action
  switch (action.type) {
    case 'login/get-start':
      return {
        ...state,
        loading: true
      }
    case 'login/get-success':
      return {
        ...state,
        login: payload.login,
        loading: false,
        error: ''
      }
    case 'login/get-failed':
      return {
        ...state,
        loading: false,
        error: payload.error
      }
    case 'register/get-start':
      return {
        ...state,
        loading: true
      }
    case 'register/get-success':
      return {
        ...state,
        login: payload.register,
        loading: false,
        error: ''
      }
    case 'register/get-failed':
      return {
        ...state,
        loading: false,
        error: payload.error
      }
    default:
      return state
  }
}


export default userReducer;