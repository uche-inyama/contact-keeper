import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';


const Register = () => {
  const navigate = useNavigate();

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  
  const { setAlert } =  alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/');
    }
    if(error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    } 
     // eslint-disable-next-line 
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || password === ''){
      setAlert('Please enter all fields', 'danger', 10000);
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    }
    console.log('register user');
    register({
      name,
      email,
      password
    });
  }

  return (
    <div className='form-container'>
      <h1>
        Register <span className='text-primary'>Account</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'></label>
          <input type='text' name='name' value={name} placeholder="name" onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='email'></label>
          <input type='email' name='email' value={email} placeholder="email" onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='password'></label>
          <input type='password' name='password' value={password} placeholder="password" onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='password'></label>
          <input type='password' name='password2' value={password2} placeholder="confirm password" onChange={handleChange} />
        </div>
        
        <input type="submit" value="Register" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}

export default Register;