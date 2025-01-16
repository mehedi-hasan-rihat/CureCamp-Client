import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import path from "path";
import Home from "../pages/Home";
import AvailableCamp from "../pages/AvailableCamp";
import Authlayout from "../layout/Authlayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CampDetails from "../pages/CampDetails";

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
       },
       {
        path : '/camp-details/:id',
        element : <CampDetails/>
       }
      ]},
      {
        path : '/auth',
        element : <Authlayout/>,
        children : [
          {
            path : 'signIn',
            element : <SignIn/>
          },
          {
            path : 'signUp',
            element : <SignUp/>
          }
        ]
      }
    
  ]);

export default router;

