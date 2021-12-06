import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Login = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const navigate = useNavigate();

  const { loginUser, isAuthenticated, error, clearErrors } = authContext;
  const { setAlert } = alertContext

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  useEffect(() => {
    if(isAuthenticated){
      navigate('/');
    }
    if(error === 'Invalid Credentials'){
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disabled-next-line
  }, [error, isAuthenticated]);

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( email === '' || password === ''){
      setAlert('Please fill in all fields', 'danger')
    } else {
      loginUser({
        email,
        password
      });
    }
  }

  return (
    <div className='form-container'>
      <h1>
        Login <span className='text-primary'>Account</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'></label>
          <input 
            type='email' 
            name='email' 
            value={email} 
            onChange={handleChange} 
            placeholder="email"
            required
            />
        </div>
        <div className='form-group'>
          <label htmlFor='password'></label>
          <input 
            type='password' 
            name='password' 
            value={password} 
            onChange={handleChange} 
            placeholder="password" 
            required
            />
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}

export default Login;