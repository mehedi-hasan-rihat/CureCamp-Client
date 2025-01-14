import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import path from "path";
import Home from "../pages/Home";
import AvailableCamp from "../pages/AvailableCamp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children : [
       {
        path : '/',
        element : <Home/>
       },
       {
        path : '/available-campain',
        element : <AvailableCamp/>
       }
      ]}
    
  ]);

export default router;

