"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({ src, alt, title, price, delivery, address, dateCreated }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Link href={"#"}>
      <div className="w-[190px]">
        <div className="flex">
          <span className="flex h-5 w-5 rounded-full bg-green-700 text-xs items-center justify-center text-white">
            R
          </span>
          <span className="ml-1 text-sm font-bold">Roger</span>
          <span className="flex items-center ml-1">
            <Star size={14} fill="#B84A14" color="#B84A14" />
            <span className="text-[13px] font-bold ml-1">5</span>
            <span className="text-xs ml-1">(9)</span>
          </span>
        </div>
        <Image src={src} alt={alt} className="mt-2 rounded-lg" />
        <p className="mt-2 text-base font-bold">{title}</p>
        <p className="text-base font-bold">{price} €</p>
        <div className="flex">
          {delivery ? (
            <p className="text-xs bg-[#E6F1FD] px-2 font-bold rounded-2xl">
              Livraison possible
            </p>
          ) : (
            <p className="h-[16px]"></p>
          )}
        </div>
        <div className="flex h-8 items-end justify-between mt-6">
          <div>
            <p className="mt-4 text-xs text-gray-500">{address}</p>
            <p className="text-xs text-gray-500">{dateCreated}</p>
          </div>
          <div>
            <Heart
              size={20}
              color={isFavorited ? "#EC5A12" : "#7C7C62"}
              fill={isFavorited ? "#EC5A12" : "transparent"}
              onClick={handleClickFavorite}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
