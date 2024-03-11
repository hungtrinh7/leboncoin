"use client";
import { Search, XCircle } from "lucide-react";
import React, { useRef, useState } from "react";

const SearchBar = () => {
  const [showBtnClearInput, setShowBtnClearInput] = useState<boolean>(false);
  const inputRef = useRef<any>("");

  const handleChange = (value: string) => {
    inputRef.current.value = value;
    if (value.length > 0) {
      setShowBtnClearInput(true);
    }
  };

  const handleResetInput = () => {
    inputRef.current.value = "";
    setShowBtnClearInput(false);
  };

  return (
    <div className="flex items-center relative max-w-[500px] w-[320px]">
      <input
        className="absolute bg-[#EFF2F5] h-11 w-full rounded-[1.2rem] px-4"
        placeholder="Rechercher une annonce"
        onChange={(e) => handleChange(e.target.value)}
        ref={inputRef}
      />
      {showBtnClearInput && (
        <div
          className="absolute right-10 p-2 rounded-xl hover:opacity-60 hover:cursor-pointer"
          onClick={handleResetInput}
        >
          <XCircle color="#EFF2F5" fill="gray" size={16} />
        </div>
      )}
      <button className="absolute right-2 bg-[#EC5A12] p-2 rounded-xl hover:opacity-90">
        <Search color="white" size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
