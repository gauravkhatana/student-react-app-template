import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const UpdateStudent = () => {
  const { state } = useLocation();
  const [userData, setUseData] = useState({
    firstname: state.firstname,
    lastname: state.lastname,
    number: state.number,
    email: state.email,
    password: state.password,
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUseData({ ...userData, [name]: value });
  };

  const fromHandler = (e) => {
    e.preventDefault();
    const serverData = axios.put(
      `http://localhost:5000/users/${state.id}`,
      userData
    );
    console.log(serverData);
    toast.success("User Updated succeessfully");
    navigate("/home/allstudents");
  };
  const back = (e) => {
    if (e.target.className == "updatestu") navigate("/home/allstudents");
  };

  return (
    <>
      <section className="updatestu" onClick={back}>
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
              <button>Update</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateStudent;
