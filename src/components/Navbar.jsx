import React from "react";
import { FaBell, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";

const Navbar = ({ onToggleDarkMode }) => {
  return (
    <div className="bg-gradient-to-r mt-2 from-pinkGradient-dark to-pinkGradient-light dark:bg-gray-900 shadow-md rounded-lg px-6 py-4 max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-wide text-white">
          Welcome Back, <span className="text-white">Admin</span>!
        </h2>
        <div className="flex items-center pl-4 space-x-4">
          <button onClick={onToggleDarkMode} className="flex items-center justify-center bg-white text-pinkGradient-dark p-3 rounded-full shadow-lg">
            <FaMoon className="w-5 h-5 dark:hidden" />
            <FaSun className="w-5 h-5 hidden dark:block" />
          </button>
          <button className="relative flex items-center justify-center bg-white text-pinkGradient-dark p-3 rounded-full shadow-lg">
            <FaBell className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 shadow-sm">3</span>
          </button>
          <button className="flex items-center justify-center bg-white text-pinkGradient-dark dark:bg-gray-700 dark:text-white p-3 rounded-full shadow-lg">
            <FaUserCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
