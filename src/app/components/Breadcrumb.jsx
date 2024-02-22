import Link from "next/link";
import React from "react";

const Breadcrumb = () => {
  return (
    <nav
      id="breadcrumb"
      className="flex flex-col max-w-5xl mx-auto mt-6 mb-4 text-xs"
    >
      <ol className="flex flex-wrap text-gray-500">
        <li>
          <Link href={"#"}>Accueil</Link>
        </li>
        <li>
          <Link href={"#"}>Catégorie</Link>
        </li>
        <li>
          <Link href={"#"}>Région</Link>
        </li>
        <li>
          <Link href={"#"}>Département</Link>
        </li>
        <li>
          <Link href={"#"}>Ville cp</Link>
        </li>
        <li>
          <span className="font-bold text-black">Nom produit</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
