import React from 'react';
import "./register.css"
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
    <div className="register">
        <span className="registerTitle">Register</span>
    <form className="registerForm">
        <label >Username</label>
        <input type="text" placeholder='Enter Username...' className='registerInput' />
        <label >Email</label>
        <input type="text" placeholder='Enter your Email...' className='registerInput' />
        <label >Password</label>
        <input type="password" placeholder='Enter your password...' className='registerInput' />
        <button className='registerBtn'>Register</button>
    </form>
      <button className='registerloginBtn'><Link className="link" to="/login">LogIn</Link></button>
    </div>
      
    </>
  )
}
