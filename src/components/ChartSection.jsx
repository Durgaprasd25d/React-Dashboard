import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the components in Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartSection = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis labels
    datasets: [
      {
        label: "Performance",
        data: [65, 59, 80, 81, 56, 55, 40], // Y-axis data
        fill: false,
        borderColor: "#e91e63", // Pink color for the line
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw} units`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-pinkGradient.light hover:bg-pinkGradient.DEFAULT transition-all duration-300 ease-in-out shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-white mb-4">Performance Overview</h3>
      <div className="h-64 bg-pink-100 dark:bg-gray-700 rounded-lg overflow-hidden"> {/* Adjusted pink background */}
        {/* Chart Component */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartSection;
