import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost =async () => {
      const res = await axios.get("/post/");
      setPosts(res.data);
    };
    fetchPost();
  });
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
