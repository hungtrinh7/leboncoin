"use client";
import { MapPin, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const RecentSearch = ({ title, category, zone }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <>
      {!isClosed && (
        <Link href={""}>
          <div className="p-4 rounded-2xl border min-w-80 max-h-32 border-slate-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-bold">{title}</p>
                <p className="text-sm">{category}</p>
              </div>
              <button className="opacity-50" onClick={handleClose}>
                <X />
              </button>
            </div>
            <div className="mt-4">
              <p className="flex items-center text-sm text-gray-500">
                <MapPin size={14} />
                <span className="ml-1">{zone}</span>
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default RecentSearch;
