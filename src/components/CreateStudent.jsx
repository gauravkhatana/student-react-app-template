import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, Outlet, useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [userData, setUseData] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUseData({ ...userData, [name]: value });
  };

  const fromHandler = (e) => {
    e.preventDefault();
    const serverData = axios.post("http://localhost:5000/users", userData);
    toast.success("User Added succeessfully");
    navigate("/home/about");
  };
  return (
    <>
      <section className="createstu">
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
              <button>Add</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateStudent;
