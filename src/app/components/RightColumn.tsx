import React from "react";
import Button from "./UI/Button";
import { LockKeyhole } from "lucide-react";
import Image from "next/image";
import ProfilCard from "./ProfilCard";
import { User } from "../../common/types";

const RightColumn = ({ seller }: { seller: User }) => {
  return (
    <div className="w-2/5 ml-4 p-6 border shadow-lg h-fit">
      <ProfilCard seller={seller} hasArrow={true} memberSince={false} />
      <hr className="my-lg block border-t-sm border-outline my-4" />
      <Button name="Réserver" className="w-full" url="/" />
      <Button
        name="Message"
        className="w-full mt-2"
        btnColor="bg-[#094171]"
        url="/"
      />
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
