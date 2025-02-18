import React from "react";
import Container from "../sharedComponent/Container";

export default function NewsLetter() {
  return (
    <Container>
      <div className="flex items-center justify-center pr-32 border border-gray-200/70 shadow-sm rounded-lg py-12">
        <div className="w-full flex justify-center">
          <img
            src="https://static.live.templately.com/woocommerce/2022/12/6f62efd8-funzone-sub-img.png"
            alt=""
            className=""
          />
        </div>
        <div className="  max-w-lg  ">
          <h2 className="text-4xl titan">Subscribe To Our Newsletter</h2>
          <p className=" secondary-font mt-8">
            Want to get special offers before they run out? Subscribe to our
            email to get exclusive discounts and offers.
          </p>
         <div className="relative max-w-md mt-2">
         <input className="px-4 py-3 w-full rounded-full bg-[#deddff] placeholder:text-black placeholder:font-semibold outline-none font-semibold" type="email" placeholder="Enter Your Email" />
         <button className=" px-5 uppercase py-2 bg-[#6756ff] text-white font-semibold rounded-full absolute left-[50%] bottom-1">Subscribe</button>
         </div>
        </div>
      </div>
    </Container>
  );
}
