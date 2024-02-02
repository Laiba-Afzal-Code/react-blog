import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = true;
  return (
    <>
      <div className="topbar">
        <div className="topLeft">
          <a href="https://www.facebook.com/" target="blanlk">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://twitter.com/" target="blanlk">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="blanlk">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://www.pinterest.com/" target="blanlk">
            <i className="fa-brands fa-pinterest"></i>
          </a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem "><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem"><Link className="link" to="/single">BLOG</Link></li>
            <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/login">{user && "LOGOUT"}</Link></li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
 <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-_vFu0MKdOmb1roApAoaHrqVrDpHeRPEcw&usqp=CAU"
 alt="profile"
 className="profileimg"
/>
          ) : (
            <ul className="topList">
              <li className="topListItem"><Link className="link topListItem" to="/login">LogIn</Link></li>
            
            <Link className="link topListItem" to="/register">Register</Link>
            </ul>
            )}
         
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}
