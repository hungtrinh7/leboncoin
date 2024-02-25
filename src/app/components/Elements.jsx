import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Elements = () => {
  return <></>;
};

export default Elements;

export const LinkWatchMore = () => {
  return (
    <Link
      href={""}
      className="flex items-center text-base font-bold text-[#094171]"
    >
      Voir plus d&apos;annonces <MoveRight size={14} className="ml-2" />
    </Link>
  );
};

export const TagDeliveryPossible = ({ product }) => {
  return (
    <div className="flex">
      {product.delivery ? (
        <p className="text-xs bg-[#E6F1FD] px-2 font-bold rounded-2xl">
          Livraison possible
        </p>
      ) : (
        <p className="h-[16px]"></p>
      )}
    </div>
  );
};
