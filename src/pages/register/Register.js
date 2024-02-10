import React, { useContext, useRef, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Register() {
  const [error, setError] = useState()
  const {isFatching} = useContext(Context)
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const hendleSubmit = async (e) => {
    e.preventDefault();
    setError(true)
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register/user", user);
      navigate("/login");  
      console.log(res.data);
    } catch (error) {
      setError(true)
    }
  };
  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={hendleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username..."
            className="registerInput"
            ref={username}
            required
            minLength={6}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email..."
            className="registerInput"
            ref={email}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            className="registerInput"
            ref={password}
            required
            minLength={6}
          />
          <button className="registerBtn" type='submit' disabled={isFatching}>
            {isFatching ? (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Register"
                )}</button>
        </form>
        <button className="registerloginBtn" type="submit">
          <Link className="link" to="/login">
          {isFatching ? (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "LogIn"
                )}
          </Link>
        </button>
        {error && <span className="text-danger mt-3">Something want worng!</span>}
      </div>
    </>
  );
}
