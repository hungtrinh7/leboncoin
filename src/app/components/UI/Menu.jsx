import React from "react";

const Menu = ({ name, children }) => {
  return (
    <div className="flex items-center">
      <a
        className="flex flex-col items-center px-2 pb-1 gap-2 after:block after:content-[''] after:border-b-[3px] after:border-[#EC5A12] after:scale-x-0 after:transition-transform after:ease-in-out hover:after:scale-x-100"
        href=""
        rel="noopener noreferrer"
      >
        {children}
        <span className="text-xs">{name}</span>
      </a>
    </div>
  );
};

export default Menu;
