import React from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const hendleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <div className="contact">
        <div className="contactTitle">
          <h1 className="title">Blogs</h1>
          <span className="content">React & Development</span>
          <div className="contactline">Contact us for any kind of quiry!</div>
        </div>
        <form action="submit" className="contactForm">
          <label>Name:</label>
          <input type="text" placeholder="Enter your Name" />
          <label>Email:</label>
          <input type="email" placeholder="Enter your Email" />
          <label>Password:</label>
          <input type="Password" />
          <label>Quiry:</label>
          <select name="quiryoption" id="option">
            <option value="help">Help</option>
            <option value="services">Servics</option>
            <option value="blogs">Blogs</option>
          </select>
          <button type="submit" className="contactSubmit" onClick={hendleClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
