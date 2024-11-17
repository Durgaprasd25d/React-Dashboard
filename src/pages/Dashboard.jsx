import React from "react";
import Card from "../components/Card.jsx";
import ChartSection from "../components/ChartSection.jsx";
import Table from "../components/Table.jsx";
import LibraryTable from "../components/LibraryTable.jsx"; // New component for the library system

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card title="Total Students" value="1,254" />
        <Card title="Courses Offered" value="25" />
        <Card title="Active Faculty" value="150" />
        <Card title="Books Borrowed" value="350" />
      </div>
      <ChartSection />
      <Table />
      <LibraryTable /> {/* New Table for Library Borrowing */}
    </div>
  );
};

export default Dashboard;
