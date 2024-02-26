import Link from "next/link";
import React from "react";

const Button = ({ name, children, className, btnColor, url }) => {
  const buttonColor = btnColor ? btnColor : "bg-[#EC5A12]";

  return (
    <Link
      href={url}
      className={`flex items-center justify-center text-white text-base font-bold px-4 h-11 rounded-2xl hover:opacity-90 text-center ${buttonColor} ${className}`}
    >
      {children} <span className="ml-2">{name}</span>
    </Link>
  );
};

export default Button;
