"use client";
import { useState } from "react";
import { PRODUCTS } from "../data/products";
import CardPostFullWidth from "../components/CardPostFullWidth";

const currentUser = 1;

export default function Page() {
  const myProducts = PRODUCTS.filter(
    (product) => product.sellerId === currentUser && product.isFavorite
  );
  const [tab, setTab] = useState("mine");

  const handleClickTabs = (tab: string) => {
    setTab(tab);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto mt-6 mb-4">
        <ul className="flex text-base">
          <li className="px-8 py-3 border-b">
            <button onClick={() => handleClickTabs("mine")}>
              Annonces sauvegardées
            </button>
          </li>
          <li className="px-8 py-3 border-b">
            <button onClick={() => handleClickTabs("sellers")}>
              Annonces de mes vendeurs suivis
            </button>
          </li>
        </ul>

        {tab === "mine" && (
          <>
            <div className="mt-8 mb-6">
              <h1 className="font-semibold text-xl mb-4">
                Retrouvez vos annonces sauvegardées sur tous vos appareils
              </h1>
              <p>
                Si l’annonce n’est plus active sur le site, elle disparaîtra
                automatiquement de votre sélection.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {myProducts.length > 0 ? (
                myProducts.map((product) => (
                  <CardPostFullWidth product={product} />
                ))
              ) : (
                <p className="font-bold">
                  Vous n’avez pas d’annonces de vendeurs suivis pour l’instant
                </p>
              )}
            </div>
          </>
        )}
        {tab === "sellers" && (
          <div className="mt-8 mb-6">
            <p className="font-bold">
              Vous n’avez pas d’annonces de vendeurs suivis pour l’instant
            </p>
          </div>
        )}
      </div>
    </>
  );
}
