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
import Dashboard from "../layout/Dashboard";
import AddCamp from "../pages/Dashboard/Admin/AddCamp";
import ManageCamp from "../pages/Dashboard/Admin/ManageCamp";
import ManageRegisteredCamp from "../pages/Dashboard/Admin/ManageRegisteredCamp";
import Analytics from "../pages/Dashboard/Participent/Analytics";
import RegisteredCamps from "../pages/Dashboard/Participent/RegisteredCamps";
import PaymentHistory from "../pages/Dashboard/Participent/PaymentHistory";
import Profile from "../pages/Dashboard/Profile";
import UpdateCampain from "../component/Admin/UpdateCampain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/available-campain",
        element: <AvailableCamp />,
      },
      {
        path: "/camp-details/:id",
        element: <CampDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authlayout />,
    children: [
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <AddCamp />,
      },
      {
        path : 'manage-camps',
        element: <ManageCamp/>
      },
      {
        path : 'manage-registered-camps',
        element: <ManageRegisteredCamp/>
      },
      {
        path : 'analytics',
        element: <Analytics/>
      },
      {
        path : 'registered-camps',
        element: <RegisteredCamps/>
      },
      {
        path : 'payment-history',
        element: <PaymentHistory/>
      },
      {
        path : 'profile',
        element: <Profile/>
      },
    ],
  },
]);

export default router;
