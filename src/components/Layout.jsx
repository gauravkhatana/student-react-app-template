import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Context from "../projectContext/Context";

const Layout = () => {
  return (
    <div>
      <Context>
        <Toaster />
        <Outlet />
      </Context>
    </div>
  );
};

export default Layout;
