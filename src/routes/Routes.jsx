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
import AdminRoute from "./adminRoute";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage/>,
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
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element:<PrivateRoute><AdminRoute> <AddCamp /></AdminRoute></PrivateRoute>,
      },
      {
        path: "manage-camps",
        element:<PrivateRoute> <AdminRoute><ManageCamp /></AdminRoute></PrivateRoute>,
      },
      {
        path: "manage-registered-camps",
        element: (
          <PrivateRoute><AdminRoute>
            <ManageRegisteredCamp />
          </AdminRoute></PrivateRoute>
        ),
      },
      {
        path: "analytics",
        element: <PrivateRoute><Analytics /></PrivateRoute>,
      },
      {
        path: "registered-camps",
        element: <PrivateRoute><RegisteredCamps /></PrivateRoute>,
      },
      {
        path: "payment-history",
        element: <PrivateRoute><PaymentHistory /></PrivateRoute>,
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
    ],
  },
]);

export default router;
