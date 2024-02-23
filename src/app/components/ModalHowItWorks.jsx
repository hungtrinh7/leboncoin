import React from "react";
import Modal from "../components/UI/Modal";
import { Calendar, ShieldCheck, Smile } from "lucide-react";

const ModalHowItWorks = () => {
  return (
    <Modal onShowModal={setShowModalHowItWorks}>
      <p className="text-[#094171] font-bold text-base mt-4">
        Les étapes de la remise en main propre avec paiement sécurisé
      </p>
      <div className="flex items-center mt-2">
        <div className="p-2 mr-2 h-8 w-8 bg-[#E6F1FD] rounded-full">
          <Smile size={16} color="black" fill="#E6F1FD" />
        </div>
        <span>
          En réservant l’article, le vendeur vous confirme la disponibilité de
          l’article
        </span>
      </div>
      <div className="flex items-center mt-2">
        <div className="p-2 mr-2 h-8 w-8 bg-[#E6F1FD] rounded-full">
          <Calendar size={16} color="black" fill="#E6F1FD" />
        </div>
        <span>
          Vous vous organisez avec le vendeur pour définir le lieu et la date de
          votre rendez-vous
        </span>
      </div>
      <div className="flex items-center mt-2">
        <div className="p-2 mr-2 h-8 w-8 bg-[#E6F1FD] rounded-full">
          <ShieldCheck size={16} color="black" fill="#E6F1FD" />
        </div>
        <span>
          Pensez à prendre votre téléphone portable pour déclencher le paiement
          depuis votre messagerie leboncoin pendant le rendez-vous
        </span>
      </div>
    </Modal>
  );
};

export default ModalHowItWorks;
