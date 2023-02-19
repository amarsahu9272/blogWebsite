import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Validate } from "../../utils/Validate";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
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
      navigate("../login/Login")
    }
  }, [formErrors, isSubmit, formValues, navigate]);
  return (
    <div className="register">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div style={{ color: "green" }}>Registered successfully</div>
      ) : null}
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          name="name"
          placeholder="Enter your username..."
          value={formValues.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{formErrors.name}</p>
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          name="email"
          placeholder="Enter your email..."
          value={formValues.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{formErrors.email}</p>
        <label>Password</label>
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
      <Link className="link" to='/Login'>
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}

export default Register;
