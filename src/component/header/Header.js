import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
function Header() {
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
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
          <li className="headerListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="headerRight">
        {user ? (
          <Link className="link" to="/settings">
            <img className="headerImg" src={PF + user.profilePic} alt="" />
          </Link>
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
