import React, { useContext, useEffect, useState } from "react";
import "./singlepost.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);

  // fetch post data from backend api
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data);
      setDesc(res.data.desc);
      setTitle(res.data.title);
    };
    getPost();
  }, [path]);

  // delete post with user access
  const hendleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { userId: user.userId },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  const hendleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        userId: user.userId,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="singlepost">
        <div className="singlePostWarpper">
          {post.img && (
            <img
              src={
                post.img
                  ? post.img
                  : "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg"
              }
              alt="post"
              className="singlePostImg"
            />
          )}
          {updateMode ? (
            <input
              type="text"
              className="postTitleUpdate"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              {post.userId === user?.userId && (
                <span className="singlePostEdit">
                  <i
                    className="fa-regular fa-pen-to-square singlePostIcon"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can singlePostIcon"
                    onClick={hendleDelete}
                  ></i>
                </span>
              )}
            </h1>
          )}
        </div>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.username ? post.username : "unknown"}</b>
          </span>
          <span className="singlePostDate">
            Pulish: <b>{new Date(post.createdAt).toDateString()}</b>
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="postDescUpdate"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostContent">{desc}</p>
        )}
        {updateMode && (
          <button className="updateBtn" onClick={hendleUpdate}>
            Update
          </button>
        )}
      </div>
    </>
  );
}
