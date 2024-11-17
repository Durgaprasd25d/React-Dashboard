import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-gradient-to-r from-pinkGradient-dark to-pinkGradient-light rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-2xl">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
};

export default Card;
