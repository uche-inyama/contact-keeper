import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a call to update state by creating a new user
    console.log('Login user');
  }

  return (
    <div className='form-container'>
      <h1>
        Login <span className='text-primary'>Account</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'></label>
          <input type='email' name='email' value={email} onChange={handleChange} placeholder="email"/>
        </div>

        <div className='form-group'>
          <label htmlFor='password'></label>
          <input type='password' name='password' value={password} onChange={handleChange} placeholder="password" />
        </div>
        
        <input type="submit" value="Login" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}

export default Login;