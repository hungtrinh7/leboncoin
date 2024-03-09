"use client";
import { Heart, Star, TrendingDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TagDeliveryPossible } from "../Elements";

const Card = ({ seller, product }) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const dateCreated = new Date(product.created_at);

  const handleClickFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      {seller && (
        <Link href={`/${product.category}/${product.id}`}>
          <div className="w-[150px] h-[386px]">
            <div className="flex">
              <span className="flex h-5 w-5 rounded-full bg-green-700 text-xs items-center justify-center text-white">
                {seller.username.slice(0, 1)}
              </span>
              <span className="ml-1 text-sm font-bold">{seller.username}</span>
              {seller.number_reviews > 0 && (
                <span className="flex items-center ml-1">
                  <Star size={14} fill="#B84A14" color="#B84A14" />
                  <span className="text-[13px] font-bold ml-1">
                    {seller.rating}
                  </span>
                  <span className="text-xs ml-1">
                    ({seller.number_reviews})
                  </span>
                </span>
              )}
            </div>
            <div className="relative">
              <Image
                src={`/products/${product.url_img}`}
                alt={product.name}
                className="mt-2 rounded-lg"
                width={150}
                height={187}
              />
              {product.is_urgent && (
                <div className="absolute top-0 left-0 bg-[#E9D6FA] text-[#360F57] rounded-full px-1 mt-2 ml-2 text-xs font-bold">
                  Urgent
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="mt-2 text-base font-bold">{product.name}</p>
              {product.is_professional && (
                <p className="border border-[#094171] rounded-full text-xs px-1 font-bold">
                  Pro
                </p>
              )}
            </div>

            <p
              className={`text-base font-bold ${
                product.has_price_decreased ? "text-[#4E9850]" : undefined
              }`}
            >
              <span className="flex items-center">
                {product.price} €
                {product.has_price_decreased && <TrendingDown size={16} />}
              </span>
            </p>
            <TagDeliveryPossible product={product} />
            <div className="flex h-8 items-end justify-between mt-6">
              <div>
                <p className="mt-4 text-xs text-gray-500">
                  {product.address_city} {product.address_postal_code}
                </p>
                <p className="text-xs text-gray-500">
                  {dateCreated.getDate()}/{dateCreated.getMonth()}/
                  {dateCreated.getFullYear()}
                </p>
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
