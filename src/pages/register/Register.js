import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Validate } from "../../utils/Validate";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    username:"",
    email: "",
    tel:"",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      let userList =
        JSON.parse(localStorage.getItem("registeredUserList")) || [];
      userList.push(formValues);
      localStorage.setItem("registeredUserList", JSON.stringify(userList));
      navigate("../login/Login");
    }
  }, [formErrors, isSubmit, formValues, navigate]);
  return (
    <div className="register">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div style={{ color: "green" }}>Registered successfully</div>
      ) : null}
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          className="registerInput"
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={formValues.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{formErrors.name}</p>
        <label for="username">Username</label>
        <input
          className="registerInput"
          type="text"
          name="username"
          placeholder="Enter your username..."
          value={formValues.username}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{formErrors.username}</p>
        <label for="email">Email</label>
        <input
          className="registerInput"
          type="text"
          name="email"
          placeholder="Enter your email..."
          value={formValues.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{formErrors.email}</p>
        <label for="tel">Phone</label>
        <input
          className="registerInput"
          type="tel"
          name="tel"
          placeholder="987-654-3210"
          value={formValues.tel}
          pattern="[0-9]{10}"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{formErrors.tel}</p>
        <label for="password">Password</label>
        <input
          className="registerInput"
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={formValues.password}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{formErrors.password}</p>
        <button className="registerButton">Register</button>
      </form>
      <Link className="link" to="/Login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}

export default Register;
