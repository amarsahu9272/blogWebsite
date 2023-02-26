import React from "react";
import Post from "../post/Post";
import Sidebar from "../sidebar/Sidebar";
import "./Feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="feeds">
      <div className="feed">
        {posts.map((p) => (
          <Post post={p} />
        ))}

        {/* <Post img="https://engage4more.com/blog/wp-content/uploads/2022/09/Staccato_-Blog-bannerr_1280x478-1-1024x382.jpg" />
        <Post img="https://m.economictimes.com/thumb/msid-88607879,width-1200,height-900,resizemode-4,imgsize-55812/education.jpg" />
        <Post img="https://smartblogger.com/wp-content/uploads/2014/01/promote-your-art-v2.jpg" />
        <Post img="https://blog.plantwise.org/wp-content/uploads/sites/7/2021/12/Untitled-design-33-1024x576.png" />
        <Post img="https://c.ndtvimg.com/2023-01/pntn5qu8_supreme-court-getty_625x300_16_January_23.jpg?downsize=570:351" />
        <Post img="https://www.digitaltrends.com/wp-content/uploads/2023/02/samsung-galaxy-s23-ultra-green-back-6.jpg?p=1" /> */}
      </div>
      <Sidebar />
    </div>
  );
}

export default Feed;
