import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#F4F9FF] min-h-screen flex flex-col lg:flex-row">
      {/* Hamburger button (Mobile view) */}
      <div className="lg:hidden p-5">
        <button onClick={toggleMenu} className="text-black">
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transform transition-transform duration-300 ease-in-out bg-blue-700 text-white w-[240px] p-5 z-50 min-h-screen h-full sticky top-0`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Dashboard</h2>
          {/* Close button (Mobile view) */}
          <button onClick={toggleMenu} className="lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="space-y-3">
          <NavLink
            to="profile"
            className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard"
            className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Add a Camp
          </NavLink>
          <NavLink
            to="manage-camps"
            className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Manage Camps
          </NavLink>
          <NavLink
            to="manage-registered-camps"
            className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Manage Registered Camps
          </NavLink>
          <NavLink
            to="analytics"
            className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Analytics
          </NavLink>
          <NavLink
            to="registered-camps"
            className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Registered Camps
          </NavLink>
          <NavLink
            to="payment-history"
            className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Payment History
          </NavLink>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:w-[calc(100vw-240px)]">
        <Outlet />
      </div>
    </div>
  );
}
