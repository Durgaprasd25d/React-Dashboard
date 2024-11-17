import React, { useState } from "react";

const Table = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("id");

  const rows = [
    { id: 1, name: "John Doe", role: "Principal", status: "Active" },
    { id: 2, name: "Jane Smith", role: "HOD", status: "Active" },
    { id: 3, name: "Alice Johnson", role: "Faculty", status: "Inactive" },
    { id: 4, name: "Bob Brown", role: "Student", status: "Active" },
  ];

  const handleSort = (column) => {
    const newSortOrder = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setSortColumn(column);
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  });

  return (
    <div className="bg-white dark:bg-card shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-4 text-pinkGradient.dark">User Management</h3>
      <table className="w-full table-auto text-left text-gray-800 dark:text-gray-300">
        <thead className="bg-gradient-to-r from-pinkGradient.light to-pinkGradient.dark text-white">
          <tr>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("id")}>ID</th>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("name")}>Name</th>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("role")}>Role</th>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("status")}>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr
              key={row.id}
              className={`border-t hover:bg-pink-100 dark:hover:bg-pink-700 transition-all duration-200 ${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"}`}
            >
              <td className="py-3 px-6">{row.id}</td>
              <td className="py-3 px-6">{row.name}</td>
              <td className="py-3 px-6">{row.role}</td>
              <td className="py-3 px-6">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
