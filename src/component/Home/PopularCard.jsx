import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export default function PopularCard({ campData }) {
  const {
    campName,
    campFees,
    date,
    healthcareProfessional,
    image,
    participantCount,
    location,
    time
  } = campData || {};
  return (
    <div className="rounded-lg p-2 hover:shadow-md border border-gray-200 duration-300 shadow-indigo-100 flex flex-col gap-5">
      <div className="h-[90%]">
        <img
          alt=""
          src={image}
          className="h-56 w-full rounded-md object-cover mb-4"
        />

        <div className=" xl:px-3">
          <h3 className="text-md font-semibold">{campName}</h3>
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex gap-2 items-center text-[14px] bg-slate-200/80 w-max rounded pl-1 font-semibold">
              <FaUserDoctor />
              <p className="pr-3">{healthcareProfessional}</p>
            </div>

            <p className="flex flex-1 gap-2 items-center text-[12px] bg-slate-200/80 w-max rounded pl-1 font-mono">
              {" "}
              <CiLocationOn />
            {location}
            </p>
          </div>
          <div className="mt-3 flex justify-between gap-3 text-[13px]">
            <div className="flex-1">
              <p className="flex gap-2 items-center ">
                {" "}
                <CiCalendarDate />
                {date}
              </p>
              <p className="flex gap-2 items-center ">
                {" "}
                <IoTimeOutline />
                {time}
              </p>
            </div>
            <div className="border "></div>

            <div className="flex-1">
              <p className="flex gap-2 items-center ">
                <FaDollarSign />
               {campFees}
              </p>
              <p className="flex gap-2 items-center ">
                <BsPeople />
               {participantCount} Participants
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 xl:px-3">
        <div className="max-w-48 group cursor-pointer flex items-center rounded-md  transition-colors hover:bg-transparent focus:outline-none focus:ring  ">
          <span className=" font-mono  transition-colors group-hover:text-primary ">
            See Details
          </span>

          <span className=" rounded-full  py-2 pl-1 group-hover:text-primary ">
            <svg
              className="size-5 -rotate-45 group-hover:rotate-0 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
