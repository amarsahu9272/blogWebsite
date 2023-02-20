import React from "react";
import "./Homepage.css";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";
// import Sidebar from "../../component/sidebar/Sidebar";

function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Outlet />
      </div>
    </>
  );
}

export default Homepage;
