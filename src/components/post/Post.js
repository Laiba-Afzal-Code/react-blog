import React, { useState } from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  return (
    <>
      <div className="post">
        {post.img && (

          <img
          src={post.img}
          alt="Post"
          className="postImg"
          />
          )}
        <div className="postinfo">
          <div className="postCats">
            {post.cats.map((c)=>(
              <span className="postCat">{c.cats}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
          <p className="postDocs">
           {post.desc}
          </p>
        </div>
      </div>
    </>
  );
}
