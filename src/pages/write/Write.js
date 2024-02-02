import React from "react";
import "./write.css";

export default function Write() {
  return (
    <>
      <div className="write">
        <img
          src="https://w0.peakpx.com/wallpaper/809/145/HD-wallpaper-code-dots-dev-html.jpg"
          alt="writeimg"
          className="writeImg"
        />
        <form action="submit" className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="fa-solid fa-plus writeIcon"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              name="text"
              id="text"
              placeholder="Tell your Story..."
              type="text"
              className="writetext writeInput"
            ></textarea>
          </div>
          <button className="writebtn">Publish</button>
        </form>
      </div>
    </>
  );
}
