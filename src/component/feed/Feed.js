import React from "react";
import Post from "../post/Post";
import Sidebar from "../sidebar/Sidebar";
import "./Feed.css";

function Feed() {
  return (
    <div className="feeds">
      <div className="feed">
        <Post img="https://engage4more.com/blog/wp-content/uploads/2022/09/Staccato_-Blog-bannerr_1280x478-1-1024x382.jpg" />
        <Post img="https://m.economictimes.com/thumb/msid-88607879,width-1200,height-900,resizemode-4,imgsize-55812/education.jpg" />
        <Post img="https://www.akshartours.com/wp-content/uploads/2020/07/Best-Place-to-Visit-in-Jharkhand.jpg" />
        <Post img="https://assets.weforum.org/report/image/QJATp5qsE9HJsjVxSwJ7Kc0YkXSr351h40FL-Cnp0mQ.jpg" />
        <Post img="https://c.ndtvimg.com/2023-01/pntn5qu8_supreme-court-getty_625x300_16_January_23.jpg?downsize=570:351" />
        <Post img="https://www.digitaltrends.com/wp-content/uploads/2023/02/samsung-galaxy-s23-ultra-green-back-6.jpg?p=1" />
      </div>
      <Sidebar />
    </div>
  );
}

export default Feed;
