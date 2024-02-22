import Link from "next/link";
import React from "react";

const Button = ({ name, children, className, btnColor }) => {
  const buttonColor = btnColor ? btnColor : "bg-[#EC5A12]";

  return (
    <button
      className={`flex items-center justify-center  text-white text-base font-bold px-4 h-11 rounded-2xl hover:opacity-90 text-center ${buttonColor} ${className}`}
    >
      {children} <span className="ml-2">{name}</span>
    </button>
  );
};

export default Button;
