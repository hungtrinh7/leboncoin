import Link from "next/link";
import React from "react";

const Button = ({
  name,
  children = null,
  className = "",
  btnColor = "bg-[#EC5A12]",
  url,
}) => {
  return (
    <Link
      href={url}
      className={`flex items-center justify-center text-white text-base font-bold px-4 h-11 rounded-2xl hover:opacity-90 text-center ${btnColor} ${className}`}
    >
      {children} <span className="ml-2">{name}</span>
    </Link>
  );
};

export default Button;
