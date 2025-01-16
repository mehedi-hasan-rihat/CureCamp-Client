import React from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";

export default function CampCard({ camp }) {
  const {
    campName,
    campFees,
    date,
    healthcareProfessional,
    image,
    participantCount,
    location,
    time,
    description,
  } = camp || {};
  return (
  <div className="">






<div className=" bg-blue-100/20 ">
    <img
      alt=""
      src={image}
      className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72 bg-blue-100/20"
    />

    <div className="relative bg-blue-100/20 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 flex flex-col ">
      <div className="w-full h-[100px]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {campName}
          </h3>
          <p className="flex gap-1 items-center ">
            {" "}
            <BsPeople />
            {participantCount}
          </p>
        </div>

        <div className="flex mt-1 gap-2 items-center text-[14px] bg-slate-200/80 w-max rounded pl-1 font-semibold">
          <FaUserDoctor />
          <p className="pr-3">{healthcareProfessional}</p>
        </div>
        <div className="mt-4">
          <p className="text-pretty text-sm text-gray-500">
            {description.slice(0, 200)}...
          </p>
        </div>
      </div>

      <div className="mt-6 text-[14px] flex-1 ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center ">
            <CiCalendarDate />
            <p className="">{date}</p>
          </div>

          <p className="flex gap-2 items-center mb-1">
            {" "}
            <IoTimeOutline />
            {time}
          </p>
        </div>

      <div className="flex justify-between">
      <p className="flex gap-2 items-center">
          {" "}
          <CiLocationOn />
          {location}
        </p>
        <p className="flex gap-1 items-center">
          {" "}
          <FaDollarSign/>
          {campFees}
        </p>
      </div>

        <div className="text-end mt-5">
        <Link to='/available-campain' className="py-1 px-3 bg-transparent outline outline-2 outline-primary text-[16px] hover:bg-primary duration-300 rounded hover:text-white font-semibold">Details</Link>
        </div>
      </div>
    </div>
  </div>


  </div>
  );
}
