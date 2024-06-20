import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";

const ViewMore = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const back = (e) => {
    if (e.target.className == "view") navigate("/home/allstudents");
  };

  return (
    <section className="view" onClick={back}>
      <div className="userData">
        <div className="logo">
          <div className="ulogo">
            <FaUserGraduate />
          </div>
        </div>

        <p>
          {state.firstname} {state.lastname}
        </p>
        <p>{state.number}</p>
        <p>{state.email}</p>
      </div>
    </section>
  );
};

export default ViewMore;
