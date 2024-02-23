"use client";
import {
  Calendar,
  Euro,
  Heart,
  MapPin,
  MessageSquareText,
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
import { PRODUCTS } from "../../data/products";
import { useState } from "react";
import Modal from "../../components/UI/Modal";
import ProfilCard from "../../components/ProfilCard";

export default function Page({ params }) {
  const product = PRODUCTS.find(
    (product) => product.id === Number(params.productId)
  );
  const [showModalHowItWorks, setShowModalHowItWorks] = useState(false);
  const [showModalMore, setShowModalMore] = useState(false);

  const handleOpenModalHowItWorks = () => {
    setShowModalHowItWorks(true);
  };
  const handleOpenModalMore = () => {
    setShowModalMore(true);
  };

  return (
    <>
      {showModalHowItWorks && (
        <Modal onShowModal={setShowModalHowItWorks}>
          <p className="text-[#094171] font-bold text-base mt-4">
            Les étapes de la remise en main propre avec paiement sécurisé
          </p>
          <div className="flex items-center mt-2">
            <div className="p-2 mr-2 h-8 w-8 bg-[#E6F1FD] rounded-full">
              <Smile size={16} color="black" fill="#E6F1FD" />
            </div>
            <span>
              En réservant l’article, le vendeur vous confirme la disponibilité
              de l’article
            </span>
          </div>
          <div className="flex items-center mt-2">
            <div className="p-2 mr-2 h-8 w-8 bg-[#E6F1FD] rounded-full">
              <Calendar size={16} color="black" fill="#E6F1FD" />
            </div>
            <span>
              Vous vous organisez avec le vendeur pour définir le lieu et la
              date de votre rendez-vous
            </span>
          </div>
          <div className="flex items-center mt-2">
            <div className="p-2 mr-2 h-8 w-8 bg-[#E6F1FD] rounded-full">
              <ShieldCheck size={16} color="black" fill="#E6F1FD" />
            </div>
            <span>
              Pensez à prendre votre téléphone portable pour déclencher le
              paiement depuis votre messagerie leboncoin pendant le rendez-vous
            </span>
          </div>
        </Modal>
      )}
      {showModalMore && (
        <Modal onShowModal={setShowModalMore}>
          <Image
            src={"/protection-leboncoin.svg"}
            width={592}
            height={143}
            alt="protection leboncoin"
          />
          <div className="mt-6">
            <Image
              src={"/protection-lbc.svg"}
              width={236}
              height={22}
              alt="protection leboncoin"
            />
          </div>
          <ul className="mt-8">
            <li className="flex gap-2 mb-lg">
              <div>
                <ShieldCheck size={24} color="#B84A14" />
              </div>
              <div>
                <h2 className="text-subhead">
                  Nous sécurisons votre argent jusqu’à réception
                </h2>
                <p className="text-sm">
                  En cas de remise en main propre, votre argent est conservé sur
                  un compte séquestre jusqu’à ce que vous confirmiez avoir
                  récupéré le Bien. En cas de livraison, vous disposez d’un
                  délai de 10 jours après la confirmation d’envoi du colis pour
                  en confirmer la bonne réception. Le vendeur est payé
                  uniquement lorsque vous confirmez la conformité du Bien et que
                  vous n’avez pas signalé de problème auprès de nos services,
                  dans un délai de 3 jours.
                </p>
              </div>
            </li>
            <li className="flex gap-2 mb-lg mt-4">
              <div>
                <MessageSquareText size={24} color="#B84A14" />
              </div>
              <div>
                <h2 className="text-subhead">Nous sommes à votre écoute</h2>
                <p className="text-sm">
                  Notre Service Client est là pour vous aider, à compter du 6ème
                  jour après la confirmation d’envoi du colis dans le cadre
                  d’une livraison, et jusqu’au 3ème jour à compter de la
                  confirmation de réception du colis par vos soins. Si vous ne
                  récupérez pas votre Bien ou qu’il est indisponible, demandez
                  l’assistance de nos services afin d’obtenir votre éventuel
                  remboursement dans les plus brefs délais.{" "}
                  <span className="font-bold">
                    Pour toute autre question, vous pouvez contacter nos
                    services. <span className="underline">En savoir plus.</span>
                  </span>
                </p>
              </div>
            </li>
            <li className="flex gap-2 mb-lg mt-4">
              <div>
                <Euro size={24} color="#B84A14" />
              </div>
              <div>
                <h2 className="text-subhead">Ce que vous payez</h2>
                <p className="text-sm">
                  Le montant total se compose du prix du Bien convenu avec votre
                  vendeur, d’éventuels frais de livraison et de frais de service
                  (4 % du prix d’achat effectif du Bien avec un minimum de 0,99
                  €).
                </p>
              </div>
            </li>
          </ul>
        </Modal>
      )}
      <Breadcrumb />
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
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg font-bold my-4">{product.price} €</p>
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
            <div className="flex items-center">
              <MapPin size={16} />
              <h2 className="text-headline-2 ml-2">{product.address}</h2>
            </div>
          </div>
          <hr className="my-lg block border-t-sm border-outline my-6 opacity-20" />
          <ProfilCard memberSince={true} />
        </div>
        <RightColumn />
      </div>
    </>
  );
}
