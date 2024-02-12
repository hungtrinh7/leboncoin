import Link from "next/link";
import React from "react";

const Button = ({ name, children }) => {
  return (
    <Link
      href={"/"}
      className="flex items-center max-w-[234px] bg-[#EC5A12] text-white font-bold px-4 h-11 rounded-2xl hover:opacity-90"
    >
      {children} <span className="ml-2">{name}</span>
    </Link>
  );
};

export default Button;
