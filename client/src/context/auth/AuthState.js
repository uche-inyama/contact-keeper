import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types';

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
    }
  }
  // Login User

  // Logout 

  // Clear Errors


	return (
		<AuthContext.Provider
			value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register
      }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;