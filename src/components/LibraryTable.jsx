import React, { useState } from "react";

const LibraryTable = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("id");

  const rows = [
    { id: 1, bookName: "React for Beginners", student: "John Doe", borrowDate: "2024-11-01", returnDate: "2024-11-15" },
    { id: 2, bookName: "JavaScript Mastery", student: "Jane Smith", borrowDate: "2024-11-05", returnDate: "2024-11-20" },
    { id: 3, bookName: "Learning Node.js", student: "Alice Johnson", borrowDate: "2024-11-07", returnDate: "2024-11-21" },
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
      <h3 className="text-2xl font-semibold mb-4 text-pinkGradient.dark">Library Borrowing System</h3>
      <table className="w-full table-auto text-left text-gray-800 dark:text-gray-300">
        <thead className="bg-gradient-to-r from-pinkGradient.light to-pinkGradient.dark text-white">
          <tr>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("id")}>ID</th>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("bookName")}>Book Name</th>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("student")}>Student</th>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("borrowDate")}>Borrow Date</th>
            <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("returnDate")}>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row) => (
            <tr
              key={row.id}
              className="border-t hover:bg-pink-100 dark:hover:bg-pink-700 transition-all duration-200"
            >
              <td className="py-3 px-6">{row.id}</td>
              <td className="py-3 px-6">{row.bookName}</td>
              <td className="py-3 px-6">{row.student}</td>
              <td className="py-3 px-6">{row.borrowDate}</td>
              <td className="py-3 px-6">{row.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryTable;
