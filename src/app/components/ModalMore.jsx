import React from "react";
import Modal from "../components/UI/Modal";
import { Euro, MessageSquareText, ShieldCheck } from "lucide-react";
import Image from "next/image";

const ModalMore = () => {
  return (
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
              En cas de remise en main propre, votre argent est conservé sur un
              compte séquestre jusqu’à ce que vous confirmiez avoir récupéré le
              Bien. En cas de livraison, vous disposez d’un délai de 10 jours
              après la confirmation d’envoi du colis pour en confirmer la bonne
              réception. Le vendeur est payé uniquement lorsque vous confirmez
              la conformité du Bien et que vous n’avez pas signalé de problème
              auprès de nos services, dans un délai de 3 jours.
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
              jour après la confirmation d’envoi du colis dans le cadre d’une
              livraison, et jusqu’au 3ème jour à compter de la confirmation de
              réception du colis par vos soins. Si vous ne récupérez pas votre
              Bien ou qu’il est indisponible, demandez l’assistance de nos
              services afin d’obtenir votre éventuel remboursement dans les plus
              brefs délais.{" "}
              <span className="font-bold">
                Pour toute autre question, vous pouvez contacter nos services.{" "}
                <span className="underline">En savoir plus.</span>
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
              vendeur, d’éventuels frais de livraison et de frais de service (4
              % du prix d’achat effectif du Bien avec un minimum de 0,99 €).
            </p>
          </div>
        </li>
      </ul>
    </Modal>
  );
};

export default ModalMore;
