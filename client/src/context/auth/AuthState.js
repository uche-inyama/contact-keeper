import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';


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
        user: state.user
      }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;