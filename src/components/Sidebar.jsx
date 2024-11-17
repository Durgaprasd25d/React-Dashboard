import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar toggle

  const menuItems = [
    { name: "Dashboard", icon: FaHome },
    { name: "Students", icon: FaUsers },
    { name: "Library", icon: FaBook },
    { name: "Faculty", icon: FaChalkboardTeacher },
    { name: "Settings", icon: FaCog },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        isOpen ? "w-64" : "w-20"
      } bg-gradient-to-r from-pinkGradient-dark to-pinkGradient-light text-white shadow-md transition-all duration-300`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-600">
        {isOpen && <h2 className="text-white font-bold text-2xl">Admin</h2>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl bg-pink-600 rounded-full p-2 focus:outline-none transition-all duration-200 hover:bg-pink-800"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <ul className="space-y-2 mt-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ${
                  isOpen ? "justify-start" : "justify-center"
                } hover:bg-pink-700`}
                style={{
                  height: "60px", // Equal height for both states
                  padding: isOpen ? "12px 16px" : "8px 12px", // Adjust padding for closed state
                  margin: isOpen ? "0" : "4px 6px", // Add margin when closed
                  transition: "all 0.3s ease-in-out", // Smooth transition
                }}
              >
                <item.icon
                  className={`text-lg transition-all duration-300 ${
                    isOpen ? "mr-3" : ""
                  }`}
                />
                {isOpen && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-3 text-sm text-gray-300 border-t border-gray-600">
          Version 1.0
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
