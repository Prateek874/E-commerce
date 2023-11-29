import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // useEffect(()=>{
  //   const auth = localStorage.getItem('user')
  //  if(auth){
  //   navigate('/home')
  //  }
  // },)
  

  const handleSignup = async () => {
    let result = await fetch('http://localhost:5001/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'content-type':'application/json'
      }
    })
    result = await result.json()
    console.log(result)
    navigate('/login'); // Redirect to login after signup
  };

  return (
    <div className="signup-container">
            <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value )}
      /> <br />
      <input
        type="email"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail( e.target.value )}
      /> <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value )}
      /><br/>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
