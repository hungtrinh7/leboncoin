import Link from "next/link";
import React from "react";

const Breadcrumb = ({ product }) => {
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
          <Link href={"#"}>{product.categoryLabel}</Link>
        </li>
        <li>
          <Link href={"#"}>{product.region}</Link>
        </li>
        <li>
          <Link href={"#"}>{product.department}</Link>
        </li>
        <li>
          <Link href={"#"}>{product.address}</Link>
        </li>
        <li>
          <span className="font-bold text-black">{product.title}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
