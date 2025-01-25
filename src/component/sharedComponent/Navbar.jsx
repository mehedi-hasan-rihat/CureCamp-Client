import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import useAuth from "../../hook/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { user, logOut } = useAuth();
  return (
    <Container>
      <nav className="sticky top-0 flex justify-between items-center font-medium  py-3">
        <div className="flex gap-2 items-center justify-center">
          <img
            src="https://i.ibb.co.com/t25qYcW/DALL-E-2025-01-14-10-50-58-A-sleek-and-modern-logo-design-with-no-text-featuring-a-minimalist-medica.webp"
            alt="logo"
            className="w-9 h-9 rounded-full"
          />
          <p className="hidden sm:block sm:text-xl font-semibold">CureCamp</p>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          {" "}
          <div className="">
            <ul className="flex gap-1 md:gap-3 text-sm md:text-base items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `p-1  ${isActive ? "text-base md:text-[20px]" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/available-campain"
                  className={({ isActive }) =>
                    `p-1  ${isActive ? "text-base md:text-[20px]" : ""}`
                  }
                >
                  Available Camp
                </NavLink>
              </li>
            </ul>
          </div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  alt="UserPhoto"
                  className="w-10 ring-1 ring-[#cd07f5] h-10 rounded-full object-center object-cover"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 mr-3 font-semibold ">
                <DropdownMenuLabel>
                  {" "}
                  <div className="text-[16px] font-semibold text-center">
                    <img src={user?.photoURL} alt="" className="w-10  mb-1 h-10 rounded-full ring-1 ring-[#6C63FF] mx-auto" />
                   <p className="uppercase"> {user?.displayName}</p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuGroup>
                  <NavLink to={"/dashboard"} className="">
                    <DropdownMenuItem className="text-md hover:bg-gray-200 ">
                      Dashboard
                    </DropdownMenuItem>
                  </NavLink>
                </DropdownMenuGroup>

                <div className="" onClick={() => logOut()}>
                  <DropdownMenuItem className="text-md hover:bg-gray-200 mb-1">
                    Log out
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink to="/auth/signin" className="">
              <Button className="bg-transparent border border-white text-white  font-semibold px-5 ">
                Join Us
              </Button>
            </NavLink>
          )}
        </div>
      </nav>
    </Container>
  );
}
