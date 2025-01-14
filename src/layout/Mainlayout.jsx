import React from "react";
import Home from "../pages/Home";
import Navbar from "../component/sharedComponent/Navbar";
import Footer from "../component/sharedComponent/Footer";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <div className="bg-[#F4F9FF] text-[#3C3C3C] min-h-screen">
      <div className="border-b border-slate-100 sticky top-0 z-50 bg-[#F4F9FF]">
        <Navbar />
      </div>
     <Outlet/>

      <div className="">
        <Footer/>
      </div>
    </div>
  );
}
