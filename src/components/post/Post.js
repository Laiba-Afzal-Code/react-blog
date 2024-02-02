import React from "react";
import "./post.css";

export default function Post() {
  return (
    <>
      <div className="post">
        <img
          src="https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg"
          alt="Post"
          className="postImg"
        />
        <div className="postinfo">
          <div className="postCats">
            <span className="postCat">Life</span>
            <span className="postCat">Music</span>
          </div>
          <span className="postTitle">Website of content with coding</span>
          <hr />
          <span className="postDate">1 hour ago</span>
          <p className="postDocs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui
            modi at, assumenda incidunt esse. Blanditiis, dolorum. Repudiandae
            debitis deserunt excepturi, quos eos nobis blanditiis, odio officia
            quam fuga similique? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis qui modi at, assumenda incidunt esse.
            Blanditiis, dolorum. Repudiandae debitis deserunt excepturi, quos
            eos nobis blanditiis, odio officia quam fuga similique?
          </p>
        </div>
      </div>
    </>
  );
}
