// // import React, { useState } from "react";
// // import { NavLink, Outlet } from "react-router-dom";

// // export default function Dashboard() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <div className="bg-[#F4F9FF] min-h-screen flex flex-col lg:flex-row">
// //       {/* Hamburger button (Mobile view) */}
// //       <div className="lg:hidden p-5">
// //         <button onClick={toggleMenu} className="text-black">
// //           {/* Hamburger icon */}
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             strokeWidth="2"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               d="M4 6h16M4 12h16M4 18h16"
// //             />
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Sidebar */}
// //       <div
// //         className={`${
// //           isMenuOpen ? "translate-x-0" : "-translate-x-full"
// //         } lg:translate-x-0 transform transition-transform duration-300 ease-in-out bg-blue-700 text-white w-[240px] p-5 z-50 min-h-screen h-full sticky top-0`}
// //       >
// //         <div className="flex justify-between items-center mb-5">
// //           <h2 className="text-xl font-bold">Dashboard</h2>
// //           {/* Close button (Mobile view) */}
// //           <button onClick={toggleMenu} className="lg:hidden text-white">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               strokeWidth="2"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             </svg>
// //           </button>
// //         </div>

// //         <ul className="space-y-3">
// //           <NavLink
// //             to="profile"
// //             className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Profile
// //           </NavLink>
// //           <NavLink
// //             to="/dashboard"
// //             className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Add a Camp
// //           </NavLink>
// //           <NavLink
// //             to="manage-camps"
// //             className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Manage Camps
// //           </NavLink>
// //           <NavLink
// //             to="manage-registered-camps"
// //             className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Manage Registered Camps
// //           </NavLink>
// //           <NavLink
// //             to="analytics"
// //             className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Analytics
// //           </NavLink>
// //           <NavLink
// //             to="registered-camps"
// //             className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Registered Camps
// //           </NavLink>
// //           <NavLink
// //             to="payment-history"
// //             className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Payment History
// //           </NavLink>
// //         </ul>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 p-4 lg:w-[calc(100vw-240px)]">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <div
//         className={`overflow-x-hidden fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md transform transition-transform duration-300 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0`}
//       >
//         <div
//           className={`${
//             HiMenu ? "translate-x-0" : "-translate-x-full"
//           } lg:translate-x-0 transform transition-transform duration-300 ease-in-out  bg-blue-500 text-white w-full p-5 z-50 min-h-screen h-full sticky top-0`}
//         >
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-xl font-bold">Dashboard</h2>
//             {/* Close button (Mobile view) */}
//             <button onClick={toggleSidebar} className="lg:hidden text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           <ul className="space-y-3">
//             <NavLink
//               to="profile"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
//             >
//               Profile
//             </NavLink>
//             <NavLink
//               to="/dashboard"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
//             >
//               Add a Camp
//             </NavLink>
//             <NavLink
//               to="manage-camps"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
//             >
//               Manage Camps
//             </NavLink>
//             <NavLink
//               to="manage-registered-camps"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
//             >
//               Manage Registered Camps
//             </NavLink>
//             <NavLink
//               to="analytics"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
//             >
//               Analytics
//             </NavLink>
//             <NavLink
//               to="registered-camps"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
//             >
//               Registered Camps
//             </NavLink>
//             <NavLink
//               to="payment-history"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition"
//             >
//               Payment History
//             </NavLink>
//           </ul>
//         </div>
//       </div>

//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       <div className="flex-1 min-h-screen bg-background">
//         <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-white shadow-md md:hidden">
//           <button
//             onClick={toggleSidebar}
//             className="text-gray-700 focus:outline-none"
//           >
//             {isSidebarOpen ? (
//               <HiX className="w-6 h-6" />
//             ) : (
//               <HiMenu className="w-6 h-6" />
//             )}
//           </button>
//           <h1 className="text-lg font-bold">Dashboard</h1>
//         </div>

//         <div className="p-5 md:ml-64 mt-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-500 text-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col p-5 min-h-screen">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <button onClick={toggleSidebar} className="md:hidden text-white">
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <ul className="space-y-3">
  {[
    { path: "profile", label: "Profile" },
    { path: "/dashboard", label: "Add a Camp", exact: true }, // Exact path
    { path: "manage-camps", label: "Manage Camps" },
    { path: "manage-registered-camps", label: "Manage Registered Camps" },
    { path: "analytics", label: "Analytics" },
    { path: "registered-camps", label: "Registered Camps" },
    { path: "payment-history", label: "Payment History" },
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
        </div>
      </div>

      {/* Overlay for Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Mobile Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-white shadow-md md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >
            {isSidebarOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>

        {/* Page Content */}
        <div className="p-5 md:ml-64 mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
