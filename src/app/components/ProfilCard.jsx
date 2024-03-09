import React from "react";
import {
  ChevronRight,
  Clock,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "../data/products";

const ProfilCard = ({ seller, memberSince = false, hasArrow = false }) => {
  const sellerProducts = PRODUCTS.filter(
    (product) => product.sellerId === seller.id
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex">
          <span className="flex h-16 w-16 rounded-full bg-green-700 text-xs items-center justify-center text-white">
            R
          </span>
          <div className="ml-3">
            <p className="font-bold text-lg">
              <Link href={"#"} className="hover:underline">
                {seller.username}
              </Link>
            </p>
            <p className="text-base">{sellerProducts.length} annonces</p>
            <div className="flex gap-1">
              <Star size={16} fill="#B84A14" color="#B84A14" />
              <Star size={16} fill="#B84A14" color="#B84A14" />
              <Star size={16} fill="#B84A14" color="#B84A14" />
              <Star size={16} fill="#B84A14" color="#B84A14" />
              <Star size={16} fill="#B84A14" color="#B84A14" />
              <span className="font-bold">({seller.number_reviews})</span>
            </div>
          </div>
        </div>
        {hasArrow ? (
          <div>
            <ChevronRight size={20} />
          </div>
        ) : (
          <button className="px-4 py-2 bg-white text-[#094171] hover:bg-[#094171] hover:bg-opacity-5 text-base font-bold border border-[#094171] rounded-2xl">
            Suivre
          </button>
        )}
      </div>

      <p className="flex w-max text-xs bg-[#FFE9DE] text-[#89380F] px-2 py-1 mt-2 font-bold rounded-2xl">
        <ShieldCheck size={16} fill="#89380F" color="#FFE9DE" />
        <span className="ml-1">Profil recommandé</span>
      </p>
      {memberSince && (
        <p className="flex items-center mt-4 text-base">
          <UserRound size={16} />
          <span className="ml-1">Membre depuis novembre 2015</span>
        </p>
      )}
      <p className="flex items-center mt-4">
        <Clock size={16} />
        <span className="ml-1">Répond généralement en 10 minutes</span>
      </p>
    </>
  );
};

export default ProfilCard;
