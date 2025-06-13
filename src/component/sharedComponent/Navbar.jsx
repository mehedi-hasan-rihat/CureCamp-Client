import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import useAuth from "../../hook/useAuth";
import { Menu, X } from "lucide-react"; // Icons for open/close
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <nav className="sticky top-0 flex items-center justify-between px-4 py-3">
        {/* Logo */}
       
       <div className="hidden md:block"> <div className="flex items-center gap-2 ">
          <img
            src="https://i.ibb.co.com/t25qYcW/DALL-E-2025-01-14-10-50-58-A-sleek-and-modern-logo-design-with-no-text-featuring-a-minimalist-medica.webp"
            alt="logo"
            className="rounded-full w-9 h-9"
          />
          <p className="hidden font-semibold text-white sm:block sm:text-xl">CureCamp</p>
        </div></div>

        {/* Mobile Menu Button */}
        <button
          className="block text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="items-center hidden gap-8 md:flex">
          <ul className="flex items-center gap-4 text-sm md:text-base">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `p-1 ${isActive ? "text-white font-bold" : "text-white opacity-80 hover:opacity-100"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/available-campain"
                className={({ isActive }) =>
                  `p-1 ${isActive ? "text-white font-bold" : "text-white opacity-80 hover:opacity-100"}`
                }
              >
                Available Camp
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/my-camps"
                    className={({ isActive }) =>
                      `p-1 ${isActive ? "text-white font-bold" : "text-white opacity-80 hover:opacity-100"}`
                    }
                  >
                    My Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      `p-1 ${isActive ? "text-white font-bold" : "text-white opacity-80 hover:opacity-100"}`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `p-1 ${isActive ? "text-white font-bold" : "text-white opacity-80 hover:opacity-100"}`
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* User Profile / Login Button */}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src={user?.photoURL}
                referrerPolicy="no-referrer"
                alt="UserPhoto"
                className="w-10 ring-2 ring-[#cd07f5] h-10 rounded-full object-center object-cover hover:scale-105 transition-transform"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3 font-semibold w-60">
              <DropdownMenuLabel>
                <div className="text-center">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-10 mb-1 h-10 rounded-full ring-1 ring-[#6C63FF] mx-auto"
                  />
                  <p className="uppercase">{user?.displayName}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <NavLink to={"/dashboard"}>
                  <DropdownMenuItem className="text-md hover:bg-[#6C63FF] hover:text-white">
                    Dashboard
                  </DropdownMenuItem>
                </NavLink>
              </DropdownMenuGroup>
              <div onClick={() => logOut()}>
                <DropdownMenuItem className="text-md hover:bg-[#6C63FF] hover:text-white mb-1">
                  Log out
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLink to="/auth/signin">
            <Button className="bg-transparent border border-white text-white font-semibold px-5 py-2 rounded-md hover:bg-white hover:text-[#6C63FF]">
              Login
            </Button>
          </NavLink>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 text-white py-3 px-4 rounded-lg absolute top-[60px] left-0 w-full">
          <ul className="flex flex-col gap-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? "text-white font-bold" : "opacity-80 hover:opacity-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/available-campain"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? "text-white font-bold" : "opacity-80 hover:opacity-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Available Camp
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/my-camps"
                    className={({ isActive }) =>
                      `block p-2 ${isActive ? "text-white font-bold" : "opacity-80 hover:opacity-100"}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      `block p-2 ${isActive ? "text-white font-bold" : "opacity-80 hover:opacity-100"}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `block p-2 ${isActive ? "text-white font-bold" : "opacity-80 hover:opacity-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </Container>
  );
}
