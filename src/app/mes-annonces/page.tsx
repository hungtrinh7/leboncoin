"use client";
import { useEffect, useState } from "react";
import CardPostFullWidth from "../components/CardPostFullWidth";
import supabase from "../config/supabaseClient";
import { UserProduct } from "../../common/types";

const currentUser = 1;

export default function Page() {
  const [usersProducts, setUsersProducts] = useState<UserProduct[]>([]);
  const [tab, setTab] = useState("mine");

  const handleClickTabs = (tab: string) => {
    setTab(tab);
  };

  useEffect(() => {
    const findFavoriteProducts = async () => {
      const { data, error } = await supabase
        .from("users_products")
        .select(
          `
          *,
          users (*),
          products (*, categories (*))
          `
        )
        .eq("user_id", currentUser)
        .eq("is_favorited", true);

      if (error) {
        console.log(error);
      }
      if (data) {
        setUsersProducts(data);
      }
    };

    findFavoriteProducts();
  }, []);

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
              {usersProducts.length > 0 ? (
                usersProducts.map((userProduct) => (
                  <CardPostFullWidth
                    key={userProduct.id}
                    product={userProduct.products}
                  />
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
