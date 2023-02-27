import React from "react";
import "./Header.css";
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../../RecoilState";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "../../utils/Amr.jpg";
function Header() {
  const PF = "http://localhost:5000/images/";
  const navigate = useNavigate();
  const isuserlogin = useRecoilValue(isLoginAtom);

  const handleLogout = () => {
    navigate("/Register");
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="headerIcon" onClick={() => navigate(-1)}>
          <i className="fas fa-long-arrow-left"></i>
        </div>
        <Link className="link headerIcon" to="/">
          <img
            className="headerLogoImg"
            src="https://blog.roblox.com/wp-content/uploads/2022/08/RBLX_Logo_Launch_Wordmark.png"
            alt=""
          />
        </Link>
      </div>
      <div className="headerCenter">
        <ul className="headerList">
          <li className="headerListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="headerListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="headerRight">
        {isuserlogin ? (
          <div className="headerRight">
            <Link className="link" to="/settings">
              <img className="headerImg" src={profilePic} alt="" />
            </Link>
            <ul className="headerList">
              <li className="headerListItem" onClick={handleLogout}>
                <Link className="link" to="/login">
                  LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="headerList">
            <li className="headerListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="headerListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
