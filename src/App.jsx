import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-gray-100"
          : "bg-background text-gray-900"
      }
    >
      <div className="flex">
        {/* Sidebar remains fixed */}
        <Sidebar />
        {/* Content area gets adjusted based on sidebar's width */}
        <div className="flex-1 flex flex-col min-h-screen ml-64"> {/* Add ml-64 to account for sidebar width */}
          <Navbar onToggleDarkMode={() => setDarkMode(!darkMode)} />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
