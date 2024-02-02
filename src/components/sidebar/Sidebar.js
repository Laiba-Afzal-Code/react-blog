import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">About Me</span>
          <img
            className="sidebarImg"
            src="https://images.genius.com/5117b1e73e576bacce6a0ade953f4820.1000x1000x1.jpg"
            alt="me"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            quibusdam et minima soluta eum? Laborum deleniti rem reiciendis
            fugiat natus, quidem distinctio, earum nisi illum praesentium,
            tenetur impedit enim voluptate!
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarlistItme">Life</li>
            <li className="sidebarlistItme">Music</li>
            <li className="sidebarlistItme">Style</li>
            <li className="sidebarlistItme">Sport</li>
            <li className="sidebarlistItme">Tech</li>
            <li className="sidebarlistItme">Coding</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarTitle">FOLLOW US</div>
          <div className="sidebarSocial">
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
        </div>
      </div>
    </>
  );
}
