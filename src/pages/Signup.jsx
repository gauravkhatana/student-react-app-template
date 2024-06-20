import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUseData] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUseData({ ...userData, [name]: value });
  };

  const fromHandler = (e) => {
    e.preventDefault();
    const serverData = axios.post("http://localhost:3000/users", userData);
    console.log(serverData);
    toast.success("User Signed-Up succeessfully");
  };
  return (
    <section className="signup">
      <button id="back" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="form" onSubmit={fromHandler}>
        <form action="">
          <input
            type="text"
            name="firstname"
            value={userData.firstname}
            placeholder="First Name"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            placeholder="Last Name"
            onChange={changeHandler}
          />
          <input
            type="tel"
            name="number"
            value={userData.number}
            placeholder="91+ 9999999999"
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="xyz@gmail.com"
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
            <Link to={"/login"}>Login</Link>
            <button>Signup</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
