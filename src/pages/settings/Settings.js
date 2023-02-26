import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import "./Settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Validate } from "../../utils/Validate";

function Settings() {
  const [formValues, setFormValues] = useState({
    profilePic: "https://api.dicebear.com/5.x/avataaars/svg",
    name: "",
    username: "",
    email: "",
    tel: "",
    password: "",
    joinedDate: `${new Date().getMonth() + 1}-2023`,
    posts: [],
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value || "" });
  };
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValues));
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      name: formValues.name,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder={user.name}
            value={formValues.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            value={formValues.username}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.username}</p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formValues.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
