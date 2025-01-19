import React from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";

export default function AlternativeColum({ camp }) {
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
    _id,
  } = camp || {};
  return (
    <div className="rounded-xl border-2 border-gray-100 bg-white ">
      <div className="flex flex-col md:flex-row items-start gap-1 md:gap-4 p-4">
        <div className="h-[290px] md:h-[308px] w-full md:w-72 xl:w-52 flex items-center justify-center">
          <img
            alt=""
            src={image}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="relative bg-blue-100/20 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 flex flex-1 flex-col w-full">
          <div className="w-full h-32">
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
            <div className="flex justify-between mb-1">
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
                <FaDollarSign />
                {campFees}
              </p>
            </div>
            <div className="text-end mt-4">
              <Link
                to={`/camp-details/${_id}`}
                className="py-1 px-3 bg-transparent outline outline-2 outline-primary text-[16px] hover:bg-primary duration-300 rounded hover:text-white font-semibold"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
