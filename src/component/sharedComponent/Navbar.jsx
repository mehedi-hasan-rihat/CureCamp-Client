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
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { user,   logOut } = useAuth();
  return (
    <Container>
      {" "}
      <nav className="sticky top-0 flex justify-between items-center font-medium  py-2">
        <div className="flex gap-2 items-center justify-center">
          <img
            src="https://i.ibb.co.com/t25qYcW/DALL-E-2025-01-14-10-50-58-A-sleek-and-modern-logo-design-with-no-text-featuring-a-minimalist-medica.webp"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-xl font-semibold">CureCamp</p>
        </div>
        <div className="">
          <ul className="flex gap-5 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `p-1 hover:primary ${
                    isActive ? "text-primary text-[16px]" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/available-campain"
                className={({ isActive }) =>
                  `p-1 hover:text-primary ${
                    isActive ? "text-primary text-[16px]" : ""
                  }`
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
                className="w-10 h-10 rounded-full object-center object-cover"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 mr-3 font-semibold ">
              <DropdownMenuLabel className='text-xl'>  {user?.displayName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <NavLink to={'dashboard'}><DropdownMenuItem className='text-md'>
                  Dashboard
                </DropdownMenuItem></NavLink>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
          <div className="" onClick={()=> logOut()}>
          <DropdownMenuItem  className='text-md'>
                Log out
              </DropdownMenuItem>
          </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLink to="/auth/signin" className="">
            <Button className="bg-transparent border border-primary  font-semibold px-5 text-black hover:text-white">
              Join Us
            </Button>
          </NavLink>
        )}
      </nav>
    </Container>
  );
}
