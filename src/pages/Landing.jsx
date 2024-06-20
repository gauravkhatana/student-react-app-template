import React from "react";
import { Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      
      <Outlet />
    </section>
  );
};

export default Landing;
