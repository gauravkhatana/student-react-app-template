import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { global } from "../projectContext/Context";

const Login = () => {
  const [userData, setUseData] = useState({});
  let navigate = useNavigate();
  let { validate } = useContext(global);

  const formHandler = (e) => {
    e.preventDefault();

    let user = validate(userData);
    console.log(user);

    if (user != false) {
      toast.success("Logged in successfully");
      navigate("/home");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUseData({ ...userData, [name]: value });
  };
  return (
    <section className="login">
      <button id="back" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="form">
        <form action="" onSubmit={formHandler}>
          <input
            type="email"
            name="email"
            required
            value={userData.username}
            placeholder="Email"
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            placeholder="Password"
            onChange={changeHandler}
          />
          <div className="form-btn">
            <button>Login</button>
            <Link to={"/signup"}>Signup</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
