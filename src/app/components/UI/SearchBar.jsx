import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center relative max-w-[500px] w-[320px]">
      <input
        className="absolute bg-[#EFF2F5] h-11 w-full rounded-[1.2rem] px-4"
        placeholder="Rechercher une annonce"
      />
      <button className="absolute right-2 bg-[#EC5A12] p-2 rounded-xl hover:opacity-90">
        <Search color="white" size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
