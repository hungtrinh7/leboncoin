"use client";

import { useEffect } from "react";
import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useFormState, useFormStatus } from "react-dom";
import { createProduct } from "../actions";
import { useRouter } from "next/navigation";
import { Category } from "../../common/types";

const initialState = {
  message: null,
};

const conditions = [
  "Etat neuf",
  "Très bon état",
  "Bon état",
  "Etat satisfaisant",
  "Pour pièces",
];

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="flex items-center justify-center text-white text-base font-bold px-4 mt-4 h-11 bg-[#EC5A12] rounded-2xl hover:opacity-90 text-center"
    >
      Valider
    </button>
  );
};

export default function Page() {
  const [hasTitleInput, setHasTitleInput] = useState<boolean>(true);
  const [btnClickTitleInput, setBtnClickTitleInput] = useState<boolean>(false);
  const [fetchErrorGetCategories, setFetchErrorGetCategories] =
    useState<string>(null);
  const [categories, setCategories] = useState<Category[]>(null);
  const [state, formAction] = useFormState(createProduct, initialState);
  const router = useRouter();

  const handleChangeTitleInput = (value: string) => {
    if (value !== "" && value.length > 2) {
      setHasTitleInput(false);
    } else {
      setHasTitleInput(true);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select();
      if (error) {
        setFetchErrorGetCategories("Error fetching categories");
        setCategories(null);
      }
      if (data) {
        setFetchErrorGetCategories("");
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state, router]);

  const handleClickContinueAfterTitleInput = () => {
    setBtnClickTitleInput(true);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto mt-6 mb-4 ">
        <div className="flex">
          <div className="w-3/4">
            {fetchErrorGetCategories && <p>{fetchErrorGetCategories}</p>}
            <h3 className="text-lg font-semibold mb-4">
              Commençons par l&apos;essentiel !
            </h3>
            <form className="w-full" action={formAction}>
              <input type="hidden" name="user_id" value={1} />
              <label className="text-base">
                Quel est le titre de l&apos;annonce ? *
              </label>
              <div className="flex gap-2 mb-8 mt-2">
                <input
                  type="text"
                  name="name"
                  className="border rounded-2xl p-2"
                  onChange={(e) => handleChangeTitleInput(e.target.value)}
                />
                <button
                  type="button"
                  className="flex items-center justify-center text-white text-base font-bold px-4 h-11 bg-[#EC5A12] rounded-2xl hover:opacity-90 text-center"
                  disabled={hasTitleInput}
                  onClick={handleClickContinueAfterTitleInput}
                >
                  Continuer
                </button>
              </div>
              <p className="hover:cursor-pointer text-xs text-[#152233] opacity-70">
                <u>
                  <strong>Me renseigner</strong>
                </u>{" "}
                sur les finalités du traitement de mes données personnelles, les
                destinataires, le responsable de traitement, les durées de
                conservation, les coordonnées du{" "}
                <u>
                  <strong>DPO et mes droits.</strong>
                </u>
              </p>

              {btnClickTitleInput && (
                <div className="mt-4">
                  <div>
                    <label className="text-base">
                      Choisissez une catégorie *
                    </label>
                    <br />
                    <select
                      className="border rounded-2xl h-11 p-2 mt-2"
                      name="category"
                    >
                      {categories &&
                        categories.map((category) => (
                          <option key={category.id} value={Number(category.id)}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <h3 className="text-lg font-semibold my-4">
                    Dites-nous en plus
                  </h3>

                  <div>
                    <label className="text-base">Etats</label>
                    <br />
                    <select
                      className="border rounded-2xl h-11 p-2 mt-2"
                      name="condition"
                    >
                      {conditions.map((condition) => (
                        <option value={condition} key={condition}>
                          {condition}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="text-base">
                      Description de l&apos;annonce
                    </label>
                    <br />
                    <textarea
                      name="description"
                      className="w-full border rounded-2xl p-2"
                      rows={5}
                    ></textarea>
                  </div>

                  <h3 className="text-lg font-semibold my-4">
                    Quel est votre prix ?
                  </h3>

                  <div>
                    <label className="text-base">Votre prix de vente</label>
                    <br />
                    <input
                      type="number"
                      className="border rounded-2xl p-2"
                      name="price"
                    />
                  </div>

                  <h3 className="text-lg font-semibold my-4">
                    Livraison possible ?
                  </h3>

                  <div className="my-4">
                    <label className="text-base">Oui</label>
                    <input
                      type="checkbox"
                      name="is_deliverable"
                      className="border rounded-2xl p-2 ml-1"
                      value={"on"}
                    />
                    <label className="text-base ml-4">Non</label>
                    <input
                      type="checkbox"
                      name="is_deliverable"
                      className="border rounded-2xl p-2 ml-1"
                      value={"off"}
                    />
                  </div>

                  <h3 className="text-lg font-semibold my-4">
                    Où se situe votre bien ?
                  </h3>

                  <div className="flex gap-6">
                    <div>
                      <label className="text-base">Ville</label>
                      <br />
                      <input
                        type="text"
                        className="border rounded-2xl p-2"
                        name="address_city"
                      />
                    </div>
                    <div>
                      <label className="text-base">Code postal</label>
                      <br />
                      <input
                        type="text"
                        className="border rounded-2xl p-2"
                        name="address_postal_code"
                      />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <label className="text-base">Département</label>
                      <br />
                      <input
                        type="text"
                        className="border rounded-2xl p-2"
                        name="address_department"
                      />
                    </div>
                    <div>
                      <label className="text-base">Région</label>
                      <br />
                      <input
                        type="text"
                        className="border rounded-2xl p-2"
                        name="address_region"
                      />
                    </div>
                  </div>

                  <DeleteButton />
                </div>
              )}
              <p>{state?.message}</p>
            </form>
          </div>
          <div className="w-1/4">
            <p>Votre annonce sera trouvée plus facilement !</p>
            <p>
              Vous aurez 50% de chances en plus d’être contacté si votre annonce
              est dans la bonne catégorie.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
