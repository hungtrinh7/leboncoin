import React from "react";
import Button from "./UI/Button";
import { LockKeyhole } from "lucide-react";
import Image from "next/image";
import ProfilCard from "./ProfilCard";

const RightColumn = () => {
  return (
    <div className="w-2/5 ml-4 p-6 border shadow-lg h-fit">
      <ProfilCard hasArrow={true} />
      <hr className="my-lg block border-t-sm border-outline my-4" />
      <Button name="Réserver" className="w-full" />
      <Button name="Message" className="w-full mt-2" btnColor="bg-[#094171]" />
      <div className="flex justify-center mt-4">
        <LockKeyhole size={16} />
        <span className="mx-2">Paiement sécurisé</span>
        <Image
          src={"/all_payment_methods.avif"}
          width={85}
          height={16}
          alt="all payment methods"
        />
      </div>
    </div>
  );
};

export default RightColumn;
