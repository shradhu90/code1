import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: Implement login functionality

    // Set token in local storage
    localStorage.setItem('token', 'your_jwt_token_here');

    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="Email1" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Login;