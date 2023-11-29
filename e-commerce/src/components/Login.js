import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // useEffect(()=>{

  // })

  const handleLogin = async () => {
 
      console.log(email, password);
      let result = await fetch('http://localhost:5001/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          'content-type': 'application/json',
        },
      });
      if(result.status===200){
        result = await result.json();
      if(result.user.email){
        localStorage.setItem('user',result.user.email)
        navigate('/home');
      }
     
}
      else{
  alert("please enter correct details")
}
}

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{' '}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
  }

export default Login;
