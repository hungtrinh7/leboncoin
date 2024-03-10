"use client";
import {
  Flag,
  Heart,
  Info,
  MapPin,
  MessagesSquare,
  MoveRight,
  Share2,
  ShieldCheck,
  Smartphone,
  Smile,
} from "lucide-react";
import Image from "next/image";
import RightColumn from "../../components/RightColumn";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import { useState } from "react";
import ProfilCard from "../../components/ProfilCard";
import Map from "../../components/Map";
import Card from "../../components/UI/Card";
import { LinkWatchMore } from "../../components/Elements";
import ModalHowItWorks from "../../components/ModalHowItWorks";
import ModalMore from "../../components/ModalMore";
import { useEffect } from "react";
import supabase from "../../config/supabaseClient";
import { Product } from "../../../common/types";

export default function Page({ params }) {
  const [product, setProduct] = useState<Product>(null);
  const [sellerProducts, setSellerProducts] = useState<Product[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const currentUserId = product?.user_id;
  const currentCategoryId = product?.category_id;

  useEffect(() => {
    const findProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select(
          `
          *,
          users (
            id, username, rating, number_reviews
          ),
          categories (
            id, name
          )
          `
        )
        .eq("id", params.productId);

      if (error) {
        console.log(error);
      }
      if (data) {
        setProduct(data[0]);
      }
    };

    findProduct();
  }, [params.productId]);

  useEffect(() => {
    const findSellerProducts = async () => {
      if (currentUserId) {
        const { data, error } = await supabase
          .from("products")
          .select(
            `
            *,
            users (
              id, username, rating, number_reviews
            )
            `
          )
          .eq("user_id", currentUserId);

        if (error) {
          console.log(error);
        }
        if (data) {
          setSellerProducts(data);
        }
      }
    };
    findSellerProducts();
  }, [currentUserId]);

  useEffect(() => {
    const findProductsByCategory = async () => {
      if (currentCategoryId) {
        const { data, error } = await supabase
          .from("products")
          .select(
            `
            *,
            users (
              id, username, rating, number_reviews
            )
            `
          )
          .eq("category_id", currentCategoryId);

        if (error) {
          console.log(error);
        }
        if (data) {
          setCategoryProducts(data);
        }
      }
    };
    findProductsByCategory();
  }, [currentCategoryId]);

  const [showModalHowItWorks, setShowModalHowItWorks] =
    useState<boolean>(false);
  const [showModalMore, setShowModalMore] = useState<boolean>(false);

  const handleOpenModalHowItWorks = () => {
    setShowModalHowItWorks(true);
  };

  const handleOpenModalMore = () => {
    setShowModalMore(true);
  };

  return (
    <>
      {product && (
        <>
          {showModalHowItWorks && (
            <ModalHowItWorks onShowModal={setShowModalHowItWorks} />
          )}
          {showModalMore && <ModalMore onShowModal={setShowModalMore} />}
          <Breadcrumb product={product} />
          <div className="flex max-w-5xl mx-auto mt-6 mb-4">
            <div className="w-3/5">
              <div className="flex justify-between relative gap-4">
                <Image
                  src={"/products/car1.jpg"}
                  width={220}
                  height={318}
                  alt="car1"
                />
                <Image
                  src={"/products/car2.jpg"}
                  width={220}
                  height={318}
                  alt="car2"
                />
                <Image
                  src={"/products/car3.jpg"}
                  width={220}
                  height={318}
                  alt="car3"
                />
                <div className="flex absolute gap-2 top-2 right-2">
                  <button className="p-3 bg-white rounded-xl hover:bg-[#f6f8f9]">
                    <Share2 size={18} />
                  </button>
                  <button className="p-3 bg-white rounded-xl hover:bg-[#f6f8f9]">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="flex absolute gap-2 bottom-2 right-2">
                  <button className="px-3 py-1 bg-white hover:bg-[#f6f8f9] rounded-full font-bold text-base">
                    Voir les photos
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-lg font-bold my-4">{product.price} €</p>
                {product.price > 1000 && (
                  <div className="flex items-center mb-4">
                    <p className="flex items-center">
                      Payez en{" "}
                      <Image
                        src={"/3x.avif"}
                        width={24}
                        height={24}
                        className="mx-1"
                        alt="3x"
                      />{" "}
                      ou
                      <Image
                        src={"/4x.avif"}
                        width={24}
                        height={24}
                        className="mx-1"
                        alt="4x"
                      />
                      <span className="font-bold">
                        à partir de {product.price / 4} €/mois
                      </span>
                    </p>
                    <Info size={16} className="ml-1" />
                  </div>
                )}
                <p className="text-caption">11/02/2024 à 17:31</p>
              </div>
              <hr className="my-lg block border-t-sm border-outline my-6 opacity-20" />
              <Image
                src={"/protection-lbc.svg"}
                width={236}
                height={22}
                alt="protection leboncoin"
              />
              <div className="flex mt-6 items-center text-base">
                <div className="p-2 mr-2 bg-[#E6F1FD] rounded-full">
                  <ShieldCheck size={16} color="black" fill="#E6F1FD" />
                </div>
                <span>Votre argent est sécurisé et versé au bon moment</span>
              </div>
              <div className="flex mt-6 items-center text-base">
                <div className="p-2 mr-2 bg-[#E6F1FD] rounded-full">
                  <MessagesSquare size={16} color="black" fill="#E6F1FD" />
                </div>
                <span>Notre service client dédié vous accompagne</span>
              </div>
              <div className="mt-4">
                <Link
                  href={"#"}
                  className="flex items-center text-base text-[#094171] font-bold"
                >
                  <span className="mr-2" onClick={handleOpenModalMore}>
                    En savoir plus
                  </span>{" "}
                  <MoveRight size={16} />
                </Link>
              </div>
              <hr className="my-lg block border-t-sm border-outline my-6 opacity-20" />
              <div>
                <p className="text-headline-2 mb-4">Description</p>
                <p className="text-base">{product.description}</p>
              </div>
              <hr className="my-lg block border-t-sm border-outline my-6 opacity-20" />
              <div>
                <p className="text-headline-2 mb-4">Critères</p>
                <div className="flex">
                  <div className="">
                    <Smartphone
                      size={12}
                      color="black"
                      fill="#F0F2F5"
                      className="h-6 w-6 p-1 mr-2 bg-[#F0F2F5] rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-caption">État</span>
                    <p className="text-base font-bold">{product.condition}</p>
                  </div>
                </div>
              </div>
              <hr className="my-lg block border-t-sm border-outline my-6 opacity-20" />
              <div>
                <p className="text-headline-2 mb-4">
                  Remise en main propre avec paiement sécurisé
                </p>
                <div className="flex mt-6 items-center text-base">
                  <ShieldCheck size={16} color="black" />
                  <span className="ml-2">
                    Réservez ce bien jusqu’au rendez-vous avec le vendeur
                  </span>
                </div>
                <div className="flex mt-2 items-center text-base">
                  <Smile size={16} color="black" />
                  <span className="ml-2">
                    Restez libre de refuser ce bien s’il ne correspond pas à vos
                    attentes
                  </span>
                </div>
                <p
                  className="mt-4 text-base underline font-bold cursor-pointer"
                  onClick={handleOpenModalHowItWorks}
                >
                  Comment ça marche ?
                </p>
                <hr className="my-lg block border-t-sm border-outline my-6 opacity-20" />
                <div className="flex items-center mb-4">
                  <MapPin size={16} />
                  <h2 className="text-headline-2 ml-2">
                    {product.address_city} ({product.address_postal_code})
                  </h2>
                </div>
                <Map address={product.address_city} height={"260px"} />
              </div>
              <hr className="my-lg block border-t-sm border-outline my-6 opacity-20" />
              <ProfilCard
                seller={product.users}
                memberSince={true}
                hasArrow={false}
              />
              <section className="flex flex-col max-w-5xl mx-auto">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold mt-5">
                    Annonces de {product.users.username}
                  </h3>
                  <LinkWatchMore />
                </div>
                <div className="flex relative gap-4 mt-4 overflow-x-auto">
                  {sellerProducts &&
                    sellerProducts.map((product) => {
                      return (
                        <Card
                          key={product.id}
                          seller={product.users}
                          product={product}
                        />
                      );
                    })}
                </div>
              </section>
              <hr className="my-lg block border-t-sm border-outline opacity-20" />
              <div className="flex gap-6 my-6">
                <Link href={"#"} className="flex items-center font-bold">
                  <Flag size={12} />
                  <span className="ml-2 underline">
                    Signaler l&apos;annonce
                  </span>
                </Link>
                <Link href={"#"} className="flex items-center font-bold">
                  <Info size={12} />
                  <span className="ml-2 underline">
                    Vos droits et obligations
                  </span>
                </Link>
              </div>
              <hr className="my-lg block border-t-sm border-outline opacity-20" />
              <section className="flex flex-col max-w-5xl mx-auto mb-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold mt-5">
                    Ces annonces peuvent vous intéresser
                  </h3>
                  <LinkWatchMore />
                </div>
                <div className="flex relative gap-4 mt-4 overflow-x-auto">
                  {categoryProducts &&
                    categoryProducts.slice(0, 5).map((product) => {
                      return (
                        <Card
                          key={product.id}
                          seller={product.users}
                          product={product}
                        />
                      );
                    })}
                </div>
              </section>
            </div>
            <RightColumn seller={product.users} />
          </div>
        </>
      )}
    </>
  );
}
