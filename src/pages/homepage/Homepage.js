import React from "react";
import "./Homepage.css";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../../RecoilState";
import Login from '../../pages/login/Login'

function Homepage() {
  const isUserLogin = useRecoilValue(isLoginAtom)
  
  return (
    <>
      {isUserLogin?<div>
        <Header />
        <div className="home">
          <Outlet />
        </div>
      </div>:<Login/>}
    </>
  );
}

export default Homepage;
