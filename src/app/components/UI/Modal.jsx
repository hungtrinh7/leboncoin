import { X } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const handleClose = () => {};

  return createPortal(
    <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center z-20">
      <div className="relative bg-white rounded-2xl shadow-md p-8 w-[672px] mx-auto h-60">
        <button className="absolute top-2 right-6 p-2 hover:bg-[#627C93] hover:bg-opacity-10 rounded-2xl">
          <X size={24} color="#627C93" onClick={handleClose} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
