import React from 'react';
import "./login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <div className="login">
        <span className="logInTitle">LogIn</span>
    <form className="loginForm">
        <label >Email</label>
        <input type="text" placeholder='Enter your Email...' className='loginInput' />
        <label >Password</label>
        <input type="password" placeholder='Enter your password...' className='loginInput' />
        <button className='loginBtn'>LogIn</button>
    </form>
        <button className='loginRegisterBtn'><Link className="link" to="/register">Register</Link></button>
    </div>
      
    </>
  )
}
