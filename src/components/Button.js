import React from "react";

export const Button = ({ children, mystyle, onClick ,disabled}) => {
  return (
    <>
      <button
        className="btn btn-success mb-4 m-2"
        style={mystyle}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
