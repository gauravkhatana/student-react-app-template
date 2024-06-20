import React, { useContext } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { global } from "../projectContext/Context";

const Home = () => {
  /* const location = useLocation();
  let [user] = location.state;
  console.log(user);
   */
  let data = useContext(global);
  let { loginUser, setLoginUser } = data;
  console.log(data);

  return (
    <section className="home">
      <div className="nav">
        <div className="logo"> Welcome Mr. {loginUser.firstname}</div>
        <atricle className="btn">
          <button className="menu btn-primary ">
            <div className="mbt"> Menu</div>
            <div className="mn">
              <ul type="none" className="menuopt">
                <li>
                  <Link to={"/home/createstudents"}>Create Student</Link>
                </li>
                <li>
                  <Link to={"/home/allstudents"}>All Students</Link>
                </li>
                <li>
                  <Link to={"/home/careers"}>Carrers</Link>
                </li>
                <li>
                  <Link to={"/home/about"}>About</Link>
                </li>
                <li></li>
                <li onClick={() => setLoginUser({})}>
                  <Link to={"/"}>Logout</Link>
                </li>
              </ul>
            </div>
          </button>
        </atricle>
      </div>

      <Outlet />
    </section>
  );
};

export default Home;
