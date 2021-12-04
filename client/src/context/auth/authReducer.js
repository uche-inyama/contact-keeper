import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const authReducer = (state, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    default:
      return state
  }
}

export default authReducer;