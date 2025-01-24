import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { HiBackward } from "react-icons/hi2";
import { Helmet } from 'react-helmet-async';

import useRole from "../hook/useRole";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(() => !isSidebarOpen);
  };
  const [role, isLoading] = useRole();
  if (isLoading) return <p>Loading</p>;
  return (
    <div> <Helmet>  <title>Cure Camp | Dashboard</title></Helmet>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-500/90 text-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col p-5 min-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <button onClick={toggleSidebar} className="md:hidden text-white">
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <ul className="space-y-3">
            { role === "admin"  && [
              { path: "/dashboard", label: "Add a Camp", exact: true }, // Exact path
              { path: "manage-camps", label: "Manage Camps" },
              {
                path: "manage-registered-camps",
                label: "Manage Registered Camps",
              },
             
              { path: "profile", label: "Profile" },
            ].map(({ path, label, exact }) => (
              <NavLink
                key={path}
                to={path}
                end={exact} // Use `end` for exact matching
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive ? "bg-blue-600" : "hover:bg-blue-400"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}


            { role == "user"  && [
              
              { path: "analytics", label: "Analytics" },
              { path: "registered-camps", label: "Registered Camps" },
              { path: "payment-history", label: "Payment History" },
              { path: "profile", label: "Profile" },
            ].map(({ path, label, exact }) => (
              <NavLink
                key={path}
                to={path}
                end={exact} // Use `end` for exact matching
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive ? "bg-blue-600" : "hover:bg-blue-400"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </ul>

          <div className="flex-grow flex items-end">
           <Link to='/' className="flex items-center gap-1 border border-slate-50 py-1 rounded px-2 cursor-pointer"> <HiBackward/><p>Back Home</p></Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-[#F4F9FF]">
        {/* Mobile Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-[#F4F9FF] shadow-md md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >
            {isSidebarOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
          <Link to='/' className="flex items-center gap-1 border border-gray-200 py-1 rounded px-2 cursor-pointer"> <HiBackward/><p>Back Home</p></Link>
        </div>

        {/* Page Content */}
        <div className="p-5 md:ml-64 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
