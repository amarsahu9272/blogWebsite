import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import "./Settings.css";
import profilePic from "../../utils/Amr.jpg";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <Link to="/Login" className="link">
            <i class="fas fa-sign-out"></i>
          </Link>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <label htmlFor="fileInput">
              <img src={profilePic} alt="" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label for="name">Name</label>
          <input type="text" placeholder="Amar" name="name" />
          <label for="username">Username</label>
          <input type="text" placeholder="Amar123" name="username" />
          <label for="email">Email</label>
          <input type="email" placeholder="amar@gmail.com" name="email" />
          <label for="tel">Phone</label>
          <input
            type="tel"
            placeholder="987-654-3210"
            name="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <label for="password">Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          <span className="settingsTitleDelete">Delete Account </span>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
