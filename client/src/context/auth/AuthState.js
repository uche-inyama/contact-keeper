import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { 
  REGISTER_SUCCESS, 
  REGISTER_FAIL, 
  CLEAR_ERRORS, 
  USER_LOADED, 
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL 
} from '../types';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = props => {
	const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

	const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load User
  const loadUser = async () => {
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('http://localhost:4000/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  }

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }
    try {
      const res = await axios.post('http://localhost:4000/api/users', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      })
      loadUser();
    }
  }
  
  const loginUser = async (formData) => {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }
    try {
      const res = await axios.post('http://localhost:4000/api/auth', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      })
    }
  };

  const logout = () => console.log('logout');

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

	return (
		<AuthContext.Provider
			value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loadUser,
        clearErrors,
        loginUser,
        logout
      }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;