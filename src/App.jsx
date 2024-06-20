import React from "react";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import routes from "./projectRouting/Routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  console.log("This is our Node Environment :-", process.env.NODE_ENV);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default App;
