// Card.js
import React from "react";

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80">
      <div className="grid grid-cols-3 gap-4 mb-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`${
              option.highlighted ? "bg-red-500 text-white" : "bg-gray-100"
            } text-center py-2 rounded`}
          >
            {option.amount}
            <br />
            <span
              className={option.highlighted ? "text-white" : "text-red-500"}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
      <div className="text-center text-3xl mb-4">$1.38</div>
      <Button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded w-full">
        Order Now
      </Button>
    </div>
  );
};

export default Card;
