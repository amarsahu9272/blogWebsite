import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import profilePic from '../../utils/Amr.jpg'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={profilePic}
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Link className="link" to="https://www.linkedin.com/in/amar-s-4b3359145/">
            <i className="sidebarIcon fab fa-linkedin"></i>
          </Link>
          <Link className="link" to="https://twitter.com/nanapatekar9272">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </Link>
          <Link className="link" to="https://www.facebook.com/">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </Link>
          <Link className="link" to="https://www.instagram.com/">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </Link>
          <Link className="link" to="/login">
          <i className="sidebarIcon fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
