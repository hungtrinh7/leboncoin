import Link from "next/link";
import React from "react";
import { Product } from "../../common/types";

const Breadcrumb = ({ product }: { product: Product }) => {
  return (
    <nav
      id="breadcrumb"
      className="flex flex-col max-w-5xl mx-auto mt-6 mb-4 text-xs"
    >
      <ol className="flex flex-wrap text-gray-500">
        <li>
          <Link href={"/"}>Accueil</Link>
        </li>
        <li>
          <Link href={"#"}>{product.categories.name}</Link>
        </li>
        <li>
          <Link href={"#"}>{product.address_region}</Link>
        </li>
        <li>
          <Link href={"#"}>{product.address_department}</Link>
        </li>
        <li>
          <Link href={"#"}>
            {product.address_city} {product.address_postal_code}
          </Link>
        </li>
        <li>
          <span className="font-bold text-black">{product.name}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
