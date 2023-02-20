import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://photos.google.com/share/AF1QipMQSadr4_mggszYhg6PvjY2u5UggUhdLcywudDu2s8JzuHbIpUoaDhxoA64-EPuGQ/photo/AF1QipPbuODw3b2UXfK72yLRNVixEsFD58a7HZ0hfIg7?key=cGMwSGgwMmRkaHpYQ2NCZThWNGVQVlU1d0Q2M3dn"
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
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
