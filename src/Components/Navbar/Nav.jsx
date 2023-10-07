import  { useState } from "react";
import logo from "../../../src/assets/logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navLinks = (
    <>
      <li className="block py-2  text-gray-900">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FEBF05] px-2 py-1 "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="block py-2  text-gray-900">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FEBF05] px-2 py-1 "
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="block py-2  text-gray-900">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FEBF05] px-2 py-1 "
              : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li className="block py-2  text-gray-900">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-b-2 border-[#FEBF05] px-2 py-1 "
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-gradient-to-r from-[#FEBF05]/80 via-[#FEBF05]/50 to-white dark:bg-gray-900 sticky top-0 left-0 w-full z-20  border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-white bg-[#FEBF05] hover:bg-[#FEBF05] focus:ring-4 focus:outline-none focus:ring-[#FEBF05]/40 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#FEBF05] dark:hover:bg-[#FEBF05] dark:focus:ring-[#FEBF05]/70"
              onClick={toggleMenu}
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-[#FEBF05] hover:bg-[#FEBF05] focus:ring-4 focus:outline-none focus:ring-[#FEBF05]/40 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#FEBF05] dark:hover:bg-[#FEBF05] dark:focus:ring-[#FEBF05]/70"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                "X"
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col items-center md:flex-row p-4 md:p-0 mt-4 font-medium md:space-x-8 md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 ">
              {navLinks}
              <li>
                <button
                  type="button"
                  className="text-white hidden md:inline-block bg-[#FEBF05] hover:bg-[#FEBF05] focus:ring-4 focus:outline-none focus:ring-[#FEBF05]/40 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#FEBF05] dark:hover:bg-[#FEBF05] dark:focus:ring-[#FEBF05]/70"
                  onClick={toggleMenu}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;