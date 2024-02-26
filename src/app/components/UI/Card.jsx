"use client";
import { Heart, Star, TrendingDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TagDeliveryPossible } from "../Elements";

const Card = ({ seller, product }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      {seller && (
        <Link href={`/${product.category}/${product.id}`}>
          <div className="w-[190px]">
            <div className="flex">
              <span className="flex h-5 w-5 rounded-full bg-green-700 text-xs items-center justify-center text-white">
                {seller.username.slice(0, 1)}
              </span>
              <span className="ml-1 text-sm font-bold">{seller.username}</span>
              {seller.numberReviews > 0 && (
                <span className="flex items-center ml-1">
                  <Star size={14} fill="#B84A14" color="#B84A14" />
                  <span className="text-[13px] font-bold ml-1">
                    {seller.review}
                  </span>
                  <span className="text-xs ml-1">({seller.numberReviews})</span>
                </span>
              )}
            </div>
            <div className="relative">
              <Image
                src={product.src}
                alt={product.alt}
                className="mt-2 rounded-lg"
              />
              {product.isUrgent && (
                <div className="absolute top-0 left-0 bg-[#E9D6FA] text-[#360F57] rounded-full px-1 mt-2 ml-2 text-xs font-bold">
                  Urgent
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="mt-2 text-base font-bold">{product.title}</p>
              {product.isProfessional && (
                <p className="border border-[#094171] rounded-full text-xs px-1 font-bold">
                  Pro
                </p>
              )}
            </div>

            <p
              className={`text-base font-bold ${
                product.hasPriceDecreased ? "text-[#4E9850]" : undefined
              }`}
            >
              <span className="flex items-center">
                {product.price} €{" "}
                {product.hasPriceDecreased && <TrendingDown size={16} />}
              </span>
            </p>
            <TagDeliveryPossible product={product} />
            <div className="flex h-8 items-end justify-between mt-6">
              <div>
                <p className="mt-4 text-xs text-gray-500">{product.address}</p>
                <p className="text-xs text-gray-500">{product.dateCreated}</p>
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
      )}
    </>
  );
};

export default Card;
