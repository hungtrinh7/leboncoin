import { Heart, TrendingDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TagDeliveryPossible } from "./Elements";
import { useState } from "react";

const CardPostFullWidth = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const handleClickRemoveFavorite = () => {
    setIsFavorite(false);
  };

  return (
    <>
      {isFavorite && (
        <div className="flex border">
          <div className="w-60 h-48 overflow-hidden">
            <Image
              src={product.src}
              alt={product.alt}
              width={240}
              height={192}
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col content-between justify-between p-4 w-full">
            <div>
              <p className="text-base font-bold">{product.title}</p>
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
            </div>
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-caption">{product.categoryLabel}</p>
                <p className="text-caption">{product.address}</p>
                <p className="text-caption">{product.createdAt}</p>
              </div>
              <div className="relative hover:cursor-pointer">
                <Heart
                  size={20}
                  color={isFavorite ? "#EC5A12" : "#7C7C62"}
                  fill={isFavorite ? "#EC5A12" : "transparent"}
                  onClick={handleClickRemoveFavorite}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPostFullWidth;
