"use client";
import { Heart, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Job } from "../../../common/types";

const CardBorder = ({ job }: { job: Job }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const dateCreated = new Date(job.created_at);

  const handleClickFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  let salaryFreq = "par mois";
  if (job.salary_frequency === "daily") {
    salaryFreq = "par jour";
  }
  if (job.salary_frequency === "daily") {
    salaryFreq = "par heure";
  }

  return (
    <Link href={"#"}>
      <div className="w-[235px] border p-4">
        <p className="mt-2 text-base font-bold">{job.title}</p>
        <div className="flex">
          <p>{job.type_contract}</p>
          <p className="text-base before:font-bold before:content-['·'] before:text-neutral before:mr-2 ml-2">
            {job.salary} €{" "}
            <span className="text-xs">/ {job.salary_frequency}</span>
          </p>
        </div>
        {job.is_app_simplified ? (
          <p className="flex w-max text-xs bg-[#FFE9DE] text-[#89380F] px-2 mt-1 font-bold rounded-2xl">
            <Zap size={12} />
            <span className="ml-1">Candidature simplifiée</span>
          </p>
        ) : (
          <p className="h-[12px]"></p>
        )}

        <p className="mt-4 text-xs text-gray-500">
          {job.address_city} {job.address_postal_code}
        </p>
        <div>
          <span className="text-xs text-gray-500">
            {dateCreated.getDate()}/{dateCreated.getMonth()}/
            {dateCreated.getFullYear()}
          </span>
          <span>{job.is_new}</span>
        </div>
        <div className="flex h-8 items-end justify-between mt-6">
          <div className="flex">
            <Image
              src={`/${job.img_url}`}
              alt={job.title}
              width={40}
              height={26}
            />
            <span>{job.name_recruiter}</span>
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
