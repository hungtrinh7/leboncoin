"use client";
import React, { useState } from "react";
import {
  AT,
  AU,
  BE,
  BR,
  BY,
  CA,
  DE,
  ES,
  FR,
  HU,
  IE,
  IT,
  MX,
  NL,
  SG,
  ZA,
} from "country-flag-icons/react/3x2";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const SelectCountries = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const classLink =
    "flex w-max min-w-[140px] p-2 text-black hover:underline hover:bg-slate-200 hover:rounded";

  const handleSelect = () => {
    setIsShown(!isShown);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div className="relative">
      <button
        className="flex justify-between w-full py-2 px-3 bg-white rounded-md"
        onClick={handleSelect}
      >
        <div className="flex">
          <FR title="France" className="w-5 mr-2" />
          <span className="text-black">France</span>
        </div>
        <ChevronDown size={20} color="#152233" />
      </button>
      {isShown && (
        <div
          className="absolute bottom-0 right-0 bg-white p-2 rounded"
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex">
            <div>
              <Link href={""} className={classLink}>
                <ZA title="Afrique du Sud" className="w-5 mr-2" />
                <span>Afrique du Sud</span>
              </Link>
              <Link href={""} className={classLink}>
                <BY title="Biélorussie" className="w-5 mr-2" />
                <span>Biélorussie</span>
              </Link>
              <Link href={""} className={classLink}>
                <IE title="Irlande" className="w-5 mr-2" />
                <span>Irlande</span>
              </Link>
            </div>
            <div>
              <Link href={""} className={classLink}>
                <DE title="Allemagne" className="w-5 mr-2" />
                <span>Allemagne</span>
              </Link>
              <Link href={""} className={classLink}>
                <BR title="Brésil" className="w-5 mr-2" />
                <span>Brésil</span>
              </Link>
              <Link href={""} className={classLink}>
                <IT title="Italie" className="w-5 mr-2" />
                <span>Italie</span>
              </Link>
            </div>
            <div>
              <Link href={""} className={classLink}>
                <AU title="Australie" className="w-5 mr-2" />
                <span>Australie</span>
              </Link>
              <Link href={""} className={classLink}>
                <CA title="Canada" className="w-5 mr-2" />
                <span>Canada</span>
              </Link>
              <Link href={""} className={classLink}>
                <MX title="Mexique" className="w-5 mr-2" />
                <span>Mexique</span>
              </Link>
            </div>
            <div>
              <Link href={""} className={classLink}>
                <AT title="Autriche" className="w-5 mr-2" />
                <span>Autriche</span>
              </Link>
              <Link href={""} className={classLink}>
                <ES title="Espagne" className="w-5 mr-2" />
                <span>Espagne</span>
              </Link>
              <Link href={""} className={classLink}>
                <NL title="Pays-Bas" className="w-5 mr-2" />
                <span>Pays-Bas</span>
              </Link>
            </div>
            <div>
              <Link href={""} className={classLink}>
                <BE title="Belgique" className="w-5 mr-2" />
                <span>Belgique</span>
              </Link>
              <Link href={""} className={classLink}>
                <HU title="Hongrie" className="w-5 mr-2" />
                <span>Hongrie</span>
              </Link>
              <Link href={""} className={classLink}>
                <SG title="Singapour" className="w-5 mr-2" />
                <span>Singapour</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCountries;
