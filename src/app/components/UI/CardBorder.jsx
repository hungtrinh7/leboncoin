"use client";
import { Heart, Star, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CardBorder = ({
  src,
  alt,
  title,
  salary,
  salaryFrequency,
  typeContract,
  isApplicationSimplified,
  address,
  dateCreated,
  isNew,
  nameRecruiter,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  let salaryFreq = "par mois";
  if (salaryFrequency === "daily") {
    salaryFreq = "par jour";
  }
  if (salaryFrequency === "daily") {
    salaryFreq = "par heure";
  }

  return (
    <Link href={"#"}>
      <div className="w-[235px] border p-4">
        <p className="mt-2 text-base font-bold">{title}</p>
        <div className="flex">
          <p>{typeContract}</p>
          <p className="text-base before:font-bold before:content-['·'] before:text-neutral before:mr-2 ml-2">
            {salary} € <span className="text-xs">/ {salaryFreq}</span>
          </p>
        </div>
        {isApplicationSimplified ? (
          <p className="flex w-max text-xs bg-[#FFE9DE] text-[#89380F] px-2 mt-1 font-bold rounded-2xl">
            <Zap size={12} />
            <span className="ml-1">Candidature simplifiée</span>
          </p>
        ) : (
          <p className="h-[12px]"></p>
        )}

        <p className="mt-4 text-xs text-gray-500">{address}</p>
        <div>
          <span className="text-xs text-gray-500">{dateCreated}</span>
          <span>{isNew}</span>
        </div>
        <div className="flex h-8 items-end justify-between mt-6">
          <div className="flex">
            <Image src={src} alt={alt} width={40} height={26} />
            <span>{nameRecruiter}</span>
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

export default CardBorder;
