import React, { useContext, useRef } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { loginCall } from "../../apiCall";

export default function Login() {
  const { user, isFatching, error, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const hendleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
      );
    navigate("/");
  };
  console.log(user);
  console.log(error);

  return (
    <>
      <div className="login">
        <span className="logInTitle">LogIn</span>
        <form className="loginForm" onSubmit={hendleSubmit}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email..."
            className="loginInput"
            ref={email}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            className="loginInput"
            ref={password}
            required
            minLength={6}
          />
          <button className="loginBtn" type="submit" disabled={isFatching}>
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
          </button>
        </form>
        <button className="loginRegisterBtn">
          <Link className="link" to="/register">
          {isFatching ? (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Register"
                )}
            
          </Link>
        </button>
      </div>
    </>
  );
}
