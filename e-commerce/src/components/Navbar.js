import React, { useEffect, useState } from 'react';

import { Form, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import './navbar.css'
import store from '../app/store';


const Navbar = () => {
  const storeOutput =  useSelector((state)=> {return state.cart})
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.clear();
    navigate('/login');
  }
 return (

    <nav className='heading'>

    {
      auth?<li><Link  onClick ={logout} to= "/login" className='active'>Logout</Link></li>
      :<>
      <li><Link to="/" ClassName="active">Signup</Link></li>
      <li><Link to="/login" ClassName="active">Login</Link></li>
      </>
    }
      <li><Link to="/home" ClassName="active">Home</Link></li>
      <li><Link to="/cart" ClassName="active" className="add-to-cart">Cart-{storeOutput.totalQuantity}</Link></li>

    </nav>

 );

};


export default Navbar;