import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

const TopCategory = ({
  imgSrc,
  title,
  alt,
}: {
  imgSrc: StaticImageData;
  title: string;
  alt: string;
}) => {
  return (
    <Link href={""}>
      <div className="flex relative w-[180px] rounded">
        <Image
          src={imgSrc}
          alt={alt}
          width={180}
          className="w-[180px] rounded"
        />
        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-max text-white font-bold">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default TopCategory;
