import React from "react";

const Element = ({ type, label }) => {
  switch (type) {
    case "text":
      return (
        <p className="mb-2 p-2 bg-gray-100 rounded-lg">{label}: Sample Text</p>
      );
    case "button":
      return (
        <button className="p-2 bg-blue-500 text-white rounded-lg mb-2">
          {label}
        </button>
      );
    case "image":
      return (
        <div className="mb-2 flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt={label}
            className="rounded-lg"
          />
        </div>
      );
    default:
      return null;
  }
};

export default Element;
