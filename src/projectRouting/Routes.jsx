import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import DefaultLanding from "../components/DefaultLanding";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreateStudent from "../components/CreateStudent";
import AllStudents from "../components/AllStudents";
import Careers from "../components/Careers";
import About from "../components/About";
import UpdateStudent from "../components/UpdateStudent";
import ViewMore from "../components/ViewMore";
import React from "react";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
        children: [
          { path: "/", element: <DefaultLanding /> },
          { path: "/login", element: <Login /> },
          { path: "/signup", element: <Signup /> },
          { path: "/contact", element: <Contact /> },
        ],
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          { path: "/home", element: <About /> },
          { path: "/home/:id", element: <Home /> },
          { path: "/home/createstudents", element: <CreateStudent /> },
          ,
          {
            path: "/home/allstudents",
            element: <AllStudents />,
            children: [
              {
                path: "/home/allstudents/updatestudents",
                element: <UpdateStudent />,
              },
              {
                path: "/home/allstudents/viewmore",
                element: <ViewMore />,
              },
            ],
          },
          { path: "/home/careers", element: <Careers /> },
          { path: "/home/about", element: <About /> },
        ],
      },
    ],
  },
]);

export default routes;
