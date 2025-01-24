import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export default function ErrorPage() {
  return (
    <div className="bg-gray-950 h-screen grid place-items-center px-3">
    <div className="flex flex-col">
    <div className="flex justify-between gap-5 items-center">
        <h2 className="text-7xl font-bold text-red-700">404</h2>
        <div className="">
          <h4 className="text-2xl text-red-600 font-semibold">Oops! You're lost.</h4>
          <p className="text-red-600">The page you are looking for was not found.</p>
        </div>
      </div>
      <Button className="mt-3"><Link to='/' className="btn btn-warning my-3 text-white">Back to home</Link></Button>
    </div>
    </div>
  );
}
