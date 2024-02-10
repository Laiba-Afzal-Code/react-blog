import React, { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const hendleblogwrite = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData;
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.img = filename;
      try {
        await axios.post("http://localhost:8800/api/upload", data);
      } catch (error) {
        console.log(error)
      }
    }
    const res = await axios.post("http://localhost:8800/api/post/createblog", newPost);
    console.log(newPost)
    window.location.replace("/post/" + res.data._id)
  };
  return (
    <>
      <div className="write">
        {file && (

          <img
          src={URL.createObjectURL(file)}
          alt="writeimg"
          className="writeImg"
          />
          )}
        <form action="submit" className="writeForm" onSubmit={hendleblogwrite}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="fa-solid fa-plus writeIcon"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}/>
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              name="text"
              id="text"
              placeholder="Tell your Story..."
              type="text"
              className="writetext writeInput"
              onChange={(e)=>setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writebtn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}
