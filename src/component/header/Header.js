import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
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
        <Link className="link" to="/">
          <img
            className="headerImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8MwHno1KFRBl1JJ9nytMzCFdpJEV2YVfQ4rHXpPxRiQTpDGQ57kUFLgm1lpoWxMY_5k&usqp=CAU"
            alt=""
          />
        </Link>

        {/* <ul className="headerList">
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
        </ul> */}
      </div>
    </div>
  );
}

export default Header;
