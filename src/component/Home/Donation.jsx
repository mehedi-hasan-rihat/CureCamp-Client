import React from "react";
import Container from "../sharedComponent/Container";

export default function Donation() {
  return (
    <Container>
    
 <div className=" my-32 shadow-xl shadow-gray-200/50 px-10 md:px-20 rounded-2xl py-12 border border-gray-200/70 bg-white/20">


 <h2 className="text-center text-4xl pb-12  font-semibold"> Donate now and be a part of this noble cause!

</h2>
 <div className="flex flex-col md:flex-row">
      
      <div className="w-[40%]">
        <h4 className="text-3xl max-w-xl leading-snug text-gray-800">
          Your Donation will help level up the lives of people in need
        </h4>
      </div>

      <div className="flex-1 space-y-8 md:pl-10 ">
        <p className="text-lg  text-gray-800 font-medium">
          Help us provide free healthcare services, essential medicines, and 
          medical check-ups to those in need. Your contribution can make a 
          difference in ensuring quality treatment for underprivileged 
          communities. Join us in bringing hope and healing!
        </p>

        <div className="w-max group cursor-pointer flex items-center justify-between gap-2 rounded-full border border-blue-600 bg-blue-600 px-4 py-[2px] transition-all hover:bg-transparent hover:shadow-lg focus:outline-none focus:ring shadow-md">
          <span className="font-medium font-poppins text-white transition-colors group-hover:text-blue-600 titan">
            Donate Now
          </span>

          <span className="shrink-0 rounded-full border border-current bg-white p-2 text-blue-600 transition-all group-hover:scale-105">
            <svg
              className="size-4 -rotate-45 group-hover:rotate-0 duration-300"
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
 </div>
    </Container>
  );
}
