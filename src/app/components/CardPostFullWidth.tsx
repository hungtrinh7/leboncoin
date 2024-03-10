import { Heart, TrendingDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TagDeliveryPossible } from "./Elements";
import { useState } from "react";
import { Product } from "../../common/types";

const CardPostFullWidth = ({ product }: { product: Product }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(true);
  const dateCreated = new Date(product.created_at);
  const handleClickRemoveFavorite = () => {
    setIsFavorite(false);
  };

  return (
    <>
      {isFavorite && (
        <div className="flex border">
          <div className="w-60 h-48 overflow-hidden">
            <Image
              src={`/products/${product.url_img}`}
              alt={product.name}
              width={240}
              height={192}
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col content-between justify-between p-4 w-full">
            <div>
              <p className="text-base font-bold">{product.name}</p>
              <p
                className={`text-base font-bold ${
                  product.has_price_decreased ? "text-[#4E9850]" : undefined
                }`}
              >
                <span className="flex items-center">
                  {product.price} €{" "}
                  {product.has_price_decreased && <TrendingDown size={16} />}
                </span>
              </p>
              <TagDeliveryPossible product={product} />
            </div>
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-caption">{product.categories.name}</p>
                <p className="text-caption">
                  {product.address_city} {product.address_postal_code}
                </p>
                <p className="text-caption">
                  {dateCreated.getDate()}/{dateCreated.getMonth()}/
                  {dateCreated.getFullYear()}
                </p>
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
