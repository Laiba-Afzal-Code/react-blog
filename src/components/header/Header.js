import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="titleSmall">React & Node</span>
          <span className="titleBig">Blogs</span>
        </div>
        <img
          className="headerImg"
          src="https://w0.peakpx.com/wallpaper/400/451/HD-wallpaper-plant-leaves-water-drops-dark-background-nature.jpg"
          alt="header"
        />
      </div>
    </>
  );
}
